import React from 'react';
import {Routes,Route, Navigate} from "react-router-dom"
import { Signup } from '../Components/Signup/Signup';
import {Login} from '../Components/Login/Login';


function AllRoutes(props) {
    return (
        <Routes>
            {/* Add Routes here */}
            <Route path='/login' element = {<Login/>}/>
            <Route path='/' element = {<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    );
}

export default AllRoutes;