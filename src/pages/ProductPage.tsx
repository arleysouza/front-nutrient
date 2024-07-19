import { useState } from "react";
import styled from "styled-components";
import {
  Header,
  Error,
  PopupMessage,
  ScrollableProductList,
} from "../components";
import { useProduct } from "../hooks";

export default function ProductPage() {
  const { products, error } = useProduct();
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");
 
  return (
    <Wrapper>
      <Header />
      {error && <Error>{error.error}</Error>}
      {showPopup && (
        <PopupMessage message={messagePopup} setShowPopup={setShowPopup} />
      )}
      <FieldWrapper>
        <ScrollableProductList label="Seus produtos" products={products} setMessagePopup={setMessagePopup} setShowPopup={setShowPopup} />
      </FieldWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
  padding: 20px;
  border: 1px solid #999;
  border-radius: 5px;
  box-sizing: border-box;
`;
