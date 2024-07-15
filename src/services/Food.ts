import { ErrorProps, FoodNutrientsProps, PageProps } from "../types";
import { api } from "./api";

class Food {
  async list(page: number): Promise<PageProps | ErrorProps> {
    const params = {
      page,
      pagesize: process.env.REACT_APP_PAGE_SIZE,
    };

    try {
      const { data } = await api.get("/food/list", { params });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async getById(idfood: string): Promise<FoodNutrientsProps | ErrorProps> {
    const params = {idfood};

    try {
      const { data } = await api.get("/food/get", { params });
      return data;
    } catch (error: any) {
      return error;
    }
  }

  async search(term: string): Promise<PageProps | ErrorProps> {
    const params = {term};

    try {
      const { data } = await api.get("/food/search", { params });
      return data;
    } catch (error: any) {
      return error;
    }
  }
}

const food = new Food();
export default food;
