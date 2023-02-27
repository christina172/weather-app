import './styles.css';

console.log("Hello!");

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
            dt: weather.dt,
            timezone: weather.timezone,
            sunrise: weather.sys.sunrise,
            sunset: weather.sys.sunset,
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
    } else {
        const obj = {
            cod: weather.cod,
            message: weather.message,
        }
        console.log(obj.message);
    }
};

const getError = function (error) {
    console.log(error.message);
}

const input = document.querySelector("input");
const find = document.querySelector(".find");
find.addEventListener("click", () => {
    console.log(input.value);
    getWeather(input.value).then(getObject).catch(getError);
});

// getWeather("Grodno").then(getObject).catch(getError);
// getWeather("sljgbdjf").then(getObject).catch(getError);
// getWeather("").then(getObject).catch(getError);

