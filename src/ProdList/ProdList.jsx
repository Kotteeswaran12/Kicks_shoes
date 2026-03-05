import React, { use, useState } from 'react'
import ProdBanner from '../assets/image 14.png';
import './ProdList.css'
import ProdCards from '../NewDrop/ProdCards';
import { Category } from '../Const/const';
import Btn from '../Components/Btn';
import { Filters } from './Filters';
const ProdList = () => {

    const isMobile = window.innerWidth <= 955;
    console.log(isMobile);

    const [Price, setPrice] = useState(500);
    const [Sizeselected, setSizeseleted] = useState(false);

    const [{ size, color }] = Category;
    const [colors, setColor] = useState(0);
    const[showFilter , setShowFilter] = useState(false);
    const [fiterData, setFilterData] = useState({
        size: 0,
        color: '',
        gender: '',
        price: 0,

    })

    function handelFilter(data) {
        console.log(Object.keys(data)[0]);
        setFilterData(prev => ({ ...prev, [Object.keys(data)[0]]: Object.values(data)[0] }))
        console.log(fiterData);

    }
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
            <div className={`prodTitles`}>
                <h1>Life Style Shoes</h1>
                {
                    !isMobile ? <select name='dropDown'>
                        <option value="trending" >Trending</option>
                        <option value="New Drops">New Drops</option>
                        <option value="Offers">Offers</option>
                    </select> :''

               }

                {
                    isMobile ? <div className="M">
                        <select name='dropDown'>
                            <option value="trending" >Trending</option>
                            <option value="New Drops">New Drops</option>
                            <option value="Offers">Offers</option>
                        </select>
                        <Btn text={"Filter"} color={"Black"} onClick={()=> setShowFilter( !showFilter )}></Btn>
                    </div> : ''
                }
            </div>
                {
                    showFilter && <Filters></Filters>
                }

            <div className="ProdLists">
                {


                    isMobile ? "" : <div className="filter">
                        <h1>Filters</h1>
                        <div className="filterBy">
                            <h3>Filter By</h3>

                            <div className="filterBtn">
                                <Btn text={"mens"} ></Btn>
                                <Btn text={"Casuals"}></Btn>
                            </div>
                        </div>
                        <div className="size">
                            <h3>Size</h3>
                            <div className="SizeList">
                               

                                {
                                    size.map((s, i) => {
                                        return (
                                            <div className={`SizeBox ${Sizeselected == i ? "active" : ''}`} onClick={() => { setSizeseleted(i); handelFilter({ size: s }); }} key={i}>{s}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="colors">
                            <h3>Colors</h3>
                            <div className="ColorList">


                                {
                                    color.map((c, i) => {
                                        return (
                                            <div className={`ColorBox ${colors == i ? 'active' : ''}`} style={{ backgroundColor: `${c}` }} key={i} onClick={() => { handelFilter({ color: c }); setColor(i) }}></div>
                                        )
                                    })
                                }


                            </div>
                        </div>

                        <div className="gender">
                            <h3>Gender</h3>
                            <div className="men">
                                <input type="checkbox" name="Men" id="Men" />
                                <label htmlFor="Men" onClick={() => { handelFilter({ gender: "Men" }) }}>Men</label>
                            </div>
                            <div className="women">
                                <input type="checkbox" name="Women" id="Women" />
                                <label htmlFor="Women" onClick={() => { handelFilter({ gender: "Women" }) }}>Women</label>
                            </div>
                        </div>

                        <div className="price">
                            <h3>Price</h3>
                            <input type="range" name="price" id="price" min={1000} max={10000} step={100} onChange={(e) => { setPrice(e.target.value); handelFilter({ price: e.target.value }) }} />
                            <p>RS : {Price}</p>
                        </div>
                        < Btn text={"Submit"} color={"black"} />
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