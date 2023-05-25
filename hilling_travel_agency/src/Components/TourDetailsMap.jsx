import React from 'react';
import "../styles/TourDetailsMap.css"
function TourDetailsMap(props) {
    return (
        <div className="mapouter">
        <div className="gmap_canvas">
            <iframe src="https://maps.google.com/maps?q=daarjeeling&t=&z=13&ie=UTF8&iwloc=&output=embed" width="800" height="500" id="gmap_canvas"  frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title='map'></iframe><br/>
        </div>
    </div>
    );
}

export default TourDetailsMap;