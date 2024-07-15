import { createContext, useEffect, useState } from "react";
import { ProductContextProps, ProviderProps, ErrorProps, ProductNutrientsProps } from "../types";
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

  return (
    <ProductContext.Provider value={{ products, error, setError }}>
      {children}
    </ProductContext.Provider>
  );
}
