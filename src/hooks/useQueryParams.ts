import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function useQueryParams() {
  let history = useHistory();

  const queryParams = new URLSearchParams(useLocation().search);
  let color = queryParams.get("color") ?? "";
  let manufacturer = queryParams.get("manufacturer") ?? "";
  let pageString = queryParams.get("page");
  let page = parseInt(pageString ?? "");

  // if page not specified in route, make it explicit
  useEffect(() => {
    if (!page) {
      history.push(getSearchString(color, manufacturer, 1));
    }
  }, [color, history, manufacturer, page]);

  return {
    history,
    color,
    manufacturer,
    page,
    getSearchString,
  };
}

function getSearchString(
  color: string | null,
  manufacturer: string | null,
  page?: number
) {
  let arr = [];

  if (manufacturer) arr.push(`manufacturer=${manufacturer}`);
  if (color) arr.push(`color=${color}`);
  if (page) arr.push(`page=${page}`);

  return `/search?${arr.join("&")}`;
}
