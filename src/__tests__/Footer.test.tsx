import Footer from "../components/Footer";
import { render, screen } from "../utils/test-utils";

test("Footer", () => {
  render(<Footer />);
  expect(screen.getByText(/© auto1 group 2018/i)).toBeInTheDocument();
});
