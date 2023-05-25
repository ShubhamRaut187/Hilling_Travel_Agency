import React from 'react';
import TourDetailsMap from './TourDetailsMap';
import "../styles/TourDetailsWeatherMap.css"
import TourDetailsWeatherDetails from './TourDetailsWeatherDetails';
function TourDetailsWeather(props) {
    // let city = "Darjeeling";
    return (
        <div id="TourDetailsWeatherMapParent">
           <TourDetailsMap/> 
           <TourDetailsWeatherDetails/>
        </div>
    );
}

export default TourDetailsWeather;