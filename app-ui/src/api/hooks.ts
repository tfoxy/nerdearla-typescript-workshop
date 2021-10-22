import { useQuery, UseQueryResult } from "react-query";
import { api } from "./api";
import { Endpoint } from "./types";

export const useEndpoint = (id: string | number): UseQueryResult<Endpoint> => {
  return useQuery(["/endpoints/:id", String(id)], () =>
    api.get<Endpoint>(`/endpoints/${id}`).then((r) => r.data)
  );
};

export const useEndpoints = (): UseQueryResult<Endpoint[]> => {
  return useQuery("/endpoints", () =>
    api.get<Endpoint[]>("/endpoints").then((r) => r.data)
  );
};
