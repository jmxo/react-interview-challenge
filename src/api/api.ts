export async function fetchCars(params: any) {
  const { manufacturer = "", color = "", sort = "desc", page = 1 } = params;
  const response = await fetch(
    `https://auto1-mock-server.herokuapp.com/api/cars?manufacturer=${manufacturer}&color=${color}&sort=${sort}&page=${page}`
  );

  const data = await response.json();
  console.log("BINGO: ", data);
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
