import React from 'react';
import {Routes,Route} from "react-router-dom"
import Product_Page from '../Components/Product Page/Product_Page';
function AllRoutes(props) {
    return (
        <Routes>
            {/* Add Routes here */}
            <Route path='/Product_page' element={<Product_Page/>}/>
        </Routes>
    );
}

export default AllRoutes;