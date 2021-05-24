import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import App from "../App";
import { handlers } from "../utils/server-handlers";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays results", async () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /available cars/i })
  ).toBeInTheDocument();

  await waitFor(() =>
    screen.getByRole("heading", {
      name: /showing 10 of 1000 results/i,
    })
  );

  expect(
    screen.getByRole("heading", { name: /Mercedes-Benz CLC-Klasse/i })
  ).toBeInTheDocument();

  expect(screen.getAllByTestId("car").length).toBe(10);
});
