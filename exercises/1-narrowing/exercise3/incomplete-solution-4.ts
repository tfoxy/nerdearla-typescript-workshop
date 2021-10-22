import axios, { AxiosError } from "axios";

async function getAllProducts() {
  try {
    await axios.get("/products");
  } catch (error) {
    /*
     * Esta solución mejora el chequeo, pero queremos hacerla reusable en una
     * función llamada isAxiosError, lo cual también mejoraría la legibilidad
     * (acá es raro castear cuando todavía no aseguramos que realmente sea ese tipo).
     * También tener en cuenta que error podría ser null o undefined,
     * lo cual fallaría al acceder a la propiedad `isAxiosError`.
     */
    const axiosError = error as AxiosError;
    if (axiosError.isAxiosError && axiosError.response?.status === 404) {
      console.log("NOT FOUND");
    }
  }
}
