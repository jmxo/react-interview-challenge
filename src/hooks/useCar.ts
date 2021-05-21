import { useQuery } from "react-query";
import { fetchCar } from "../api";
import { Car } from "../types";

export default function useCars(stockNumber: number) {
  return useQuery<Car, Error>(["car", stockNumber], () =>
    fetchCar(stockNumber)
  );
}
