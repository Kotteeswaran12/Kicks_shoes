import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './Login/Register.jsx'
import NavBar from './NavBar.jsx'
import HeroSection from './HeroSection/HeroSection.jsx'
import NewDrop from './NewDrop/NewDrop.jsx'
import Review from './Review/Review.jsx'

import Categories from './Categories/categories.jsx'
import ProductDetails from './ProductDetails/ProductDetails.jsx'
import Login from './Login/Login.jsx'
const App = () => {
    return (
        <Routes>

            <Route
                path="/"
                element={
                    <>
                       
                        <HeroSection />
                        <NewDrop />
                        <Categories />
                        <Review />
                        
                    </>
                }
            />

            <Route path='productDetails' element={<ProductDetails />}/>

            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}></Route>
        </Routes>
    )
}

export default App