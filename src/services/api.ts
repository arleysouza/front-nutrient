import axios from "axios";
import { loadFromLocalStorage } from "../utils";

export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
});

// o interceptor de é chamado a cada requisição
api.interceptors.request.use(
  (config) => {
    const user = loadFromLocalStorage("user");
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/*
O tratamento de erro, configurado no interceptor de resposta do Axios,
intercepta todas as respostas de requisições e pode lidar com os erros adequadamente.
*/
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Trata erros de resposta
      const errorMessage = error.response.data?.error_message || error.response.data?.error || "Erro desconhecido no servidor";
      return Promise.reject({ error: errorMessage });
    } else if (error.request) {
      if (error.code === "ECONNABORTED") {
        return Promise.reject({ error: "Conexão de rede perdida (timeout)" });
      } else if (error.code === "ENOTFOUND") {
        return Promise.reject({ error: "Servidor não encontrado" });
      }
      // Qualquer outra situação onde a requisição foi feita mas não houve resposta
      return Promise.reject({
        error: "Servidor inoperante ou sem conexão de rede",
      });
    } else {
      return Promise.reject({ error: error.message });
    }
  }
);
