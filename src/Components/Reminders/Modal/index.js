import React, { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { TwitterPicker } from "react-color";
import Loader from "../../Loader";
import { getMonth } from "date-fns";
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
  Span,
  SketchContainer,
} from "./styles.js";

import {
  toggleModal,
  addReminder,
  editReminder,
} from "../../../store/ducks/modal";

export default function Modal() {
  const API_KEY = 62210108;

  const dispatch = useDispatch();

  const { open, selectedDay } = useSelector((state) => state.toggleModal);
  const { typeModal } = useSelector((state) => state.toggleModal);
  const { selectedReminder } = useSelector((state) => state.reminders);

  const [message, setMessage] = useState("");
  const [city, setCity] = useState("");
  const [hour, setHour] = useState("");
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");

  //YYYY-MM-DD
  const minDateInput = `${new Date().getFullYear()}-${
    getMonth(new Date()) + 1
  }-${new Date().getDate()}`;

  useEffect(() => {
    if (typeModal === "edit") {
      let dateParts = selectedReminder.reminder.dateString.split("/");
      setHour(selectedReminder.reminder.time);
      setCity(selectedReminder.reminder.city);
      setColor(selectedReminder.reminder.color);
      setMessage(selectedReminder.reminder.message);
      setDate(`${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`);
    } else {
      if (selectedDay.date) {
        let dateParts = selectedDay.date.split("/");
        setDate(`${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`);
      }
    }
  }, [typeModal, selectedDay]);

  //RECEBE UM ARRAY DE CLIMAS E A DATA DESEJADA E RETORNA O CLIMA DA DATA ESCOLHIDA
  const getForecast = (forecast, date) => {
    let x = date.split("/");
    let parsedDate = `${x[2]}/${x[1]}`;
    let ret = [];

    if (forecast) {
      forecast.forEach((day) => {
        if (day.date === parsedDate) {
          ret.push(day);
        }
      });
    }
    return ret;
  };

  //RECEBE DATA COM FORMATO YYYY-MM-DD E DEVOLVE UM OBJETO DATE E UM YYYY/MM/DD
  const parsedDate = (date) => {
    const dateParts = date.split("-");
    let day = dateParts[2];
    let month = dateParts[1];
    let year = dateParts[0];

    return {
      dateObject: new Date(`${year},${month},${day}`),
      dateString: `${year}/${month}/${day}`,
    };
  };

  //REQUISIÇÃO ASSINCRONA NA API PARA CAPTURAR O CLIMA DA CIDADE NO DIA DO EVENTO
  const getWeather = async (city) => {
    let response = [];
    let url = `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=${city}`;
    const config = {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
      },
    };

    await fetch(url, config)
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.error) {
          alert(resp.error);
          resp = "Erro";
          response.push(["Erro"]);
        } else {
          response.push(resp.results);
          return resp;
        }
      });
    return response;
  };

  const resetForm = () => {
    setMessage("");
    setHour("");
    setColor("");
    setCity("");
  };

  const handleReminder = async () => {
    setLoading(true);
    try {
      let weather = await getWeather(city);

      if (typeModal === "create") {
        dispatch(
          addReminder({
            time: hour,
            message,
            color,
            city,
            dateString: parsedDate(date).dateString,
            dateObject: parsedDate(date).dateObject,
            weather: [
              getForecast(weather[0].forecast, parsedDate(date).dateString),
            ],
          })
        );
      } else {
        dispatch(
          editReminder({
            time: hour,
            message,
            color,
            city,
            dateString: parsedDate(date).dateString,
            dateObject: parsedDate(date).dateObject,
            weather: getForecast(
              weather[0].forecast,
              parsedDate(date).dateString
            ),
            // new Date(year, month, day, hour)
          })
        );
      }

      resetForm();
      setLoading(false);
      dispatch(toggleModal());
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {open && (
        <Wrapper>
          <Container>
            <Header>
              <Title>
                {typeModal === "create"
                  ? "Create a new reminder"
                  : "Edit this reminder"}
              </Title>
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
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                    type="time"
                  />
                  <Span>-</Span>
                  <InputTime
                    value={date}
                    type="date"
                    min={minDateInput}
                    onChange={(e) => setDate(e.target.value)}
                  ></InputTime>
                </TimeBox>
              </Box>
              <Box>
                <SketchContainer>
                  <Message>Choose a color for the reminder!</Message>
                  <TwitterPicker
                    color={color}
                    onChangeComplete={(color) => setColor(color.hex)}
                  />
                  <Label>* If no color is chosen, black will be used.</Label>
                </SketchContainer>
              </Box>
            </Form>
            <Footer>
              <Button onClick={() => dispatch(toggleModal())}>Cancel</Button>
              <Button
                color="#FFF"
                background="#4e4ee2"
                disabled={hour === ""}
                onClick={() => handleReminder()}
              >
                {loading ? (
                  <Loader />
                ) : typeModal === "create" ? (
                  "Add This Reminder"
                ) : (
                  "Edit Reminder"
                )}
              </Button>
            </Footer>
          </Container>
        </Wrapper>
      )}
    </>
  );
}
