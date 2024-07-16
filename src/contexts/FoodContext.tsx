import { createContext, useEffect, useState } from "react";
import {
  FoodContextProps,
  ProviderProps,
  PageProps,
  FoodNutrientsProps,
  ErrorProps,
} from "../types";
import { Food } from "../services";
import { isErrorProps } from "../utils";

export const FoodContext = createContext({} as FoodContextProps);

export function FoodProvider({ children }: ProviderProps) {
  const [pageFoods, setPageFoods] = useState<PageProps | null>(null);
  const [error, setError] = useState<ErrorProps | null>(null);
  const [food, setFood] = useState<FoodNutrientsProps | null>(null);

  useEffect(() => {
    getFoodsByPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getFoodsByPage(page: number): Promise<void> {
    try {
      const response = await Food.list(page);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setPageFoods(response);
        setError(null);
      }
    } catch (e: any) {
      setError(e.message);
    }
  }

  async function search(term: string) {
    try {
      const response = await Food.search(term);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setPageFoods(response);
        setError(null);
      }
    } catch (e: any) {
      setError(e.message);
    }
  }

  async function getById(id: string): Promise<void> {
    try {
      const response = await Food.getById(id);

      if (isErrorProps(response)) {
        setError(response);
      } else {
        setFood(response);
        setError(null);
      }
    } catch (e: any) {
      setError(e.message);
    }
  }

  return (
    <FoodContext.Provider
      value={{
        pageFoods,
        food,
        error,
        getFoodsByPage,
        search,
        getById,
        setError,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}
