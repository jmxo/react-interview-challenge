import ErrorFallback from "../components/ErrorFallback";
import { getByText, render, screen } from "../utils/test-utils";

test("ErrorFallback", () => {
  const error = new Error("random message");
  render(<ErrorFallback error={error} />);

  const alert = screen.getByRole("alert");
  expect(getByText(alert, /something went wrong/i)).toBeInTheDocument();
  expect(getByText(alert, /random message/i)).toBeInTheDocument();
});
