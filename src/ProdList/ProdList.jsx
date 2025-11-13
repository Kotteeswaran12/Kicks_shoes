import React, { useState } from 'react'
import ProdBanner from '../assets/image 14.png';
import './ProdList.css'
import ProdCards from '../NewDrop/ProdCards';

const ProdList = () => {

    const isMobile = window.innerWidth <= 955;
    console.log(isMobile);

    const [Price , setPrice] = useState(500);
    const [Sizeselected , setSizeseleted] = useState(false);
    return (
        <div className='ProdListOuter'>
            <div className="banner">
                <img src={ProdBanner} alt="" />
                <div className="text">
                    <p>Limited Time only</p>
                    <h1>Get 30% off</h1>
                    <p>Sneakers made with your comfort in mind so you can put all of your focus into your next session.</p>
                </div>
            </div>
            <div className="prodTitles">
                <h1>Life Style Shoes</h1>
                <select name='dropDown'>
                    <option value="trending" >Trending</option>
                    <option value="New Drops">New Drops</option>
                    <option value="Offers">Offers</option>
                </select>
            </div>


            <div className="ProdLists">
               {
                
                
                isMobile ? "" :  <div className="filter">
                    <h1>Filters</h1>
                    <div className="filterBy">
                        <h3>Filter By</h3>

                        <div className="filterBtn">
                            <button>mens</button>
                            <button>Casuals</button>
                        </div>
                    </div>
                    <div className="size">
                        <h3>Size</h3>
                        <div className="SizeList">
                            <div className="SizeBox active">1</div>
                            <div className="SizeBox 2">1</div>
                            <div className="SizeBox 3">1</div>
                            <div className="SizeBox 4">1</div>
                            <div className="SizeBox 5">1</div>
                            <div className="SizeBox 6">1</div>
                            <div className="SizeBox 7">1</div>
                            <div className="SizeBox 8">1</div>
                            <div className="SizeBox 9">1</div>
                            <div className="SizeBox 10">1</div>
                        </div>
                    </div>

                    <div className="colors">
                        <h3>Colors</h3>
                        <div className="ColorList">
                            <div className="ColorBox  " style={{backgroundColor:'red'}}></div>
                            <div className="ColorBox 2">red</div>
                            <div className="ColorBox 3">red</div>
                            <div className="ColorBox 4">red</div>
                            <div className="ColorBox 5">red</div>
                            <div className="ColorBox 6">red</div>
                            <div className="ColorBox 7">red</div>
                            <div className="ColorBox 8">red</div>
                            <div className="ColorBox 9">red</div>
                            <div className="ColorBox 10">red</div>
                        </div>
                    </div>

                    <div className="gender">
                        <h3>Gender</h3>
                        <div className="men">
                            <input type="checkbox" name="Men" id="Men" />
                            <label htmlFor="Men">Men</label>
                        </div>
                        <div className="women">
                            <input type="checkbox" name="Women" id="Women" />
                            <label htmlFor="Women">Women</label>
                        </div>
                    </div>

                    <div className="price">
                        <h3>Price</h3>
                        <input type="range" name="price" id="price" min={1000} max={10000}  step={100} onChange={(e)=>{setPrice(e.target.value);}}/>
                        <p>RS : {Price}</p>
                    </div>

                </div>    
                    
                
               }

                <div className="lists">
                    <ProdCards></ProdCards>
                    <ProdCards></ProdCards>
                    <ProdCards></ProdCards>
                </div>
            </div>
        </div>
    )
}

export default ProdList