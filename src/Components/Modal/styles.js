import styled from "styled-components";

const borderColor = "1px solid rgba(0, 0, 0, 0.3)";
const borderRadius = "5px";
const color = "#454444";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 500px;

  border: 1px solid ${borderColor};
  border-radius: ${borderRadius};
  box-shadow: 0 3px 7px ${borderColor};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${borderColor};
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 25px;
  color: black;
  font-weight: 300;
`;

export const CloseButton = styled.button`
  font-size: 20px;
  cursor: pointer;
  border: none;
  font-weight: bold;
  background-color: transparent;
`;

export const Form = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Message = styled.h2`
  font-size: 17px;
  color: ${color};
  font-weight: 400;
  padding-bottom: 5px;
`;

export const TextArea = styled.textarea`
  font-size: 13px;
  padding: 5px;
  color: ${color};
  border: ${borderColor};
  border-radius: ${borderRadius};
`;

export const Footer = styled.footer`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export const Label = styled.p`
  font-size: 11px;
  padding-top: 5px;
  color: ${color};
`;

export const InputTime = styled.input`
  max-width: 75px;
  cursor: pointer;
`;

export const Box = styled.div`
  padding: 20px 0;
`;

export const Button = styled.button`
  border-radius: ${borderRadius};
  border: ${borderColor};
  padding: 10px;
  font-weight: 400;
  cursor: pointer;
  font-size: 15px;
  background-color: ${(props) =>
    props.background ? props.background : "#FFF"};
  color: ${(props) => (props.color ? props.color : color)};
  ${(props) =>
    props.disabled
      ? `
          background: gray;
        `
      : `
        ;
        `};
`;
