import axios from "axios";
import { Result } from "../../core/Result";

export async function SendImageUseCase(
  file: File,
  referencia: string
): Promise<Result<any>> {
  const formData = new FormData();
  formData.append("imagem", file); // "file" é o nome do campo esperado pela API
  formData.append("referencia", referencia); // Adiciona o campo "referencia"

  // Obtém o token do localStorage
  const token = localStorage.getItem("access") || undefined;

  return axios
    .post(`${import.meta.env.VITE_MAIN_API_URL}/questao/imagem/`, formData, {
      headers: {
        Accept: "application/json", // Define o tipo de resposta esperada
        Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
      },
    })
    .then((response) => {
      if (response.status !== 201) {
        return Result.fail(response.data.message);
      }
      return Result.ok(response.data);
    })
    .catch((error) => {
      return Result.fail(error);
    });
}
