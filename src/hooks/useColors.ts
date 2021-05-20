import { useQuery } from "react-query";
import { fetchColors } from "../api";

export default function useColors() {
  return useQuery<string[], Error>("colors", fetchColors);
}
