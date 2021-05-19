import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Car, Manufacturer, SearchFilters } from "../types/types";
import * as client from "./api";
import { RootState } from "./store";

export interface CarsState {
  cars: Car[];
  totalPageCount: number;
  totalCarsCount: number;
  colors: string[];
  manufacturers: Manufacturer[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: any;
}

const initialState = {
  cars: [],
  totalPageCount: 0,
  totalCarsCount: 0,
  colors: [],
  manufacturers: [],
  status: "idle",
  error: null,
} as CarsState;

// ** Async Thunks ** //

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (filters: SearchFilters = {}) => {
    const response = await client.fetchCars(filters);
    return response;
  }
);

export const fetchColors = createAsyncThunk("cars/fetchColors", async () => {
  const response = await client.fetchColors();
  return response.colors;
});

export const fetchManufacturers = createAsyncThunk(
  "cars/fetchManufacturers",
  async () => {
    const response = await client.fetchManufacturers();
    return response.manufacturers;
  }
);

// ** Slice ** //
export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Cars
      .addCase(fetchCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cars = action.payload.cars;
        state.totalPageCount = action.payload.totalPageCount;
        state.totalCarsCount = action.payload.totalCarsCount;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = "failed";
        state.cars = [];
        state.error = action.payload;
      })
      // Colors
      .addCase(fetchColors.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.colors = action.payload;
      })

      // Manufacturers
      .addCase(fetchManufacturers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.manufacturers = action.payload;
      });
  },
});

// ** Selectors ** //
export const selectStatus = (state: RootState) => state.cars.status;
export const selectError = (state: RootState) => state.cars.error;
export const selectCars = (state: RootState) => state.cars.cars;
export const selectColors = (state: RootState) => state.cars.colors;
export const selectManufacturers = (state: RootState) =>
  state.cars.manufacturers;
export const selectTotalPageCount = (state: RootState) =>
  state.cars.totalPageCount;
export const selectTotalCarsCount = (state: RootState) =>
  state.cars.totalCarsCount;

export default carsSlice.reducer;
