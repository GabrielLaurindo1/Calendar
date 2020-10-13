import styled from "styled-components";

export const DayNumber = styled.p`
  color: ${(props) => (!props.validDay ? "gray" : "")};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const AddButton = styled.button`
  font-size: 20px;
  cursor: pointer;
  max-height: 25px;
  max-width: 25px;
  padding: 10px;
  display: none;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  background-color: ${(props) =>
    props.weekDay === "Sun" || props.weekDay === "Sat" ? "white" : "#e8e8e8"};
`;

export const Wrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Card = styled.div`
  padding: 10px;
  height: 100%;
  min-height: 100px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  &:hover ${AddButton} {
    display: flex;
  }

  background-color: ${(props) =>
    props.weekDay === "Sun" || props.weekDay === "Sat" ? "#e8e8e8" : ""};

  color: ${(props) =>
    props.weekDay === "Sun" || props.weekDay === "Sat" ? "#4e4ee2" : ""};
`;

export const Reminder = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${(props) => (props.color ? props.color : "black")};
  border-radius: 50%;
  margin: 3px 5px;
`;

export const Footer = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-wrap: wrap;
`;
