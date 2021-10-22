import axios from "axios";

export const api = axios.create({
  baseURL: "https://616cd2e837f997001745d747.mockapi.io/api/v1/",
  timeout: 1000,
});
