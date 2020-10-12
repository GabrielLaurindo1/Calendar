import React, { useState } from "react";
import { Wrapper } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { TwitterPicker } from "react-color";
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
  TimeBox,
  Button,
  Box,
  Label,
  Date,
  Span,
  SketchContainer,
} from "./styles.js";
import { toggleModal, addReminder } from "../../store/ducks/modal";

export default function Modal() {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.toggleModal);
  const { selectedDay } = useSelector((state) => state.toggleModal);
  const [message, setMessage] = useState("");
  const [city, setCity] = useState("");
  const [hour, setHour] = useState("");
  const [color, setColor] = useState("");
  const resetForm = () => {
    setMessage("");
    setHour("");
    setColor("");
  };

  const handleNewReminder = () => {
    dispatch(addReminder({ time: hour, message: message, color: color }));
    resetForm();
    dispatch(toggleModal());
  };

  const handleChangeColor = (color, e) => {
    setColor(color.hex);
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
              <Box>
                <Message>Message</Message>
                <TextArea
                  maxLength={30}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Label>* maximum 30 characters</Label>
              </Box>
              <Box>
                <Message>City</Message>
                <TextArea
                  maxLength={30}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Box>
              <Box>
                <Message>Choose a hour for the reminder</Message>
                <TimeBox>
                  <InputTime
                    onChange={(e) => setHour(e.target.value)}
                    type="time"
                  />
                  <Span>-</Span>
                  <Date> {selectedDay.date} </Date>
                </TimeBox>
              </Box>
              <SketchContainer>
                <Message>Choose a color for the reminder!</Message>
                <TwitterPicker
                  color={color}
                  onChangeComplete={(color, e) => handleChangeColor(color, e)}
                />
              </SketchContainer>
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
