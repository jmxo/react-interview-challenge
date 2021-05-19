export async function fetchCars() {
  const response = await fetch(
    "https://auto1-mock-server.herokuapp.com/api/cars?sort=asc&page=1"
  );

  const data = await response.json();
  return data;
}

export async function fetchColors() {
  const response = await fetch(
    "https://auto1-mock-server.herokuapp.com/api/colors"
  );

  const data = await response.json();
  return data;
}

export async function fetchManufacturers() {
  const response = await fetch(
    "https://auto1-mock-server.herokuapp.com/api/manufacturers"
  );

  const data = await response.json();
  return data;
}
