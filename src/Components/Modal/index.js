import React, { useState } from "react";
import { Wrapper } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import {
  Header,
  CloseButton,
  Container,
  Title,
  Message,
  TextArea,
  Form,
  Footer,
  InputTime,
  SpaceBetween,
  Button,
  Box,
  Label,
} from "./styles.js";
import { toggleModal, addReminder } from "../../store/ducks/modal";

export default function Modal() {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.toggleModal);
  const { selectedDay } = useSelector((state) => state.toggleModal);
  const [message, setMessage] = useState("");
  const [hour, setHour] = useState("");

  const resetForm = () => {
    setMessage("");
    setHour("");
  };

  const handleNewReminder = () => {
    dispatch(addReminder({ time: hour, message: message }));
    resetForm();
    dispatch(toggleModal());
  };

  return (
    <>
      {open && (
        <Wrapper>
          <Container>
            <Header>
              <Title>Add Reminder</Title>
              <CloseButton onClick={() => dispatch(toggleModal())}>
                X
              </CloseButton>
            </Header>
            <Form>
              <SpaceBetween>
                <Message>Message</Message>
                <Message>
                  {selectedDay ? selectedDay.dateString : "123"}
                </Message>
              </SpaceBetween>
              <TextArea
                maxLength={30}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Label>* maximum 30 characters</Label>
              <Box>
                <Message>Choose a time for the reminder</Message>
                <InputTime
                  onChange={(e) => setHour(e.target.value)}
                  type="time"
                />
              </Box>
            </Form>
            <Footer>
              <Button onClick={() => dispatch(toggleModal())}>Close</Button>
              <Button
                color="#FFF"
                background="#4e4ee2"
                disabled={message.length < 5 || hour === ""}
                onClick={() => handleNewReminder()}
              >
                Add This Reminder
              </Button>
            </Footer>
          </Container>
        </Wrapper>
      )}
    </>
  );
}
