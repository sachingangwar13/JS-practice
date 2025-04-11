document.addEventListener('DOMContentLoaded', ()=> {
    const inputCity = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const temperatureDisplay =  document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "8d36ce21017777715055d2b5cf754d9c";

    getWeatherBtn.addEventListener('click' , () => {
        const city = inputCity.textContent.trim();

        if(!city) return;

        fetchWeatherData(city);
    })

    function fetchWeatherData(city){
        
    }

    function diplayWeatherData(weatherData){

    }

    function showErrorMessage(){
        
    }
})