const cities = ["Szczecin", "Gdańsk", "Olsztyn", "Białystok", "Poznań", "Bydgoszcz", "Warszawa", "Lublin", "Zielona Góra", "Łódź", "Kielce", "Rzeszów", "Wrocław", "Opole", "Katowice", "Kraków"];

const keyAPI = '79fd6ae10a619a738ee3af4fd3149be9';
const weatherForm = document.querySelector('#checkWeather form');
const weatherContent = document.querySelector('#cities > .container > .row');

let city = '';
let submit = false;

weatherForm.addEventListener('submit', function(e){
    e.preventDefault();
    city = this.querySelector('#city').value;
    
    if(city){
        const node = document.querySelector("#chooseCity .container .row");
        submit = true;
        getDataWeather(city, node);
    }
});
        


dateWeather(weatherContent);

    
cities.map(city => {
    submit = false;
    // console.log(city);
    addDivContainer(weatherContent);
    const node = weatherContent.querySelector(".col-3:last-child > div");
    createH(node, city);
    getDataWeather(city, node);
    // console.log(city, dataWeather);
});

   







