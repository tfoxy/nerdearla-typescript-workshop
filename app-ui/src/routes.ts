import { useLocation } from "react-router";

export const HOME_PATH = "/";
export const ENDPOINTS_PATH = "/endpoints";
export const ENDPOINT_PATH = `${ENDPOINTS_PATH}/:endpointId` as const;

export function useSearchParams<T extends { [key in keyof T]?: string }>(): T {
  return Object.fromEntries(new URLSearchParams(useLocation().search)) as T;
}
