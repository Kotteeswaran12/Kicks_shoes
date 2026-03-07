import ProdList from './ProdList/ProdList.jsx'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './Login/Register.jsx'
import NavBar from './NavBar.jsx'
import HeroSection from './HeroSection/HeroSection.jsx'
import NewDrop from './NewDrop/NewDrop.jsx'
import Review from './Review/Review.jsx'

import Categories from './Categories/categories.jsx'
import ProductDetails from './ProductDetails/ProductDetails.jsx'
import Login from './Login/Login.jsx'
import { Cart } from './Cart/Cart.jsx'
import { createContext } from 'react'
// import NavBar from './NavBar.jsx'
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();
const App = () => {
    const [cart, setCart] = useState([])
     const [like , setLike]  = useState(false);
    return (
        <CartContext.Provider value={{ cart, setCart  , like , setLike}}>
            <NavBar />
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
                <Route path='productDetails' element={<ProductDetails />} />


                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />}></Route>
                <Route path='Products' element={<ProdList />}></Route>
                <Route path='cart' element={<Cart />}></Route>
            </Routes>
        </CartContext.Provider>
    )
}

export default App