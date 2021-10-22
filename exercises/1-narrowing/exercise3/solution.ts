import axios, { AxiosError } from "axios";

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError | undefined)?.isAxiosError ?? false;
}

async function getAllProducts() {
  try {
    await axios.get("/products");
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      console.log("NOT FOUND");
    }
  }
}
