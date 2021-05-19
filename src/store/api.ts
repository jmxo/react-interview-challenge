export async function apiFetchCars() {
  const response = await fetch(
    "https://auto1-mock-server.herokuapp.com/api/cars?sort=asc&page=1"
  );

  const data = await response.json();
  return data;
}
