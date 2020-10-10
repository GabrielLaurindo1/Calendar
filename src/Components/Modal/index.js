import React from "react";
import { Wrapper } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import {
  Header,
  CloseButton,
  Container,
  Title,
  Message,
  TextArea,
  MessageBox,
  Footer,
  Button,
  Label,
} from "./styles.js";
import { toggleModal } from "../../store/ducks/modal";

export default function Modal() {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.toggleModal);
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
            <MessageBox>
              <Message>
                <>Message</>
              </Message>
              <TextArea maxLength={30} />
              <Label>* maximum 30 characters</Label>
            </MessageBox>
            <Footer>
              <Button>Close</Button>
              <Button color="#FFF" background="#4e4ee2">
                Add This Reminder
              </Button>
            </Footer>
          </Container>
        </Wrapper>
      )}
    </>
  );
}
