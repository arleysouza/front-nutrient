import { ErrorProps, PageProps } from "../types";
import { api } from "./api";

class Field {
  async list(): Promise<PageProps | ErrorProps> {
    try {
      const { data } = await api.get("/field");
      return data;
    } catch (error: any) {
      return error;
    }
  }
}

const field = new Field();
export default field;
