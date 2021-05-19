export async function fetchCars() {
  const response = await fetch(
    "https://auto1-mock-server.herokuapp.com/api/cars?sort=asc&page=1"
  );

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  return data;
}
