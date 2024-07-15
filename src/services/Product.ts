import { ErrorProps, ProductNutrientsProps } from "../types";
import { api } from "./api";

class Product {
  async listUserProducts(): Promise<ProductNutrientsProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/product/byuser");
      return data;
    } catch (error: any) {
      return error;
    }
  }

}

const product = new Product();
export default product;
