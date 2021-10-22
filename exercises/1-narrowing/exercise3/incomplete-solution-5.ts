import axios, { AxiosError } from "axios";

function isAxiosError(error: unknown): boolean {
  return (error as AxiosError | undefined)?.isAxiosError ?? false;
}

async function getAllProducts() {
  try {
    await axios.get("/products");
  } catch (error) {
    /*
     * Acá TS falla dado que por más que se haya hecho la verificación correcta en JS,
     * TS no tiene información sobre que tipo de dato debería ser `error`.
     */
    if (isAxiosError(error) && error.response?.status === 404) {
      console.log("NOT FOUND");
    }
  }
}
