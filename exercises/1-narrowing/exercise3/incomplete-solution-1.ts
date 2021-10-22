import axios from "axios";

async function getAllProducts() {
  try {
    await axios.get("/products");
  } catch (error: any) {
    /*
     * Al usar `any`, estamos quitando la seguridad que nos puede brindar TS al momento de verificar propiedades.
     * En este caso, hay un error de tipeo en `repsonse` (debería ser `response`).
     * También existe la posibilidad de que nunca haya habido una response (ej: no hay conexión a internet),
     * por lo que habría un error en Runtime al querer acceder `status` (porque `response` es undefined).
     */
    if (error.repsonse.status === 404) {
      console.log("NOT FOUND");
    }
  }
}
