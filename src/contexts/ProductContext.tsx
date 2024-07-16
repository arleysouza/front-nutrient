import { createContext, useEffect, useState } from "react";
import {
  ProductContextProps,
  ProviderProps,
  ErrorProps,
  ProductNutrientsProps,
} from "../types";
import { Product } from "../services";
import { isErrorProps } from "../utils";

export const ProductContext = createContext({} as ProductContextProps);

export function ProductProvider({ children }: ProviderProps) {
  const [error, setError] = useState<ErrorProps | null>(null);
  const [products, setProducts] = useState<ProductNutrientsProps[]>([]);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getProducts(): Promise<void> {
    try {
      const response = await Product.listUserProducts();
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setProducts(response);
        setError(null);
      }
    } catch (e: any) {
      setError(e.message);
    }
  }

  async function create(
    description: string,
    serving_size: number | null,
    serving_size_unit: string | null,
    quantity_per_serving: number | null,
    quantity_per_serving_unit: string | null,
    energy: number | null,
    protein: number | null,
    carbohydrate: number | null,
    sugar: number | null,
    dietary_fiber: number | null,
    total_fat: number | null,
    saturated_fat: number | null,
    trans_fat: number | null,
    calcium: number | null,
    sodium: number | null
  ): Promise<boolean> {
    try {
      const response = await Product.create(
        description,
        serving_size,
        serving_size_unit,
        quantity_per_serving,
        quantity_per_serving_unit,
        energy,
        protein,
        carbohydrate,
        sugar,
        dietary_fiber,
        total_fat,
        saturated_fat,
        trans_fat,
        calcium,
        sodium
      );
      if (isErrorProps(response)) {
        setError(response);
        return false;
      } else {
        getProducts();
        setError(null);
        return true;
      }
    } catch (e: any) {
      setError(e.message);
      return false;
    }
  }

  async function update(
    id: string,
    description: string,
    serving_size: number | null,
    serving_size_unit: string | null,
    quantity_per_serving: number | null,
    quantity_per_serving_unit: string | null,
    energy: number | null,
    protein: number | null,
    carbohydrate: number | null,
    sugar: number | null,
    dietary_fiber: number | null,
    total_fat: number | null,
    saturated_fat: number | null,
    trans_fat: number | null,
    calcium: number | null,
    sodium: number | null
  ): Promise<boolean> {
    try {
      const response = await Product.update(
        id,
        description,
        serving_size,
        serving_size_unit,
        quantity_per_serving,
        quantity_per_serving_unit,
        energy,
        protein,
        carbohydrate,
        sugar,
        dietary_fiber,
        total_fat,
        saturated_fat,
        trans_fat,
        calcium,
        sodium
      );
      if (isErrorProps(response)) {
        setError(response);
        return false;
      } else {
        getProducts();
        setError(null);
        return true;
      }
    } catch (e: any) {
      setError(e.message);
      return false;
    }
  }

  return (
    <ProductContext.Provider value={{ products, error, setError, create, update }}>
      {children}
    </ProductContext.Provider>
  );
}
