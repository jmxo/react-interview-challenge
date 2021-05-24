import AppBar from "../components/AppBar";
import { render, screen } from "../utils/test-utils";

test("AppBar", () => {
  render(<AppBar />);

  const link = screen.getByRole("link", { name: /auto1 logo/i });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");

  expect(screen.getByRole("img", { name: /auto1 logo/i })).toBeInTheDocument();
});
