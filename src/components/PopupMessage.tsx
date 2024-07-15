import { useEffect } from "react";
import styled from "styled-components";

interface Props {
  message: string;
  duration?: number; // Duration in milliseconds
  setShowPopup: (value:boolean) => void;
}

function PopupMessage({ message, duration = 4000, setShowPopup }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false); // esconde o PopupMessage no componente pai
    }, duration);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [duration, setShowPopup]);

  return <Popup>{message}</Popup>;
}

export default PopupMessage;

const Popup = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  background-color: rgba(13, 149, 228, 0.959);
  color: white;
  border-radius: 5px;
  z-index: 1000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
