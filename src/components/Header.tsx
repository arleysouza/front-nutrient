import styled from "styled-components";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { useUser } from "../hooks";
import AdmMenu from "./AdmMenu";

export default function Header() {
  const {token} = useUser();

  return (
    <Wrapper>
        <Logo />
        {token && token.role ==="user" && <UserMenu />}
        {token && token.role ==="adm" && <AdmMenu />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;
