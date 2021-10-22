import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ApiClientProvider } from "~/api";

interface Props {
  children: ReactNode;
}

export function AppProvider({ children }: Props): JSX.Element {
  return (
    <BrowserRouter>
      <ApiClientProvider>{children}</ApiClientProvider>
    </BrowserRouter>
  );
}
