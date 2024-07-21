import { EatFoodProps, EatProductProps, ErrorProps } from "../types";
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

  async deleteProduct(id:string): Promise<EatProductProps | ErrorProps> {
    try {
      const { data } = await api.delete(`/eat/product/${id}`);
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async listFoods(date:string): Promise<EatFoodProps[] | ErrorProps> {
    try {
      const params = {date};
      const { data } = await api.get("/eat/food", { params });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async createFood(food:string, date:string, quantity:number): Promise<EatProductProps[] | ErrorProps> {
    try {
      const { data } = await api.post("/eat/food", { food, date, quantity });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async deleteFood(id:string): Promise<EatFoodProps | ErrorProps> {
    try {
      const { data } = await api.delete(`/eat/food/${id}`);
      return data;
    } catch (error: any) {
      return error;
    }
  }

}

const eat = new Eat();
export default eat;
