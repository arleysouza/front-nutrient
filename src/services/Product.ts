import { ErrorProps, ProductNutrientsProps } from "../types";
import { api } from "./api";

class Product {
  async search(term:string): Promise<ProductNutrientsProps[] | ErrorProps> {
    try {
      const params = {term};
      const { data } = await api.get("/product/searchbyuser", { params });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async listUserProducts(): Promise<ProductNutrientsProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/product/byuser");
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async create(
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
  ): Promise<ProductNutrientsProps | ErrorProps> {
    try {
      const { data } = await api.post("/product", {
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
        sodium,
      });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async update(
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
  ): Promise<ProductNutrientsProps | ErrorProps> {
    try {
      const { data } = await api.put("/product", {
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
        sodium,
      });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async delete(id:string): Promise<ProductNutrientsProps | ErrorProps> {
    try {
      const { data } = await api.delete(`/product/${id}`);
      return data;
    } catch (error: any) {
      return error;
    }
  }
}

const product = new Product();
export default product;
