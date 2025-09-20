import React from 'react'
import './SideBar.css';
import { IoMdClose } from "react-icons/io";
import closeIcon from './assets/navbar/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import Person from './assets/navbar/person_24dp_000000_FILL1_wght400_GRAD0_opsz24.png'
import Men from './assets/navbar/male_30dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import women from './assets/navbar/female_30dp_000000_FILL0_wght400_GRAD0_opsz24.png'
const SideBar = ({menu , setMenu}) => {
//    console.log(menu)/
    return (
        <div className={`sidebar ${menu ? 'open':''}`} onClick={()=>{setMenu(false)}}>
            <div className="listOf">
                <div className="close" onClick={()=>{ setMenu(false)}}>
                  <IoMdClose />
                </div>
                <div className="orderList">
                    <ul>
                        <li onClick={()=>{console.log("New Drop")}}>new Drop 🔥</li>
                        <li onClick={()=>{console.log("Men")}}><img src={Men} alt="" />Men</li>
                        <li onClick={()=>{console.log("Women")}}><img src={women} alt="" />Women</li>
                        <li onClick={()=>{console.log("Login")}}> <img src={Person} alt="" /> Login</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar