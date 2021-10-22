import axios, { AxiosError } from "axios";

/**
 * typed definitions
 *
 * export interface AxiosError<T = any> extends Error {
 *   config: AxiosRequestConfig;
 *   code?: string;
 *   request?: any;
 *   response?: AxiosResponse<T>;
 *   isAxiosError: boolean;
 *   toJSON: () => object;
 * }
 */
async function getAllProducts() {
  try {
    await axios.get("/products");
  } catch (error) {
    /**
     * Cuando falla una request en axios el error que recibimos en el catch es de tipo AxiosError.
     *
     * Queremos verificar que ese error sea de ese tipo
     */
    if (error.response?.status === 404) {
      console.log("NOT FOUND");
    }
  }
}
