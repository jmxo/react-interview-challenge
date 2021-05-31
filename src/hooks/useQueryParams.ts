import qs from "query-string";
import { useLocation } from "react-router-dom";

export default function useQueryParams() {
  const location = useLocation();
  let search = qs.parse(location.search);

  let color = search.color ?? "";
  let manufacturer = search.manufacturer ?? "";
  let page = search.page;

  // always return string not string[]
  if (color instanceof Array) color = color[0];
  if (manufacturer instanceof Array) manufacturer = manufacturer[0];
  if (page instanceof Array) page = page[0];

  return {
    color,
    manufacturer,
    page,
  };
}
