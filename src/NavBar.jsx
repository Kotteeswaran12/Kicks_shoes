import React, { useState } from 'react'
import './NavBar.css';
import HarmMenu from './assets/navbar/heroicons_bars-3-20-solid.png'
import searchIcon from './assets/navbar/Search.png'
import Person from './assets/navbar/Icon.png'
import SideBar from './SideBar'
const NavBar = () => {
    const [menu, setMenu] = useState(true);
    return (

        <nav>
            <div className="navbar">
                <div className="box">
                    <img src={HarmMenu} alt="" width="20px" onClick={() => {
                        setMenu((prev) => !prev)

                    }} />
                    <ul >
                        <li>New Drops🔥</li>
                        <li>Men</li>
                        <li>women</li>
                    </ul>

                </div>
                <div className="box">
                    <h1>kicks</h1>
                </div>
                <div className="box">
                    <img src={searchIcon} alt="" width="20px" />
                    <img src={Person} alt="" />
                    <div className="count">
                        0
                    </div>
                </div>
            </div>
            <SideBar setMenu={setMenu} menu={menu}/>
        </nav>


    )
}

export default NavBar