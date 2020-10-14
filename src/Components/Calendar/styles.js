import styled from "styled-components";
const gridWidth = "135px";
export const Wrapper = styled.div``;

export const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, ${gridWidth});
  justify-content: center;
`;

export const WeekGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, ${gridWidth});
  justify-content: center;
`;

export const WeekDay = styled.div`
  background-color: #4e4ee2;
  padding: 5px 10px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
`;

export const Day = styled.div`
  color: ${(props) => (!props.selectedMonth ? "gray" : "")};
`;
