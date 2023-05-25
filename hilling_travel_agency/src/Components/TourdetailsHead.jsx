import React from 'react';
import "../styles/TourDetailsHead.css";
function TourdetailsHead(props) {
    return (
        <div id="TourDeatailsHead">
            <div id="TourDeatailsHead_sub1">
                <div id="TourDetails_sub_1">
                    <h2>9</h2>
                    <p>Days</p>
                </div>
                <div id="TourDetails_sub_2">
                    <h2>Sikkim Darjeeling Gangtok Lachung</h2>
                    <div>
                    {/* <p>4 Cities</p>
                    <p>5</p> */}
                    {/* <button>Group Tour</button> */}
                    </div>
                </div>
            </div>
            <div id="TourDeatailsHead_sub2">
                <div id="TourDetails_sub_3">
                    <p id="super_deal">SUPER DEAL PRICE</p>
                    <h2>₹83,000</h2>
                    <p>per person on twin sharing</p>
                </div>
                <div id="TourDetails_sub_4">
                    <button id="booknow_btn">BOOK NOW</button>
                </div>
            </div>
        </div>
    );
}

export default TourdetailsHead;