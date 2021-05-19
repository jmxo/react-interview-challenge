import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Car } from "../types/Car";
import { fetchCars, fetchColors, fetchManufacturers } from "./api";
import { RootState } from "./store";

export interface CarsState {
  cars: Car[];
  colors: string[];
  manufacturers: string[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: any;
}

const initialState = {
  cars: [],
  colors: [],
  manufacturers: [],
  status: "idle",
  error: null,
} as CarsState;

// ** Async Thunks ** //

export const fetchCarsAsync = createAsyncThunk("cars/fetchCars", async () => {
  const response = await fetchCars();
  return response.cars;
});

export const fetchColorsAsync = createAsyncThunk(
  "cars/fetchColors",
  async () => {
    const response = await fetchColors();
    return response.colors;
  }
);

export const fetchManufacturersAsync = createAsyncThunk(
  "cars/fetchManufacturers",
  async () => {
    const response = await fetchManufacturers();
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
      .addCase(fetchCarsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCarsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cars = action.payload;
      })
      .addCase(fetchCarsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.cars = [];
        state.error = action.payload;
      })
      // Colors
      .addCase(fetchColorsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchColorsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.colors = action.payload;
      })
      .addCase(fetchColorsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.colors = [];
        state.error = action.payload;
      })
      // Manufacturers
      .addCase(fetchManufacturersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchManufacturersAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.manufacturers = action.payload;
      })
      .addCase(fetchManufacturersAsync.rejected, (state, action) => {
        state.status = "failed";
        state.manufacturers = [];
        state.error = action.payload;
      });
  },
});

// ** Selectors ** //
export const selectStatus = (state: RootState) => state.cars.status;
export const selectCars = (state: RootState) => state.cars.cars;
export const selectColors = (state: RootState) => state.cars.colors;
export const selectManufacturers = (state: RootState) =>
  state.cars.manufacturers;

export default carsSlice.reducer;
