import styled from "styled-components";
import logo from "../assets/fatec.png";

export default function Logo() {
  return (
    <Wrapper>
      <ImageSld src={logo} alt="" />
      <TextSld>Nutrientes dos alimentos</TextSld>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImageSld = styled.img`
  width: 150px;
  height: auto;
`;

const TextSld = styled.h1`
  display: flex;
  color: rgb(202, 60, 74);
  margin-left: 20px;
`;
