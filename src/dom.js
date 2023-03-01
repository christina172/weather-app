const start = document.querySelector(".start");
const container = document.querySelector(".container");
const nameAndTemp = document.querySelector(".name-and-temp");
const name = document.querySelector(".name");
const temp = document.querySelector(".temp");
const main = document.querySelector(".main");
const description = document.querySelector(".description");
const image = document.querySelector(".weather-and-image img");
const feelsLike = document.querySelector(".feels-like");
const cloudiness = document.querySelector(".cloudiness");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const visibility = document.querySelector(".visibility");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const cityTime = document.querySelector(".city-time");
const time = document.querySelector(".time");
const toggle = document.querySelector(".toggle");
const error = document.querySelector(".error");

const displayError = function (err) {
    console.log(err.message);

    error.style.display = "block";
    container.style.display = "none";
    start.style.display = "none";
};

function displayWeather(obj) {
    name.textContent = `${obj.name}, ${obj.country}`;
    temp.textContent = `${obj.temp} °C`;

    colorHeader(obj.temp);

    main.textContent = obj.main;
    description.textContent = obj.description.charAt(0).toUpperCase() + obj.description.slice(1);

    chooseImage(obj.main, obj.description, obj.time, obj.sunrise, obj.sunset);

    feelsLike.textContent = `Feels like: ${obj.feels_like} °C`;
    cloudiness.textContent = `Cloudiness: ${obj.clouds} %`;
    humidity.textContent = `Humidity: ${obj.humidity} %`;
    wind.textContent = `Wind speed: ${obj.speed} m/s`;
    visibility.textContent = `Visibility: ${obj.visibility} m`;
    sunrise.textContent = `Sunrise: ${convertTime(obj.sunrise)}`;
    sunset.textContent = `Sunset: ${convertTime(obj.sunset)}`;
    cityTime.textContent = `Time in ${obj.name}: ${convertDate(obj.time)}`;
    time.textContent = `Time of request: ${convertToLocalDate(obj.dt)}`;

    toggle.textContent = "Convert °C to °F";

    start.style.display = "none";
    container.style.display = "block";
    error.style.display = "none";
};

function chooseImage(main, description, time, sunrise, sunset) {
    if (description === "light thunderstorm" || description === "thunderstorm" || description === "heavy thunderstorm" || description === "ragged thunderstorm") {
        image.setAttribute("src", "cloud-with-lightning-svgrepo-com.svg");
    } else if (main === "Thunderstorm" && (description !== "light thunderstorm" || description !== "thunderstorm" || description !== "heavy thunderstorm" || description !== "ragged thunderstorm")) {
        image.setAttribute("src", "cloud-with-lightning-and-rain-svgrepo-com.svg");
    } else if (main === "Drizzle" || main === "Rain") {
        image.setAttribute("src", "cloud-with-rain-svgrepo-com.svg");
    } else if (main === "Snow") {
        image.setAttribute("src", "cloud-with-snow-svgrepo-com.svg");
    } else if (main === "Mist" || main === "Fog") {
        image.setAttribute("src", "mist-fog-svgrepo-com.svg");
    } else if (main === "Smoke" || main === "Haze") {
        image.setAttribute("src", "smoke-haze-svgrepo-com.svg");
    } else if (main === "Sand" || main === "Dust") {
        image.setAttribute("src", "dust-sand-svgrepo-com.svg");
    } else if (main === "Ash") {
        image.setAttribute("src", "volcano-svgrepo-com.svg");
    } else if (main === "Squall") {
        image.setAttribute("src", "squall-svgrepo-com.svg");
    } else if (main === "Tornado") {
        image.setAttribute("src", "tornado-svgrepo-com.svg");
    } else if (main === "Clear" && time >= sunrise && time <= sunset) {
        image.setAttribute("src", "sunny-svgrepo-com.svg");
    } else if (main === "Clear" && (time < sunrise || time > sunset)) {
        image.setAttribute("src", "moon-svgrepo-com.svg");
    } else if (description === "few clouds" && time >= sunrise && time <= sunset) {
        image.setAttribute("src", "cloudy-few-svgrepo-com.svg");
    } else if (description === "few clouds" && (time < sunrise || time > sunset)) {
        image.setAttribute("src", "cloudy-few-moon-svgrepo-com.svg");
    } else if (description === "scattered clouds" && time >= sunrise && time <= sunset) {
        image.setAttribute("src", "cloudy-scattered-svgrepo-com.svg");
    } else if (description === "scattered clouds" && (time < sunrise || time > sunset)) {
        image.setAttribute("src", "cloudy-scattered-moon-svgrepo-com.svg");
    } else if (description === "broken clouds" && time >= sunrise && time <= sunset) {
        image.setAttribute("src", "cloudy-broken-svgrepo-com.svg");
    } else if (description === "broken clouds" && (time < sunrise || time > sunset)) {
        image.setAttribute("src", "cloudy-broken-moon-svgrepo-com.svg");
    } else if (description === "overcast clouds") {
        image.setAttribute("src", "cloud-svgrepo-com.svg");
    }
};

