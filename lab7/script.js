const name = "Москва"
const text = document.getElementById("search-box-text")
const city = document.getElementById("city")
const temperature = document.getElementById("temperature")
const icon = document.getElementById("icon")
const wind = document.getElementById("wind")
const condition = document.getElementById("condition")
const pressure = document.getElementById("pressure")
const wet = document.getElementById("wet")
const btn = document.getElementById("search-btn")

btn.addEventListener("click", start)
document.addEventListener("keydown", start1)


function start1(event){
    if (event.code=='Enter')
        weather(event);
}
function start(){
    //let name = city.value;
    let api_key = "2bd6ad848c1bfd8a405f240bee8da6bf";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + name + "&lang=ru&units=metric&appid=" + api_key)
    .then(result => result.json())

    .then(function(data){
        city.innerHTML = data.name;
        temperature.innerHTML = data.main.temp+'&deg;';
        condition.innerHTML = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);
        //wind.innerHTML =  ;
        pressure.innerHTML = 'Pressure: '+Math.round(Number(data.main.pressure) * 0.75)+' мм.рт.ст.';
        wet.innerHTML = data.main.humidity + "%";

    })
}
