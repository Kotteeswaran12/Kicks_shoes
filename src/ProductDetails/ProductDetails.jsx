
import { useLocation } from "react-router-dom";
import './ProductDetails.css';
import { FiHeart } from "react-icons/fi";
import ProdCards from "../NewDrop/ProdCards";
import { useState } from "react";
let ProductDetails = (Details) => {
    const location = useLocation();

    const [colorActive, SetColorActive] = useState({
        id: 0,
        content: "active"
    })
    const [sizeActive, SetSizeActive] = useState({
        id: 0,
        content: "active"
    })
    const { name, price, img, badge, size, color, abt } = location.state;
    const [imgDisplay, setImgDisplay] = useState(0);
    const isMobile = window.innerWidth <= 642;
    return (
        <>

            <div className="ProdDetailsOuter">

                <div className="ProdFullView">
                    <div className="ProdImg">

                        {isMobile &&
                            (
                                <img src={img[imgDisplay]} alt="" />

                            )
                        }
                        {
                            img.map((img, i) => (
                                i != imgDisplay && (
                                    <img src={img} alt="" key={i} onClick={() => { setImgDisplay(i) }} aria-disabled />
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
                                        <div className={`ColorOuter ${colorActive.id == i ? colorActive.content : ""}`} key={i}>

                                            <div className={`colors ${color}`} onClick={() => { SetColorActive({ id: i, content: "active" }) }}></div>

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
                                <button>Add to cart</button>
                                <div className="like">
                                    <FiHeart></FiHeart>
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