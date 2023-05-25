import React from 'react';
import {Routes,Route} from "react-router-dom"
import Productpage from '../Components/Productpage'
function AllRoutes(props) {
    return (
        <Routes>
            {/* Add Routes here */}
            <Route path='/product_page' element={<Productpage/>}/>
        </Routes>
    );
}

export default AllRoutes;