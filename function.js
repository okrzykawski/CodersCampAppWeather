const getDataWeather = async (city, node) => {
    const urlAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${keyAPI}&units=metric`;
    
    const dw = await fetch(urlAPI)
        .then(response =>{
            // console.log("response", response);
            if(response.ok) return response.json();
            throw `Nie znaleniono miasta: ${city}`
         })
        // .then(response => setDataWeather(city, node, response))
        .catch(err => console.log(err));

        console.log(city, dw);
        
        setDataWeather(city, dw, node);

        // return dw;
};

const setDataWeather = (city, data, node) => {
    // const weatherDataNode = headerWeatherContent(city, true);
    
    const weatherData = {
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(), 
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString() 
    };
    
    // console.log(city, weatherData);
    printDataWeather(weatherData, node);
};

const printDataWeather = (data, node) =>{
    const charDegreesC = '&#176;' +"C";
    createP(node, `Temperatura: ${data.temp} `+ charDegreesC);
    createP(node, `Ciśnienie: ${data.pressure} hPa`);
    createP(node, `Siła wiatru: ${data.wind} m/s`);
    createP(node, `Wschód: ${data.sunrise}`);
    createP(node, `Zachód: ${data.sunset}`);
}

// const headerWeatherContent = (print, flaga) =>{
//     const node = weatherContent.firstElementChild;
//     if(flaga) {node.textContent = `Pogoda dla miasta: ${print}`;}
//     else {node.textContent = print;}

//     // const weatherDataNode = document.getElementById("weatherData");
//     // weatherDataNode.innerHTML = "";
//     // return weatherDataNode;
// }

const createP = (elNode, textNode) =>{
    const p = document.createElement('p');
    const pText = document.createTextNode(textNode);
    p.appendChild(pText);
    elNode.appendChild(p);
}

const dateWeather = () =>{
    const date = new Date().toLocaleString();
    const dateNode = weatherContent.previousElementSibling;
    dateNode.textContent = date ;
};

const addDivContainer = node =>{
    const el = document.createElement("div");
    el.classList.add("col-3");
    el.classList.add("my-4");
    el.classList.add("shadow");
    node.appendChild(el);
};