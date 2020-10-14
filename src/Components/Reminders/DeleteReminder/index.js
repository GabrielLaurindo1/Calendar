import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  Header,
  CloseButton,
  Container,
  Title,
  Wrapper,
  Footer,
  Button,
} from "../Modal/styles";

import {
  toggleModalDelete,
  deleteAllReminders,
} from "../../../store/ducks/calendar";

export default function ModalDelete() {
  const dispatch = useDispatch();
  const { openModalDelete, selectedDay } = useSelector(
    (state) => state.toggleModal
  );

  const handleDeleteAll = () => {
    dispatch(deleteAllReminders());
    dispatch(toggleModalDelete());
  };

  return (
    <>
      {openModalDelete && (
        <Wrapper>
          <Container>
            <Header>
              <Title>
                Do you want to delete all reminders for the day{" "}
                {selectedDay.date}?
              </Title>
              <CloseButton onClick={() => dispatch(toggleModalDelete())}>
                X
              </CloseButton>
            </Header>
            <Footer>
              <Button onClick={() => dispatch(toggleModalDelete())}>
                Cancel
              </Button>
              <Button
                color="#FFF"
                background="#4e4ee2"
                onClick={() => handleDeleteAll()}
              >
                Delete All
              </Button>
            </Footer>
          </Container>
        </Wrapper>
      )}
    </>
  );
}
