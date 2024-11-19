console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  console.log("Fetched data:", results[2].eye_color);
}

fetchData();
