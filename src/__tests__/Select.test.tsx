import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import Select from "../components/Select";
import { mockColors } from "../utils/mockData";
import { render, screen } from "../utils/test-utils";

// only testing presentation
// functionality will be tested by integration tests

const colors = mockColors.colors;

test("Select", () => {
  render(
    <Select name="color" labelId="colors" value="" displayEmpty>
      <MenuItem value="">All Car Colors</MenuItem>
      {colors.map((color) => (
        <MenuItem key={color} value={color}>
          {color}
        </MenuItem>
      ))}
    </Select>
  );

  expect(
    screen.getByRole("button", {
      name: /all car colors/i,
    })
  ).toBeInTheDocument();
});
