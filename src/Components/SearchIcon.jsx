import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './SearchIcon.css'
const SearchIcon = () => {

  const [isActive, setIsActive] = useState(false);
  return (
    <>
      {/* {
            isActive? "" : ""
        } */}

      <div className={`search ${isActive ? 'active' : ''}`}>
        <FaSearch style={{cursor:'pointer'}} onClick={()=> isActive? setIsActive(false) : setIsActive(true)} />
        <input type="text" />
      </div>
    </>
  )
}

export default SearchIcon