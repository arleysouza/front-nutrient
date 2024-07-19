import { useContext } from "react";
import { EatContext } from "../contexts";

export default function useEat(){
    const context = useContext(EatContext);
    if (!context) {
      throw new Error("O hook useEat deve ser chamado dentro do contexto delimitado por EatContext");
    }
    return context;
}