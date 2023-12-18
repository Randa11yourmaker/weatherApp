const apiKey = "08d7da3a0137a7ce340622ce77ba6cf8";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
}

document.querySelector(".city").innerHTML = checkWeather();
