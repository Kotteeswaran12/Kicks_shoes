import React, { useState } from 'react'
import './NavBar.css';
import HarmMenu from './assets/navbar/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import searchIcon from './assets/navbar/Search.png'
import Person from './assets/navbar/person_24dp_000000_FILL1_wght400_GRAD0_opsz24.png'
import SideBar from './SideBar'
import { GoPersonFill } from "react-icons/go";
const NavBar = () => {
    const [menu, setMenu] = useState(false);

    return (

        <nav>
            <div className="navbar">
                <div className="box">
                    <img src={HarmMenu} alt="" width="20px" onClick={() => {
                        setMenu((prev) => !prev)

                    }} />
                    <ul >
                        <li ><a href="#NewArrived">New Drops🔥</a></li>
                        <li>Men</li>
                        <li>women</li>
                    </ul>

                </div>
                <div className="box">
                    <h1>kicks</h1>
                </div>
                <div className="box">
                    <img src={searchIcon} alt="" width="20px" />
                    <GoPersonFill className='img'/>
                    <div className="count">
                        0
                    </div>
                </div>
            </div>
            <SideBar setMenu={setMenu} menu={menu} />
        </nav>


    )
}

export default NavBar