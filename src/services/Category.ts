import { ErrorProps, PageProps } from "../types";
import { api } from "./api";

class Category {
  async list(): Promise<PageProps | ErrorProps> {
    try {
      const { data } = await api.get("/category");
      return data;
    } catch (error: any) {
      return error;
    }
  }
}

const category = new Category();
export default category;
