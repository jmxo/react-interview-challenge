import React from "react";
import Pagination from "../components/Pagination";
import { render, screen } from "../utils/test-utils";

test("Pagination", () => {
  // only testing the presentation here
  // the functionality is tested in tests higher in the tree

  render(<Pagination count={100} page={5} showFirstButton showLastButton />);

  expect(
    screen.getByRole("button", {
      name: /first/i,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", {
      name: /previous/i,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", {
      name: /page 5 of 100/i,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", {
      name: /next/i,
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", {
      name: /last/i,
    })
  ).toBeInTheDocument();
});
