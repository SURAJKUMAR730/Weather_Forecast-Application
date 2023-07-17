// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=


// FUNCTION FOR PLACEHOLDER 
function clearPlaceholder(input) {
    input.placeholder = '';
}
function restorePlaceholder(input) {
    input.placeholder = 'Enter city name...';
}

// FUNCTION THAT STORE WEATHER API KEY AND LINK
const weatherApi = {
    key: "bf919ee6fb6b13d1c4422c00925e4f5d",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');



// Event Listener Function on keypress enter click krte hee search hojayega
searchInputBox.addEventListener('keypress', (event) => {

    if (event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }
});



// FUNCTION  THAT FETCH Weather Report FROM API WITH CITY NAME TAKEN BY USER
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
}


// FUNCTION THAT Show Weather Report 
function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;


    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;


    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);


    //IF CONDITION DO CHECK VARIOUS WEATHER DATA WITH DISPLAYING DIFF. IMAGE FOR DIFF. WEATHER

    if (weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('clear1.jpg')";
    }
    else if (weatherType.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('cloudy.jpg')";
    }
    else if (weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('haze.jpg')";
    }
    else if (weatherType.textContent == 'Mist') {
        document.body.style.backgroundImage = "url('mist.jpg')";
    }
    else if (weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url(''rain1.webp')";
    }
    else if (weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('snow.jpg')";
    }
    else if (weatherType.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('thunderstorm.jpg')";
    }
    else if (weatherType.textContent == 'Sunny') {
        document.body.style.backgroundImage = "url('sunny.jpg')";
    }
}

//  FUNCTION THAT MANAGES THE DATES DATA
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}


