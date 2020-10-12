import React from "react";
import { useSelector } from "react-redux";
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
  Button,
} from "./styles.js";
import { dateParts } from "../../Helpers";
export default function Reminders() {
  const { reminders } = useSelector((state) => state.reminders);

  console.log(reminders);
  return (
    <>
      <Wrapper>
        <BoxTitle>
          <Title>Reminders</Title>
        </BoxTitle>
        <Container>
          {reminders.map((reminder, i) => {
            const date = dateParts(reminder.dateObject);
            if (reminder.dateObject) {
              return (
                <>
                  <BackgroundColor backgroundColor={reminder.color}>
                    <Card key={i}>
                      <Box>
                        <Header borderColor={reminder.color}>
                          <Date>
                            <DayNumber>{date.day}</DayNumber>
                            <Month>{date.month}</Month>
                          </Date>
                        </Header>
                        <Subtitle borderColor={reminder.color}>
                          São Paulo - {reminder.time}
                        </Subtitle>
                        <BoxMessage>
                          <ColorReminder color={reminder.color} />
                          <Message>{reminder.message}</Message>
                        </BoxMessage>
                      </Box>
                      <Toolbar>
                        <Button>
                          <img
                            alt="Editar"
                            width="20px"
                            src="https://image.flaticon.com/icons/png/512/61/61456.png"
                          />
                        </Button>
                        <Button>
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
