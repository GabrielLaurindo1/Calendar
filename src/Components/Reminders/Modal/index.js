import React, { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { TwitterPicker } from "react-color";
import Loader from "../../Loader";
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
  DateLabel,
  Span,
  SketchContainer,
} from "./styles.js";
import { dateParts } from "../../../Helpers";
import {
  toggleModal,
  addReminder,
  editReminder,
} from "../../../store/ducks/modal";

export default function Modal() {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.toggleModal);
  const { typeModal } = useSelector((state) => state.toggleModal);
  const { selectedDay } = useSelector((state) => state.toggleModal);
  const [message, setMessage] = useState("tes111teea");
  const [city, setCity] = useState("Campinas");
  const { selectedReminder } = useSelector((state) => state.reminders);
  const [hour, setHour] = useState("23:50");
  const [color, setColor] = useState("");

  const API_KEY = 62210108;
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("2020-10-13");

  useEffect(() => {
    if (typeModal === "edit") {
      let dateParts = selectedReminder.reminder.dateString.split("/");
      setHour(selectedReminder.reminder.time);
      setCity(selectedReminder.reminder.city);
      setColor(selectedReminder.reminder.color);
      setMessage(selectedReminder.reminder.message);
      setDate(`${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`);
    }
  }, [typeModal]);

  const getForecast = (forecast, date) => {
    console.log(forecast, date);
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

  const getWeather = async (city) => {
    let response = [];
    // let url = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city}&format=json-cors&appid=b81bd0ecc553c33243e5e11cce184a41&callback=test`;
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

      console.log(getForecast(weather.forecast, parsedDate(date).dateString));
      if (typeModal === "create") {
        dispatch(
          addReminder({
            time: hour,
            message,
            color,
            city,
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

  const handleChangeColor = (color, e) => {
    setColor(color.hex);
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
                    onChange={(e) => setDate(e.target.value)}
                  ></InputTime>
                  {/* <DateLabel> {selectedDay.date} </DateLabel> */}
                </TimeBox>
              </Box>
              <Box>
                <SketchContainer>
                  <Message>Choose a color for the reminder!</Message>
                  <TwitterPicker
                    color={color}
                    onChangeComplete={(color, e) => handleChangeColor(color, e)}
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
                disabled={message.length < 5 || hour === ""}
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
