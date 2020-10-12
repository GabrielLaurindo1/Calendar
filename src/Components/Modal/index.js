import React, { useEffect, useState } from "react";
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
  const [message, setMessage] = useState("testee");
  const [city, setCity] = useState("Campinas");
  const [hour, setHour] = useState("23:50");
  const [color, setColor] = useState("");

  const API_KEY = 62210108;
  const [loading, setLoading] = useState(false);
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

  const handleNewReminder = async () => {
    setLoading(true);
    try {
      let weather = await getWeather(city);
      if (weather) {
        dispatch(
          addReminder({
            time: hour,
            message: message,
            color: color,
            city: city,
            weather: weather,
          })
        );
        resetForm();
        dispatch(toggleModal());
      }
    } catch (error) {
      console.log("erro");
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
              <Title>{loading ? "Add Reminder" : "Loading"}</Title>

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
