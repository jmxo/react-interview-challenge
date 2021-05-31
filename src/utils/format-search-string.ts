export function formatSearchString(
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
