import React from 'react';
import TourdetailsHead from '../Components/TourdetailsHead';
import TourdetailsMain from '../Components/TourdetailsMain';
import TourDetailsWeather from '../Components/TourDetailsWeather';
import "../styles/TourDetails.css"
function Tourdetails(props) {
    return (
        <div id="TourDetails_Parent">
            <TourdetailsHead/>
            <TourdetailsMain/>
            <TourDetailsWeather/>
        </div>
    );
}

export default Tourdetails;