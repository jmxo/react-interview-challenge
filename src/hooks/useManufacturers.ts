import { useQuery } from "react-query";
import { fetchManufacturers } from "../api";
import { Manufacturer } from "../types";

export default function useManufacturers() {
  return useQuery<Manufacturer[], Error>("manufacturers", fetchManufacturers);
}
