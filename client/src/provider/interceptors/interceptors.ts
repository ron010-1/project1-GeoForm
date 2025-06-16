import axios, { AxiosError, AxiosResponse } from "axios";

export type ApiError = {
  code?: string;
  detail?: string;
};

// Instância base do axios para suas requisições

export const api = axios.create({
  baseURL: "http://localhost:3333/",
});

// Interceptor de resposta básico (opcional)
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const errorData = error.response?.data as ApiError;

    // Aqui você pode tratar outros erros genéricos, se quiser
    console.error("Erro na requisição:", errorData);

    return Promise.reject(error);
  }
);
