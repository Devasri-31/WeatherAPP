var button = document.querySelector('.findInput')
var inputValue = document.querySelector('.textInput')
var cityName = document.querySelector('.cityName')
var temp = document.querySelector('.temp')
var min = document.querySelector('.minT')
var max = document.querySelector('.maxT')
var pressureOfCity = document.querySelector('.pres')
var humidityOfCity = document.querySelector('.hum')
var windValueOfCity = document.querySelector('.wind')
var descValueOfCity = document.querySelector('.desc')

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=59466204e56059b839e8e3b9102ceb06&units=metric').then(response => response.json()).then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var minTemp = data['main']['temp_min'];
        var maxTemp = data['main']['temp_max'];
        var pressure = data ['main']['pressure'];
        var humidity = data['main']['humidity'];
        var windValue = data['wind']['speed'];
        var descValue=data['weather'][0]['description'];

        cityName.innerHTML=("Name of city: "+nameValue);
        temp.innerHTML=("Temperature: "+tempValue);
        min.innerHTML=("Minimum Temperature: "+minTemp);
        max.innerHTML=("Maximum Temperature: "+maxTemp);
        pressureOfCity.innerHTML=("Pressure: "+pressure);
        humidityOfCity.innerHTML=("Humidity: "+humidity);
        windValueOfCity.innerHTML=("WindValue: "+windValue);
        descValueOfCity.innerHTML=("Description: "+descValue);
    })
})
