import React from 'react';
import "../styles/TourDetailsMain.css";
function TourdetailsMain(props) {
    return (
        <div id="TourDetailsMainParent">
            <div id="TourDetailsMain_1">
                <div id="Tour_img_div">
                    <img src="https://img.veenaworld.com/group-tours/india/sikkim-darjeeling/sdgl/shsd5-bnn-1.jpg" alt="sikkim" id="tour_img"/>
                </div>
                <div id="Iternary_btn_div">
                    <button id="Iternary_btn">View Travel Iternary</button>
                </div>
            </div>
            <div id="TourDetailsMain_2">
                <div id="reviews_div">
                    <p id="reviews_heading"><i className="fa-solid fa-star fa-beat fa-xl" style={{color: "#ffd800"}}></i>&nbsp;&nbsp;&nbsp;&nbsp;They travel, they love, they say!&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-star fa-beat fa-xl" style={{color: "#ffd800"}}></i></p>
                    <hr />
                    <p>Dear Veena World , Fantastic service with proper follow up.Our tour guide Mr.Sandesh Wagh was very Humble, helpful ,friendly and co operative. This was the greatest experience with Hilling and will recomend it to all.</p>
                    {/* <p><i class="fa-solid fa-heart fa-shake fa-2xl" style={{color:"#f1231aff"}}></i></p> */}
                </div>
                <div id="top_includes_div">
                    <h3>Top Includes</h3>
                    <div id="top_includes_icons">
                    <i className="fa-solid fa-hotel fa-bounce fa-2xl" style={{color: "#9fe7f5ff"}}></i>
                    <i className="fa-solid fa-utensils fa-bounce fa-2xl" style={{color: "#429ebdff"}}></i>
                    <i className="fa-solid fa-bus fa-bounce fa-2xl" style={{color: "#053f5cff"}}></i>
                    <i className="fa-solid fa-plane fa-bounce fa-2xl" style={{color: "#f7ad19ff"}}></i>
                    <i className="fa-solid fa-camera-retro fa-bounce fa-2xl" style={{color: "#f27f0cff"}}></i>
                    </div>
                    <h3>Key Highlights</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, similique? Hic quo eum distinctio obcaecati iusto, recusandae dignissimos quos unde. Quos in id quisquam? A rerum voluptates qui dolor modi voluptates qui.</p>
                    
                </div>
            </div>
        </div>
    );
}

export default TourdetailsMain;