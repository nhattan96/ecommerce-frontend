import styled, { css } from "styled-components";

export const ButtonStyle = css`
  border: 0;
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  word-break: keep-all;
  align-items: center;
  svg {
    margin-right: 5px;
  }
  ${(props) =>
    props.$primary &&
    css`
      background-color: #5542f6;
      border: 1px solid #5542f6;
    `}
  ${(props) =>
    props.$whiteoutline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `}
    ${(props) =>
    props.white &&
    css`
      background-color: #fff;
      color: #000;
      border: 1px solid #fff;
    `}
  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
