// const cities = ["Szczecin", "Gdańsk", "Olsztyn", "Białystok", "Poznań", "Bydgoszcz", "Warszawa", "Lublin", "Zielona Góra", "Łódź", "Kielce", "Rzeszów", "Wrocław", "Opole", "Katowice", "Kraków"];

const keyAPI = '79fd6ae10a619a738ee3af4fd3149be9';
const weatherForm = document.querySelector('#weatherForm form');
const weatherContent = document.querySelector('#weather');
let city = '';

weatherForm.addEventListener('submit', function(e){
    e.preventDefault();
    city = this.querySelector('#city').value;
    
    if(city){
        getDataWeather(city);
    }
});

const getDataWeather = city => {
    const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${keyAPI}&units=metric`;

    fetch(urlAPI)
        .then(response =>{
            if(response.ok) return response.json();
            throw `Nie znaleniono miasta: ${city}`
        })
        .then(response => setDataWeather(response))
        .catch(err => headerWeatherContent(err, false))
    };
    
const setDataWeather = (data) => {

    const weatherDataNode = headerWeatherContent(city, true);

    const weatherData = {
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(), 
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString() 
    };

    printDataWeather(weatherData, weatherDataNode);
}

const printDataWeather = (data, node) =>{
    const charDegreesC = '&#176;' +"C";
    createP(node, `Temperatura: ${data.temp} `+ charDegreesC);
    createP(node, `Ciśnienie: ${data.pressure} hPa`);
    createP(node, `Siła wiatru: ${data.wind} m/s`);
    createP(node, `Wschód: ${data.sunrise}`);
    createP(node, `Zachód: ${data.sunset}`);
}


const headerWeatherContent = (print, flaga) =>{
    const node = weatherContent.firstElementChild;
    if(flaga) {node.textContent = `Pogoda dla miasta: ${print}`;}
    else {node.textContent = print;}

    dateWeather(weatherContent);

    const weatherDataNode = document.getElementById("weatherData");
    weatherDataNode.innerHTML = "";
    return weatherDataNode;
}

const createP = (elNode, textNode) =>{
    const p = document.createElement('p');
    const pText = document.createTextNode(textNode);
    p.appendChild(pText);
    elNode.appendChild(p);
}

const dateWeather = () =>{
    const date = new Date().toLocaleString();
    const dateNode = weatherContent.firstElementChild.nextElementSibling;
    dateNode.textContent = `Data: ${date}` ;
};
