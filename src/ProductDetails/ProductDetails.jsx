
import { useLocation } from "react-router-dom";
import './ProductDetails.css';
import { FiHeart } from "react-icons/fi";
import ProdCards from "../NewDrop/ProdCards";
import { useState } from "react";
import { CartContext } from '../App';
import { useContext } from 'react';
import { FaHeart } from "react-icons/fa";
// import { cart } from "../Const/const";
let ProductDetails = () => {
    const location = useLocation();

    const {   setCart} = useContext(CartContext);
    // console.log();

    const [colorActive, SetColorActive] = useState({
        id: 0,
        content: "active"
    })
    const [sizeActive, SetSizeActive] = useState({
        id: 0,
        content: "active"
    })
    const {like , setLike}  = useContext(CartContext);
    
    const { name, price, img, badge, size, color, abt } = location.state;

    const isMobile = window.innerWidth <= 642;
    const [imgDisplay, setImgDisplay] = useState(isMobile ? 0 : null);
    
    return (
        <>

            <div className="ProdDetailsOuter">

                <div className="ProdFullView">
                    <div className="ProdImg">

                        {isMobile &&
                            (
                                <img src={img[imgDisplay == null ? 0 : imgDisplay]} alt="" />

                            )
                        }
                        {
                            img.map((img, i) => (
                                i != imgDisplay && (
                                    <img src={img} alt="" key={i} onClick={() => { if (isMobile) { setImgDisplay(i) } }} />
                                )


                            ))
                        }
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
                                        <div className={`ColorOuter ${colorActive.id === i ? colorActive.content : ""}`} key={i}>

                                            <div className={`colors`} style={{backgroundColor:color}}  onClick={() => { SetColorActive({ id: i, content: "active" }) }}></div>

                                        </div>

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
                                            <div className={`ListSizes ${sizeActive.id == i ? sizeActive.content : ""}`} key={i} onClick={() => { SetSizeActive({ id: i, content: "active" }) }}>{size}</div>
                                        )
                                    })
                                }
                            </div>

                        </div>

                        <div className="ProdBtns">
                            <div className="addToCart">
                                <button onClick={() =>{ setCart(prevCart => [...prevCart, location.state])} } >Add to cart</button>
                                <div className="like" onClick={()=> setLike(!like)}>
                                  { !like?  <FiHeart></FiHeart> : <FaHeart /> }
                                </div>
                            </div>

                            <button>Buy it now</button>
                        </div>

                        <div className="AboutProd">
                            <h1>ABOUT THE PRODUCT</h1>
                            <p>{abt}</p>
                        </div>

                    </div>

                </div>
                <h1 className="mayLike">ALSO YOU MAY LIKE</h1>
                <ProdCards></ProdCards>
            </div>

        </>
    )
}

export default ProductDetails;