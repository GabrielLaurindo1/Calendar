import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dateParts } from "../../Helpers";

import {
  selectReminder,
  toggleModal,
  deleteReminder,
} from "../../store/ducks/calendar";

import {
  Container,
  Wrapper,
  Message,
  BackgroundColor,
  ColorReminder,
  Card,
  BoxMessage,
  Month,
  BoxTitle,
  Date,
  Header,
  DayNumber,
  Subtitle,
  Toolbar,
  Box,
  Title,
  ContainerWeather,
  BoxTemperature,
} from "./styles.js";

import { Button } from "./Modal/styles";

export default function Reminders() {
  const { reminders } = useSelector((state) => state.reminders);
  const dispatch = useDispatch();

  const handleEditModal = (reminder, i) => {
    dispatch(toggleModal("edit"));
    let ret = { reminder: reminder, index: i };
    dispatch(selectReminder(ret));
  };

  return (
    <>
      <Wrapper>
        <BoxTitle>
          <Title>Reminders</Title>
        </BoxTitle>
        <Container>
          {reminders.map((reminder, i) => {
            if (reminder.dateObject) {
              const date = dateParts(reminder.dateObject);
              return (
                <>
                  <BackgroundColor backgroundColor={reminder.color} key={i}>
                    <Card>
                      <Box>
                        <Header borderColor={reminder.color}>
                          <Date>
                            <DayNumber>{date.day}</DayNumber>
                            <Month>{date.month}</Month>
                          </Date>
                        </Header>
                        <Subtitle borderColor={reminder.color}>
                          {reminder.city} - {reminder.time}
                        </Subtitle>
                        {reminder?.weather[0]?.description ? (
                          <ContainerWeather>
                            <Message>{reminder.weather[0].description}</Message>
                            <BoxTemperature>
                              <Message>Max: {reminder.weather[0].max}°</Message>
                              <Message>Min: {reminder.weather[0].min}°</Message>
                            </BoxTemperature>
                          </ContainerWeather>
                        ) : (
                          <Message>Ainda sem previsão</Message>
                        )}
                        <BoxMessage>
                          <ColorReminder color={reminder.color} />
                          <Message>{reminder.message}</Message>
                        </BoxMessage>
                      </Box>
                      <Toolbar>
                        <Button onClick={() => handleEditModal(reminder, i)}>
                          <img
                            alt="Editar"
                            width="20px"
                            src="https://image.flaticon.com/icons/png/512/61/61456.png"
                          />
                        </Button>
                        <Button onClick={() => dispatch(deleteReminder(i))}>
                          <img
                            alt="Excluir"
                            width="20px"
                            src="https://img.icons8.com/ios/452/delete-sign.png"
                          />
                        </Button>
                      </Toolbar>
                    </Card>
                  </BackgroundColor>
                </>
              );
            }
          })}
        </Container>
      </Wrapper>
    </>
  );
}
