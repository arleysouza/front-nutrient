import { createContext, useEffect, useState } from "react";
import {
  ProviderProps,
  ErrorProps,
  EatProductProps,
  EatContextProps,
  ProductNutrientsProps,
  FoodProps,
} from "../types";
import { Eat, Food, Product } from "../services";
import { dateFormat, isErrorProps } from "../utils";

export const EatContext = createContext({} as EatContextProps);

export function EatProvider({ children }: ProviderProps) {
  const [error, setError] = useState<ErrorProps | null>(null);
  const [day,setDay] = useState<Date>(new Date());
  const [eatProducts, setEatProducts] = useState<EatProductProps[]>([]);
  const [products, setProducts] = useState<ProductNutrientsProps[]>([]);
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    getEatProduct(dateFormat(day));
  }, [day]);

  async function getEatProduct(date:string): Promise<void> {
    try {
      const response = await Eat.listProducts(date);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setEatProducts(response);
        setError(null);
      }
    } catch (e: any) {
      setError(e.message);
    }
  }

  async function createProduct(product:string, date:string, quantity:number): Promise<boolean> {
    try {
      const response = await Eat.createProduct(product,date,quantity);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        getEatProduct(dateFormat(day));
        setError(null);
        return true;
      }
    } catch (e: any) {
      setError(e.message);
    }
    return false;
  }

  async function searchProduct(term:string): Promise<boolean> {
    try {
      const response = await Product.search(term);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setError(null);
        setProducts(response);
        return response.length === 0;
      }
    } catch (e: any) {
      setError(e.message);
    }
    return false;
  }

  async function searchFood(term: string): Promise<boolean> {
    try {
      const response = await Food.search(term);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setFoods(response.items);
        setError(null);
      }
    } catch (e: any) {
      setError(e.message);
    }
    return false;
  }

  return (
    <EatContext.Provider value={{ eatProducts, foods, products, searchFood, searchProduct, error, setError, createProduct, setDay }}>
      {children}
    </EatContext.Provider>
  );
}
