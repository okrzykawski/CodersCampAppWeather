const cities = ["Szczecin", "Gdańsk", "Olsztyn", "Białystok", "Poznań", "Bydgoszcz", "Warszawa", "Lublin", "Zielona Góra", "Łódź", "Kielce", "Rzeszów", "Wrocław", "Opole", "Katowice", "Kraków"];

const keyAPI = '79fd6ae10a619a738ee3af4fd3149be9';
const weatherForm = document.querySelector('#weatherForm form');
const weatherContent = document.querySelector('#cities > .container > .row');

// let city = '';

// weatherForm.addEventListener('submit', function(e){
    //     e.preventDefault();
    //     city = this.querySelector('#city').value;
    
    //     if(city){
        //         getDataWeather(city);
        //     }
        // });
        


dateWeather(weatherContent);

    
cities.map(city => {
    // console.log(city);
    addDivContainer(weatherContent);
    const node = weatherContent.querySelector(".col-3:last-child");
    createP(node, city);
    getDataWeather(city, node);
    // console.log(city, dataWeather);
});

   







