import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Car } from "../types/Car";
import { apiFetchCars } from "./api";
import { RootState } from "./store";

export interface CarsState {
  cars: Car[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: any;
}

const initialState = {
  cars: [],
  status: "idle",
  error: null,
} as CarsState;

export const fetchCarsAsync = createAsyncThunk("cars/fetchCars", async () => {
  const response = await apiFetchCars();
  console.log("pizza: ", response);
  return response.cars;
});

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
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
      });
  },
});

export const selectCars = (state: RootState) => state.cars.cars;
export const selectStatus = (state: RootState) => state.cars.status;

export default carsSlice.reducer;
