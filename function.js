const getDataWeather = async (city, node) => {
    const urlAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${keyAPI}&units=metric`;
    const dw = await fetch(urlAPI)
        .then(response =>{
            // console.log("response", response);
            if(response.ok) return response.json();
            throw `Nie znaleniono miasta: ${city}`
         })
        .catch(err => alert(err));

        setDataWeather(city, dw, node);
};

const setDataWeather = (city, data, node) => {

    const weatherData = {
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(), 
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString() 
    };

    if(submit){
        const nodoH3 = node.previousElementSibling;

        nodoH3.innerHTML = city;
        nodoH3.classList.add("text-center")
        nodoH3.classList.add("py-2")
        nodoH3.style.borderBottom = "1px solid #fff";
        node.innerHTML="";
    }
    printDataWeather(weatherData, node);
};

const printDataWeather = (data, node) =>{
    // const charDegreesC = '&#176;' +"C";
    createP(node, "Temperatura: ", data.temp, " C");
    createP(node, "Ciśnienie: ", data.pressure, " hPa");
    createP(node, "Siła wiatru: ", data.wind, " m/s");
    createP(node, "Wschód: ", data.sunrise, "");
    createP(node, "Zachód: ", data.sunset, "");
}

const createP = (elNode, text, x, addText) =>{
    const p = document.createElement('p');
    const strong = document.createElement('strong');
    const strongText = document.createTextNode(text);
    const pText = document.createTextNode(x + addText);

    strong.classList.add("mr-2")
    if(submit){
        p.classList.add("col-12");
        p.classList.add("col-sm-6");
        p.classList.add("col-md");
        elNode.parentNode.classList.add("text-white");
        elNode.parentNode.style.backgroundColor = "#44f";
    }

    strong.appendChild(strongText);
    p.appendChild(strong);
    p.appendChild(pText);
    elNode.appendChild(p);
}

const createH = (elNode, textNode) =>{
    const h = document.createElement('h3');
    const hText = document.createTextNode(textNode);
    h.classList.add("text-center")
    h.classList.add("pb-1")
    h.style.borderBottom = "1px solid #44f";

    h.appendChild(hText);
    
    if(submit){
        elNode.parentNode.insertBefore(h, elNode);
    }else{
        elNode.appendChild(h);
    }
}

const dateWeather = () =>{
    const date = new Date().toLocaleString();
    const dateNode =document.querySelector("#dateWeather .container p");
    dateNode.textContent = date ;
};

const addDivContainer = node =>{
    const el = document.createElement("div");
    const el2 = document.createElement("div");
    el.classList.add("city");
    el.classList.add("col-12");
    el.classList.add("col-sm-6");
    el.classList.add("col-lg-3");
    el.classList.add("my-4");

    el.appendChild(el2);
    el2.classList.add("shadow-lg");
    el2.classList.add("p-3");

    node.appendChild(el);
};