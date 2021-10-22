import axios, { AxiosError } from "axios";

async function getAllProducts() {
  try {
    await axios.get("/products");
  } catch (error) {
    /*
     * Esto sería válido si axios exportase un objeto llamado AxiosError,
     * pero axios como librería no exporta tal objeto.
     * AxiosError es un tipo de TS que solamente existe dentro del contexto de TS,
     * y cualquier mención a AxiosError va a ser elimindada al compilarlo a JS.
     */
    if (error instanceof AxiosError && error.repsonse.status === 404) {
      console.log("NOT FOUND");
    }
  }
}
