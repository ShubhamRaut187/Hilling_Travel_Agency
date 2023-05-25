import React, { useState } from 'react';
import { useEffect } from 'react';

function TourDetailsWeatherDetails(props) {
    let City = "Darjeeling";
    let [WeatherData,SetWeather] = useState({});
    let getWeather = ()=>{
           fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=6e47dbe9278731b0bfe8125975a0b9d7`).then((response)=>{
            return response.json();
           }).then((response)=>{
            console.log(response)
           }).catch((error)=>{
            console.log(error);
           })
    }
    useEffect(()=>{
        getWeather();
    },[])
    return (
        <div id="weather_details_parent">
            
        </div>
    );
}

export default TourDetailsWeatherDetails;