import CarListItemSkeleton from "../components/CarListItemSkeleton";
import { render, screen } from "../utils/test-utils";

test("ListItemSkeleton", () => {
  render(<CarListItemSkeleton />);

  expect(
    screen.getByRole("img", {
      name: /loading\.\.\./i,
    })
  ).toBeInTheDocument();
});
