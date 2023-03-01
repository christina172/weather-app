async function getWeather(city) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=eaf888eb0081733be52de7887c53f741&units=metric`);
        console.log(city, "response.ok", response.ok);
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
            time: weather.dt + weather.timezone,
            sunrise: weather.sys.sunrise + weather.timezone,
            sunset: weather.sys.sunset + weather.timezone,
            main: weather.weather[0].main,
            description: weather.weather[0].description,
            temp: Math.round(weather.main.temp),
            feels_like: Math.round(weather.main.feels_like),
            humidity: weather.main.humidity,
            visibility: weather.visibility,
            speed: Math.round(weather.wind.speed * 10) / 10,
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
        throw new Error("Whoops!");
    }
};

export { getWeather, getObject };