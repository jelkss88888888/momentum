const weatherContainer = document.querySelector(".js-weather");

const WEATHER_API = "c51aca0751865870e4c5f1d769d70fa8";
const COORDS = "coords";

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`).then(function(response){
        return response.json();
    }).then(
        function(json){
            const temp = json.main.temp;
            const location = json.name;
            weatherContainer.innerText = `${temp}°C ${location}`;
        }
    );
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function coordsSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function coordsError() {
    console.log("position failed");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(coordsSuccess, coordsError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords !== null) {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    } else {
        askForCoords();
    }
}

function init(){
    loadCoords();
}
init();