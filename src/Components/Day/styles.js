import styled from "styled-components";

export const DayNumber = styled.p`
  color: ${(props) => (!props.seletedMonth ? "gray" : "")};
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
  border: 1px solid gray;
`;

export const Card = styled.div`
  padding: 10px;
  height: 100%;
  min-height: 100px;
  cursor: pointer;
  &:hover ${AddButton} {
    display: flex;
  }

  background-color: ${(props) =>
    props.weekDay === "Sun" || props.weekDay === "Sat" ? "#e8e8e8" : ""};

  color: ${(props) =>
    props.weekDay === "Sun" || props.weekDay === "Sat" ? "#4e4ee2" : ""};
`;
