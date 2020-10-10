import styled from "styled-components";

export const Wrapper = styled.div``;

export const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 130px);
  justify-content: center;

  > div {
    &:first-child {
      /* ${(props) => (props.hover ? "padding-left: 15px" : "")}; */
      grid-column: ${(props) => props.initialDate};
    }
  }

  /* border: 1px solid gray; */
`;

export const WeekGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 130px);
  justify-content: center;
  /* border: 1px solid gray; */
`;

export const WeekDay = styled.div`
  background-color: blue;
  padding: 5px 10px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
`;

export const Day = styled.div``;

// ${(props) => (props.hover ? "padding-left: 15px" : "")};
