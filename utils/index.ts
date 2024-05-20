export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "2011949f64msh60cea947946aec5p1eb1c8jsn49e247f09e03",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  // console.log(result);

  return result;
}
