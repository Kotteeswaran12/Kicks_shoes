import React, { useState } from 'react'
import './NavBar.css';
import HarmMenu from './assets/navbar/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'

import SideBar from './SideBar'
import { GoPersonFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import SearchIcon from './Components/SearchIcon';

import { CartContext } from './App';
import { useContext } from 'react';
const NavBar = () => {
    const { cart } = useContext(CartContext);

    const [menu, setMenu] = useState(false);

    const navigation = useNavigate();


    return (

        <nav>
            <div className="navbar">
                <div className="box">
                    <img src={HarmMenu} alt="" width="20px" onClick={() => {
                        setMenu((prev) => !prev)

                    }} />
                    <ul >
                        <li onClick={() => navigation("/")} ><IoHome size={15} style={{ marginRight: '5px' }} />Home</li>
                        <li onClick={() => navigation("/products")}><a >New Drops🔥</a></li>

                    </ul>

                </div>
                <div className="box">
                    <h1>kicks</h1>
                </div>
                <div className="box">
                    <SearchIcon />
                    <GoPersonFill className='img' onClick={() => { navigation("/login") }} />
                    <div className="count" onClick={() => { navigation("/cart") }}>
                        {Object.keys(cart).length}
                    </div>
                </div>
            </div>
            <SideBar setMenu={setMenu} menu={menu} />
        </nav>


    )
}

export default NavBar