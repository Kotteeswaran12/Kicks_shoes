import React from 'react'
import { useState } from 'react';
export const Filters = (size, color, Price) => {
    const [colors, setColor] = useState(0);
    const [Sizeselected, setSizeseleted] = useState(0);
    return (
        <>
            <div className="filter">
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
                                    <div className={`SizeBox ${Sizeselected == i ? "active" : ''}`} onClick={() => { setSizeseleted(i);; }} key={i}>{s}</div>
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
                                    <div className={`ColorBox ${colors == i ? 'active' : ''}`} style={{ backgroundColor: `${c}` }} key={i} onClick={() => { ; setColor(i) }}></div>
                                )
                            })
                        }


                    </div>
                </div>

                <div className="gender">
                    <h3>Gender</h3>
                    <div className="men">
                        <input type="checkbox" name="Men" id="Men" />
                        <label htmlFor="Men" onClick={() => { }}>Men</label>
                    </div>
                    <div className="women">
                        <input type="checkbox" name="Women" id="Women" />
                        <label htmlFor="Women" onClick={() => { }}>Women</label>
                    </div>
                </div>

                <div className="price">
                    <h3>Price</h3>
                    <input type="range" name="price" id="price" min={1000} max={10000} step={100} />
                    <p>RS : {Price}</p>
                </div>
                < Btn text={"Submit"} color={"black"} />
            </div></>
    )
}
