import React from "react";
import Navbar from '../NavBar';
import Footer from '../Footer/Footer';
import { useLocation } from "react-router-dom";

let ProductDetails = (Details) => {
    const location = useLocation();
    console.log(location.state);
    const { name, price, img } = location.state;
    return (
        <div>
            <Navbar></Navbar>
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h2>{price}</h2>
            <Footer></Footer>
        </div>
    )
}

export default ProductDetails;