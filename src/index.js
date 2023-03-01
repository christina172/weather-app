import './styles.css';
import { getWeather, getObject } from "./logic";
import { displayError, displayWeather, convertTemp, deleteTemp, toggle, mediaQuery } from "./dom";


const input = document.querySelector("input");
const find = document.querySelector(".find");

find.addEventListener("click", () => {
    console.log(input.value);
    getWeather(input.value).then(getObject).then(displayWeather).catch(displayError);
});


toggle.addEventListener("click", convertTemp);


deleteTemp();
mediaQuery.addEventListener('change', deleteTemp);




