const inputValue = document.querySelector('#cityInput');
const btn = document.querySelector('#add');
const city = document.querySelector('#cityOutput');
const discription = document.querySelector('#description');
const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');
const humidity = document.querySelector('#humidity');

const apikey = "46605e37bc30f2a43ed315b2a2462650";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

function convertToCelesuis(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () {
    fetch(apiUrl + inputValue.value + `&appid=${apikey}`)
        .then(res => res.json())

        .then(data => {
            let nameValue = data.name;
            let temperature = data.main.temp;
            let humi = data.main.humidity;
            let descrip = data.weather[0].description;
            let windspeed = data.wind.speed;

            city.innerHTML = `Weather of <span>${nameValue}</span>`;
            temp.innerHTML = `Temperature :-  <span>${convertToCelesuis(temperature)} °C </span>`;
            discription.innerHTML = `Sky Condition :- <span> ${descrip} </span>`;
            wind.innerHTML = `Wind Speed :- <span> ${windspeed} km/h </span`;
            humidity.innerHTML = `Humidity :- <span> ${humi} % </span`;

        })
        .catch(err => alert('You Entered Wrong City Name'));
})