import React from 'react'
import { Navigate } from 'react-router-dom'
const PoductCard = (badge , img , name ,price) => {
  return (
    <div>
        <div className="prodCard" >
                        <div className={`badge `}>{badge}</div>
                        <img src={img} alt=""/>
                        <p>{name}</p>
                        
                        <Btn text={`View Product ${price}`} color={"#232321"}></Btn>
                    </div>

              
    </div>
  )
}

export default PoductCard