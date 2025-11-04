import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './NavBar.jsx'
import HeroSection from './HeroSection/HeroSection.jsx'
import NewDrop from './NewDrop/NewDrop.jsx'
import Review from './Review/Review.jsx'

import Categories from './Categories/categories.jsx'
import ProductDetails from './ProductDetails/ProductDetails.jsx'
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

        </Routes>
    )
}

export default App