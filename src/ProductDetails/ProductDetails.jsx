import React from "react";
import Navbar from '../NavBar';
import Footer from '../Footer/Footer';
import { useLocation } from "react-router-dom";
import './ProductDetails.css';
import { FiHeart } from "react-icons/fi";

let ProductDetails = (Details) => {
    const location = useLocation();
    console.log(location.state);
    const { name, price, img, badge, size, color } = location.state;
    return (
        <div className="ProdDetailsOuter">

            <div className="ProdFullView">
                <div className="ProdImg">
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                </div>
                <div className="ProdDetails">
                    <div className={`badge ${badge}`}>{badge}</div>
                    <h1 className="ProdName">{name}</h1>
                    <h2 className="ProdPrice">{price}</h2>

                    <div className="ProdColor">
                        <h1>Color</h1>
                        <div className="ListColor">
                            {
                                color.map((color, i) => (
                                    <div className={`colors ${color}`} key={i}></div>

                                ))
                            }
                        </div>

                    </div>

                    <div className="ProdSize">
                        <div className="textFlex">
                            <h1>Size</h1>
                            <h1>Size Chart</h1>
                        </div>
                        <div className="SizeList">
                            {
                                size.map((size, i) => {
                                    return (
                                        <div className="ListSizes" key={i}>{size}</div>
                                    )
                                })
                            }
                        </div>

                    </div>

                    <div className="ProdBtns">
                        <div className="addToCart">
                            <button>Add to cart</button>
                            <div className="like">
                                <FiHeart></FiHeart>
                            </div>
                        </div>

                        <button>Buy it now</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProductDetails;