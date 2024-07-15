import styled from "styled-components";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { useUser } from "../hooks";

export default function Header() {
  const {token} = useUser();

  return (
    <Wrapper>
        <Logo />
        {token && <UserMenu />}
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
