import './styles.css';
import fromUnixTime from 'date-fns/fromUnixTime';

console.log("Hello!");

//https://date-fns.org/v2.29.3/docs/fromUnixTime

//https://openweathermap.org/current
//https://openweathermap.org/weather-conditions

async function getWeather(city) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=eaf888eb0081733be52de7887c53f741&units=metric`);
        console.log("response.ok", city, response.ok);
        let weather = await response.json();
        console.log(weather);
        return weather;
    } catch (error) {
        console.log(error);
    }
}

const getObject = function (weather) {
    if ("name" in weather) {
        const obj = {
            name: weather.name,
            country: weather.sys.country,
            dt: convertToLocalDate(weather.dt),
            timezone: weather.timezone,
            time: convertDate(weather.dt + weather.timezone),
            sunrise: convertTime(weather.sys.sunrise + weather.timezone),
            sunset: convertTime(weather.sys.sunset + weather.timezone),
            main: weather.weather[0].main,
            description: weather.weather[0].description,
            temp: weather.main.temp,
            feels_like: weather.main.feels_like,
            humidity: weather.main.humidity,
            visibility: weather.visibility,
            speed: weather.wind.speed,
            clouds: weather.clouds.all,
        }
        console.log(obj);
        return obj;
    } else {
        const obj = {
            cod: weather.cod,
            message: weather.message,
        }
        console.log(obj.message);
        return obj;
    }
};

const getError = function (error) {
    console.log(error.message);
}

const input = document.querySelector("input");
const find = document.querySelector(".find");
find.addEventListener("click", () => {
    console.log(input.value);
    getWeather(input.value).then(getObject).then(displayWeather).catch(getError);
});

// getWeather("Grodno").then(getObject).catch(getError);
// getWeather("sljgbdjf").then(getObject).catch(getError);
// getWeather("").then(getObject).catch(getError);

const card = document.querySelector(".card");
const nameAndTemp = document.querySelector(".name-and-temp");
const name = document.querySelector(".name");
const temp = document.querySelector(".temp");
const weatherAndImage = document.querySelector(".weather-and-image");
const weather = document.querySelector(".weather");
const main = document.querySelector(".main");
const description = document.querySelector(".description");
const image = document.querySelector(".image");
const feelsLike = document.querySelector(".feels-like");
const cloudiness = document.querySelector(".cloudiness");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const visibility = document.querySelector(".visibility");
const sun = document.querySelector(".sun");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const cityTime = document.querySelector(".city-time");
const time = document.querySelector(".time");
const button = document.querySelector(".button");
const toggle = document.querySelector(".toggle");

function displayWeather(obj) {
    name.textContent = `${obj.name}, ${obj.country}`;
    temp.textContent = `${obj.temp} °C`;
    main.textContent = obj.main;
    description.textContent = obj.description.charAt(0).toUpperCase() + obj.description.slice(1);
    feelsLike.textContent = `Feels like: ${obj.feels_like} °C`;
    cloudiness.textContent = `Cloudiness: ${obj.clouds}%`;
    humidity.textContent = `Humidity: ${obj.humidity}%`;
    wind.textContent = `Wind speed: ${obj.speed} m/s`;
    visibility.textContent = `Visibility: ${obj.visibility} m`;
    sunrise.textContent = `Sunrise: ${obj.sunrise}`;
    sunset.textContent = `Sunset: ${obj.sunset}`;
    cityTime.textContent = `Time in ${obj.name}: ${obj.time}`;
    time.textContent = `Time of request: ${obj.dt}`;
};

function chooseImage() {

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