function colorHeader(temp) {
    if (temp < -30) {
        nameAndTemp.style.backgroundColor = "rgb(0, 140, 255)";
        nameAndTemp.style.color = "white";
    } else if (temp >= -30 && temp < -20) {
        nameAndTemp.style.backgroundColor = "rgb(72, 197, 255)";
        nameAndTemp.style.color = "white";
    } else if (temp >= -20 && temp < -10) {
        nameAndTemp.style.backgroundColor = "rgb(144, 242, 255)";
        nameAndTemp.style.color = "black";
    } else if (temp >= -10 && temp < -5) {
        nameAndTemp.style.backgroundColor = "rgb(206, 249, 255)";
        nameAndTemp.style.color = "black";
    } else if (temp >= -5 && temp < 5) {
        nameAndTemp.style.backgroundColor = "white";
        nameAndTemp.style.color = "black";
    } else if (temp >= 5 && temp < 10) {
        nameAndTemp.style.backgroundColor = "rgb(255, 255, 194)";
        nameAndTemp.style.color = "black";
    } else if (temp >= 10 && temp < 20) {
        nameAndTemp.style.backgroundColor = "rgb(255, 255, 50)";
        nameAndTemp.style.color = "black";
    } else if (temp >= 20 && temp < 30) {
        nameAndTemp.style.backgroundColor = "rgb(255, 190, 51)";
        nameAndTemp.style.color = "black";
    } else if (temp >= 30 && temp <= 40) {
        nameAndTemp.style.backgroundColor = "rgb(253, 110, 67)";
        nameAndTemp.style.color = "white";
    } else if (temp > 40) {
        nameAndTemp.style.backgroundColor = "rgb(255, 49, 34)";
        nameAndTemp.style.color = "white";
    }
};

function convertTime(unix_timestamp) {
    let date = new Date(unix_timestamp * 1000);
    let timeString = date.toUTCString();
    let formattedTime = timeString.slice(-12, -7);
    return formattedTime;
};

function convertDate(unix_timestamp) {
    let date = new Date(unix_timestamp * 1000);
    let timeString = date.toUTCString();
    let formattedTime = timeString.slice(0, -3);
    return formattedTime;
};

function convertToLocalDate(unix_timestamp) {
    let date = new Date(unix_timestamp * 1000);
    return date;
};

let celsius;
let celsiusFeels;
let fahr;
let fahrFeels;

function convertTemp() {
    if (toggle.textContent === "Convert °C to °F") {
        celsius = temp.textContent.slice(0, -3);
        celsiusFeels = feelsLike.textContent.slice(12, -3);
        fahr = Math.round(celsius * 9 / 5 + 32);
        fahrFeels = Math.round(celsiusFeels * 9 / 5 + 32);
        temp.textContent = `${fahr} °F`;
        feelsLike.textContent = `Feels like: ${fahrFeels} °F`;
        toggle.textContent = "Convert °F to °C";
    } else if (toggle.textContent === "Convert °F to °C") {
        temp.textContent = `${celsius} °C`;
        feelsLike.textContent = `Feels like: ${celsiusFeels} °C`;
        toggle.textContent = "Convert °C to °F";
    }
};

const mediaQuery = window.matchMedia('(max-width: 750px)');

function deleteTemp() {

    const cold4 = document.querySelector('.cold4');
    const cold3 = document.querySelector('.cold3');
    const cold2 = document.querySelector('.cold2');
    const cold1 = document.querySelector('.cold1');
    const zero = document.querySelector('.zero');
    const warm1 = document.querySelector('.warm1');
    const warm2 = document.querySelector('.warm2');
    const warm3 = document.querySelector('.warm3');
    const warm4 = document.querySelector('.warm4');
    const warm5 = document.querySelector('.warm5');

    if (mediaQuery.matches) {
        cold4.textContent = "";
        cold3.textContent = "";
        cold2.textContent = "";
        cold1.textContent = "";
        zero.textContent = "";
        warm1.textContent = "";
        warm2.textContent = "";
        warm3.textContent = "";
        warm4.textContent = "";
        warm5.textContent = "";
    } else {
        cold4.textContent = "below -30 °C";
        cold3.textContent = "-30 °C to -20 °C";
        cold2.textContent = "-20 °C to -10 °C";
        cold1.textContent = "-10 °C to -5 °C";
        zero.textContent = "-5 °C to 5 °C";
        warm1.textContent = "5 °C to 10 °C";
        warm2.textContent = "10 °C to 20 °C";
        warm3.textContent = "20 °C to 30 °C";
        warm4.textContent = "30 °C to 40 °C";
        warm5.textContent = "above 40 °C";
    }
};

export { displayError, displayWeather, convertTemp, deleteTemp, toggle, mediaQuery };