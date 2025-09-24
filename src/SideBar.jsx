import React from 'react'
import './SideBar.css';
import { IoMdClose } from "react-icons/io";
import closeIcon from './assets/navbar/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import Person from './assets/navbar/person_24dp_000000_FILL1_wght400_GRAD0_opsz24.png'
import Men from './assets/navbar/male_30dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import women from './assets/navbar/female_30dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { GoPersonFill } from "react-icons/go";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const SideBar = ({ menu, setMenu }) => {
    //    console.log(menu)/
    return (
        <div className={`sidebar ${menu ? 'open' : ''}`} onClick={() => { setMenu(false) }} >
            <div className="listOf">
                <div className="close" >
                    <h3>KICKS</h3>
                    <IoMdClose className='closeIcon' onClick={() => { setMenu(false) }} />
                </div>

                <div className="orderList">
                    <ul>
                        <li ><a href="#NewArrived"><HiMiniRocketLaunch />new Drop</a></li>
                        <li onClick={() => { console.log("Men") }}><img src={Men} alt="" />Men</li>
                        <li onClick={() => { console.log("Women") }}><img src={women} alt="" />Women</li>
                        <li onClick={() => { console.log("Login") }}> <GoPersonFill className='img' /> Login</li>
                    </ul>
                </div>

                <div className="socialmedia">
                    <FaSquareXTwitter className='icons' size={"25px"} />
                    <FaInstagramSquare className='icons' size={"25px"} />
                    <FaYoutube className='icons' size={"25px"} />
                </div>
            </div>
        </div>
    )
}

export default SideBar