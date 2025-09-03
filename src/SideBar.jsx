import React from 'react'
import './SideBar.css';
const SideBar = ({menu , setMenu}) => {
//    console.log(menu)/
    return (
        <div className={`sidebar ${menu ? 'open':''}`}>
            <div className="listOf">
                <div className="close" onClick={()=>{ setMenu(false)}}>
                    X
                </div>
                <div className="orderList">
                    <ul>
                        <li>new Drop 🔥</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar