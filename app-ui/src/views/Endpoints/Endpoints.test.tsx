import { useEndpoints } from "~/api";
import { asMock, renderWithProviders } from "~/testUtils";
import { safe } from "~/testUtils/safe";
import { Endpoints } from ".";

jest.mock("~/api/hooks");

test("renders method", () => {
  asMock(useEndpoints).mockReturnValue(
    safe({
      data: [{ method: "GET", path: "/test", enabled: true, timeout: 0 }],
      isError: false,
    })
  );
  const result = renderWithProviders(<Endpoints />);
  expect(result.getByText("GET")).toBeVisible();
});
