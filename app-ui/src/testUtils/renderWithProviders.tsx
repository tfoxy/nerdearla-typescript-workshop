import { render, RenderResult } from "@testing-library/react";
import { ReactNode } from "react";
import { AppProvider } from "~/views/App";

export interface RenderOptions {
  route?: string;
}

export function renderWithProviders(
  element: JSX.Element,
  { route = "/" }: RenderOptions = {}
): RenderResult {
  window.history.pushState({}, "Test page", route);

  function Wrapper({ children }: { children?: ReactNode }) {
    return <AppProvider>{children}</AppProvider>;
  }

  return render(element, { wrapper: Wrapper });
}
