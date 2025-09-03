import React from 'react'
import './NavBar.css';
import searchIcon from './assets/navbar/Search.png'
import Person from './assets/navbar/Icon.png'
const NavBar = () => {
  return (
    <nav>
        <div className="navbar">
            <div className="box">
                <img src={searchIcon} alt="" width="20px"/>
                <ul>
                    <li>New Drops 🔥</li>
                    <li>Men</li>
                    <li>women</li>
                </ul>
            </div>
            <div className="box">
                <h1>kicks</h1>
            </div>
            <div className="box">
                <img src={searchIcon} alt="" width="20px"/>
                <img src={Person} alt="" />
                <div className="count">
                    0
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar