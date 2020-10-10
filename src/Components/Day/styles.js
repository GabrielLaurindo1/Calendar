import styled from "styled-components";

export const Card = styled.div`
  padding: 10px;
  height: 100%;
  min-height: 100px;
  background-color: ${(props) =>
    props.weekDay === "Sun" || props.weekDay === "Sat" ? "red" : ""};
`;

export const Wrapper = styled.div`
  /* padding: 10px;
  height: 100%; */
  /* min-height: 100px; */
  border: 1px solid gray;
`;
// ${(props) => (props.hover ? "padding-left: 15px" : "")};
