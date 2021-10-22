import "./App.scss";
import { ErrorBoundary } from "~/modules/errorBoundaries";
import { AppProvider } from "./AppProvider";
import { BasePage } from "./BasePage";

export function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <AppProvider>
        <BasePage />
      </AppProvider>
    </ErrorBoundary>
  );
}
