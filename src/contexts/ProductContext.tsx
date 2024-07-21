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
    getUserProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getUserProducts(): Promise<void> {
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

  async function search(term:string): Promise<ProductNutrientsProps[]> {
    try {
      const response = await Product.search(term);
      if (isErrorProps(response)) {
        setError(response);
      } else {
        setError(null);
        return response;
      }
    } catch (e: any) {
      setError(e.message);
    }
    return [];
  }

  async function create(
    description: string,
    serving_size: number,
    serving_size_unit: string,
    quantity_per_serving: number,
    quantity_per_serving_unit: string,
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
        getUserProducts();
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
    serving_size: number,
    serving_size_unit: string,
    quantity_per_serving: number,
    quantity_per_serving_unit: string,
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
        getUserProducts();
        setError(null);
        return true;
      }
    } catch (e: any) {
      setError(e.message);
      return false;
    }
  }

  async function remove(id:string): Promise<boolean> {
    try{
      const response = await Product.delete(id);
      if (isErrorProps(response)) {
        setError(response);
        return false;
      } else {
        getUserProducts();
        setError(null);
        return true;
      }
    } catch (e: any) {
      setError(e.message);
      return false;
    }
  }

  return (
    <ProductContext.Provider value={{ products, search, error, setError, create, update, remove }}>
      {children}
    </ProductContext.Provider>
  );
}
