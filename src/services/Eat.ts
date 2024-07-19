import { EatProductProps, ErrorProps } from "../types";
import { api } from "./api";

class Eat {
  async listProducts(date:string): Promise<EatProductProps[] | ErrorProps> {
    try {
      const params = {date};
      const { data } = await api.get("/eat/product", { params });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async createProduct(product:string, date:string, quantity:number): Promise<EatProductProps[] | ErrorProps> {
    try {
      const { data } = await api.post("/eat/product", { product, date, quantity });
      return data;
    } catch (error: any) {
      return error;
    }
  }

}

const eat = new Eat();
export default eat;
