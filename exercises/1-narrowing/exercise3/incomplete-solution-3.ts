import axios, { AxiosError } from "axios";

async function getAllProducts() {
  try {
    await axios.get("/products");
  } catch (error) {
    /*
     * En este caso, usamos las propiedades de AxiosError,
     * pero nada nos garantiza que el error realmente sea un AxiosError.
     */
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 404) {
      console.log("NOT FOUND");
    }
  }
}
