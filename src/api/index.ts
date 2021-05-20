import { SearchFilters } from "../types";

const API_ROOT = "https://auto1-mock-server.herokuapp.com/api";

export async function fetchCars(params: SearchFilters) {
  const { manufacturer = "", color = "", sort = "desc", page = 1 } = params;

  const response = await fetch(
    `${API_ROOT}/cars?manufacturer=${manufacturer}&color=${color}&sort=${sort}&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  return data;
}

export async function fetchColors() {
  const response = await fetch(`${API_ROOT}/colors`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  return data.colors;
}

export async function fetchManufacturers() {
  const response = await fetch(`${API_ROOT}/manufacturers`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data.manufacturers;
}
