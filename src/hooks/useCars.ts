import { useQuery } from "react-query";
import { fetchCars } from "../api";
import { SearchFilters, SearchResult } from "../types";

export default function useCars(params: SearchFilters) {
  return useQuery<SearchResult, Error>(
    ["cars", params],
    () => fetchCars(params),
    {
      keepPreviousData: true,
    }
  );
}
