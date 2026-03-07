import React from 'react'
import './Cart.css'
import { CartContext } from '../App'
import { useContext } from 'react'
// import { cart } from '../Const/const'
export const Cart = () => {

  const { cart} = useContext(CartContext);
    console.log(cart);
  return (
    <div className='cartOuter'>
      {
        Object.values(cart).map((e , i)=>(
          <div key={i}>
            <img src={`${e.img[0]}`} alt="" />
            <h1>{e.name}</h1>
          </div>
        ))
      }

    </div>
  )
}
