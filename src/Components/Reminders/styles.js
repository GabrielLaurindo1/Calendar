import styled from "styled-components";

const borderColor = "1px solid rgba(0, 0, 0, 0.3)";
const color = "#454444";

export const Wrapper = styled.div`
  max-width: 290px;
  width: 100%;
  border: ${borderColor};
  height: 100%;
  position: relative;
`;

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid ${borderColor};
  box-shadow: 0 3px 7px ${borderColor};
  margin: 10px;
  padding: 5px;
  border-radius: 4px;
  display: flex;

  justify-content: space-between;
`;

export const BoxMessage = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  padding: 5px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "black"};
`;

export const BackgroundColor = styled.div`
  background: ${(props) => props.backgroundColor};
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  border-color: 2px solid red;
  width: 100%;
`;

export const ColorReminder = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${(props) => (props.color ? props.color : "black")};
  border-radius: 50%;
  margin: 3px 5px 3px 0px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
`;

export const Month = styled.h1`
  font-size: 21px;
  font-weight: 300;
`;
export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DayNumber = styled.h2`
  font-weight: bold;
  font-size: 27px;
  display: block;
  padding-right: 5px;
`;

export const Title = styled.h1`
  font-size: 25px;
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: 300;
`;

export const BoxTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-bottom: ${borderColor};
`;

export const Message = styled.h2`
  font-size: 17px;
  color: ${color};
  font-weight: 400;
`;

export const Subtitle = styled.h2`
  font-size: 17px;
  color: ${color};
  font-weight: 400;
  padding: 5px 0;
`;

export const Teste = styled.div`
  display: flex;
`;

export const Toolbar = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  padding: 5px;
  align-items: center;
  justify-content: center;
  max-width: 40px;
  justify-content: space-between;
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const ContainerWeather = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BoxTemperature = styled.div`
  display: flex;
  padding-top: 5px;
  max-width: 150px;
  justify-content: space-between;
`;
