import { useContext } from "react";
import { FoodContext } from "../contexts";

export default function useFood(){
    const context = useContext(FoodContext);
    if (!context) {
      throw new Error("O hook useFood deve ser chamado dentro do contexto delimitado por FoodContext");
    }
    return context;
}