import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LinkButton({ label, to }: Props) {
  return <LinkSld to={to}>{label}</LinkSld>;
}

const LinkSld = styled(Link)`
  display: flex;
  padding: 8px 20px;
  margin-right: 10px;
  color: rgb(23, 68, 119);
  border-width: 1px;
  border-radius: 5px;
  text-decoration: none;

  // ao passar o mouse
  &:hover {
    color: rgb(62, 99, 168);
  }
  // enquanto está clicando
  &:active {
    color: rgb(167, 19, 27);
  }

  &:visited {
    color: rgb(23, 68, 119);// mantém a cor do texto após a visita
  }
`;

interface Props {
  label: string;
  to: string;
}
