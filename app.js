const weatherForm = document.querySelector('#weather-form form');
const weatherContent = document.querySelector('#weather');
let city = '';
const keyAPI = '79fd6ae10a619a738ee3af4fd3149be9';

const getDataWeather = city => {
    const urlAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${keyAPI}&units=metric`;

    fetch(urlAPI)
        .then(response =>{
            if(response.ok) return response;
            throw Error("Nie udało się")
        })
        .then(response => response.json())
        .then(response => setDataWeather(response))
        .catch(err => console.log(err))
        
    // console.log(urlAPI); 
};
const createContentWeather = () =>{
    const content = document.createElement('div');
    content.setAttribute('id','content-weather');
    weatherContent.appendChild(content);
}

const createHeaderWeatherContent = () =>{
    const header = document.createElement('h3'); 
    const headerText = document.createTextNode(`Pogoda dla miasta: ${city}`);
    header.appendChild(headerText);
    weatherContent.appendChild(header);
}

const createP = (elNode, textNode) =>{
    const p = document.createElement('p');
    p.appendChild(textNode);
    elNode.appendChild(p);
}

const dateWeather = elNode =>{
    // console.log(new Date().toLocaleString());  
    const pText = document.createTextNode("Data: " + new Date().toLocaleString());
    createP(elNode,pText);
};

const setDataWeather = data =>{
    const weatherContentChildren = weatherContent.children.length;
    console.log(weatherContentChildren);
    if(weatherContentChildren){
        weatherContent.firstElementChild.remove();
        createHeaderWeatherContent();
    }
    if(weatherContentChildren==2){
        weatherContent.firstElementChild.nextElementSibling.remove();
    }

    createContentWeather();
    const weatherContentDiv = weatherContent.lastElementChild;

    dateWeather(weatherContentDiv);

    const pressure = document.createTextNode(`Ciśnienie: ${data.main.pressure} hPa`);
    createP(weatherContentDiv,pressure);
    
};

weatherForm.addEventListener('submit',function(e){
    e.preventDefault();
    city = this.querySelector('#city').value;
    
    if(city){
        // weatherContent.querySelector('h3').innerText = "Pogoda dla miasta: " + city;
        getDataWeather(city);
    }
});