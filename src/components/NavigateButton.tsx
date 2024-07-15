import styled, { css } from "styled-components";

export default function NavigateButton({ label, click, disabled }: Props) {
  return <Sld onClick={click} disabled={disabled}>{label}</Sld>;
}

export const Sld = styled.button<{ disabled: boolean }>`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 0px 5px;
  background-color: rgb(22, 66, 46);
  color: #fff;
  font-size: 110%;
  border: none;
  border-radius: 5px;
  width: 40px;
  height: auto;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(41, 110, 78);
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: rgb(200, 200, 200);
      cursor: not-allowed;
    `}
`;

interface Props {
  label: string;
  click: () => void;
  disabled: boolean;
}