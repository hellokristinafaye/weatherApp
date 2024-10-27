const apiKey = "2bd5559124f13def23addea6864b8f2c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=seattle";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    console.log(data.main);
    console.log(data.main.humidity);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
}

checkWeather();