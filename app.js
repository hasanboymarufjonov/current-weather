//const cityName = "Tashkent";
const API_KEY = "ea82ca76368f171ca84196ccd71224a1";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const cityNameID = document.getElementById("cityNameID");

let cityNameHTML = document.getElementById("city-name");
let tempDegreeHTML = document.getElementById("temp-degree");
let conditionHTML = document.getElementById("condition");

function myFunction() {
  let cityName = cityNameID.value;

  modal.style.display = "block";

  fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let city = data.name;
      let tempature = data.main.temp;
      let condition = data.weather[0].description;
      let tempRound = Math.round(tempature - 273.15);
      // DOM
      cityNameHTML.textContent = city;
      tempDegreeHTML.textContent = tempRound;
      conditionHTML.textContent = condition;
    });
}
