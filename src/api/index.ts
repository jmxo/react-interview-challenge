import axios from "axios";
import { SearchFilters } from "../types";

const API_ROOT = "https://auto1-mock-server.herokuapp.com/api";

export async function fetchColors() {
  const response = await axios.get(`${API_ROOT}/colors`);
  return response.data.colors;
}

export async function fetchManufacturers() {
  const response = await axios.get(`${API_ROOT}/manufacturers`);
  return response.data.manufacturers;
}

export async function fetchCars(params: SearchFilters) {
  const { manufacturer = "", color = "", sort = "desc", page = 1 } = params;
  const response = await axios.get(
    `${API_ROOT}/cars?manufacturer=${manufacturer}&color=${color}&sort=${sort}&page=${page}`
  );
  return response.data;
}

export async function fetchCar(stockNumber: number) {
  const response = await axios.get(`${API_ROOT}/cars/${stockNumber}`);
  return response.data.car;
}
