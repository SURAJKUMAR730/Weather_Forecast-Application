

function clearPlaceholder(input) {
    input.placeholder = '';
}
function restorePlaceholder(input) {
    input.placeholder = 'Enter city name...';
}




var script = document.createElement('script');
script.scr = '//code.jquery.com/jquery-2.2.4.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var button2 = document.querySelector('.button2')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var latt = document.querySelector('.latt');
var long = document.querySelector('.long');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var date1 = document.querySelector(".date1");
var tmax1 = document.querySelector('.tmax1');
var tmin1 = document.querySelector('.tmin1');
var desc1 = document.querySelector('.desc1');
var date2 = document.querySelector(".date2");
var tmax2 = document.querySelector('.tmax2');
var tmin2 = document.querySelector('.tmin2');
var desc2 = document.querySelector('.desc2');
var date3 = document.querySelector(".date3");
var tmax3 = document.querySelector('.tmax3');
var tmin3 = document.querySelector('.tmin3');
var desc3 = document.querySelector('.desc3');
var date4 = document.querySelector(".date4");
var tmax4 = document.querySelector('.tmax4');
var tmin4 = document.querySelector('.tmin4');
var desc4 = document.querySelector('.desc4');
var humid1 = document.querySelector('.humid1');
var humid2 = document.querySelector('.humid2');
var humid3 = document.querySelector('.humid3');
var humid4 = document.querySelector('.humid4');
var x = document.getElementById('output');

button2.addEventListener('click', function () {
    document.querySelector('.display1').style.display = "block";
    document.querySelector('.display2').style.display = "block";
    document.querySelector('.display3').style.display = "block";
    document.querySelector('.display4').style.display = "block";


    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&units=metric&appid=ec1bbd45fc105715b9efd1d8f255481d')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var tmaxValue = data['list']['0']['main']['temp_max'];
            var tminValue = data['list']['0']['main']['temp_min'];
            var humidValue = data['list']['0']['main']['humidity'];
            var descValue = data['list']['0']['weather'][0]['description'];

            date1.innerHTML = "TODAY";
            tmax1.innerHTML = `Max-Temp : ${Math.floor(tmaxValue) + 1}° <span>C<span> `;
            tmin1.innerHTML = `Min-Temp : ${Math.floor(tminValue)}° <span>C<span> `;
            humid1.innerHTML = `HUMIDITY : ${humidValue} <span><span> `;
            desc1.innerHTML = descValue;

            var tmaxValue = data['list']['8']['main']['temp_max'];
            var tminValue = data['list']['8']['main']['temp_min'];
            var humidValue = data['list']['8']['main']['humidity'];
            var descValue = data['list']['8']['weather'][0]['description'];

            date2.innerHTML = "Tommorow ";
            tmax2.innerHTML = `Max-Temp : ${Math.floor(tmaxValue) + 1}° <span>C<span> `;
            tmin2.innerHTML = `Min-Temp : ${Math.floor(tminValue)}° <span>C<span> `;
            humid2.innerHTML = ` HUMIDITY : ${humidValue} <span><span> `;
            desc2.innerHTML = descValue;

            var tmaxValue = data['list']['16']['main']['temp_max'];
            var tminValue = data['list']['16']['main']['temp_min'];
            var humidValue = data['list']['16']['main']['humidity'];
            var descValue = data['list']['16']['weather'][0]['description'];

            date3.innerHTML = "DAY 3 ";
            tmax3.innerHTML = `Max-Temp : ${Math.floor(tmaxValue) + 2}° <span>C<span> `;
            tmin3.innerHTML = `Min-Temp : ${Math.floor(tminValue) - 1}° <span>C<span> `;
            humid3.innerHTML = `HUMIDITY : ${humidValue} <span><span> `;
            desc3.innerHTML = descValue;

            var tmaxValue = data['list']['24']['main']['temp_max'];
            var tminValue = data['list']['24']['main']['temp_min'];
            var humidValue = data['list']['24']['main']['humidity'];
            var descValue = data['list']['24']['weather'][0]['description'];

            date4.innerHTML = " Yesterday";
            tmax4.innerHTML = `Max-Temp : ${Math.floor(tmaxValue)}° <span>C<span> `;
            tmin4.innerHTML = `Min-Temp : ${Math.floor(tminValue) - 1}° <span>C<span> `;
            humid4.innerHTML = `HUMIDITY : ${humidValue} <span><span> `;
            desc4.innerHTML = descValue;
        })
        .catch(err => alert("Wrong city name!"))
})