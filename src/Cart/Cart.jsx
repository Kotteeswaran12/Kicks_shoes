import React from 'react'
import './Cart.css'
import { CartContext } from '../App'
import { useContext } from 'react'
import { TiWarning } from "react-icons/ti";
// import { cart } from '../Const/const'
export const Cart = () => {
  // Saving to celebrate 
  // Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.
  // Join us  or Sign-in
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <>
      <div className="outerMost">
        <div className='cartOuter'>
          <div className="CartOneLine">
            <h1>Saving to Celebrate</h1>
            <p>Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed. Join us  or Sign-in</p>
          </div>

          {
            !cart.length && (
              <div className="emptyCart">
                <h1> <TiWarning /> Your Cart is Empty</h1>
                <p>Looks like you haven't added anything to your cart yet.</p>
              </div>
            )
          }

          <div className="cartMain">

            <div className="CartList">
              {
                Object.values(cart).map((e, i) => (
                  <div key={i} className='cartCard'>
                    <img src={`${e.img[0]}`} alt="" />
                    <div className="nameAndP">
                      <h2>{e.name}</h2>
                      <p>${e.price}</p>
                    </div>
                  </div>
                ))
              }
            </div>

            {cart && <div className="Checkout">
              <h1>Checkout</h1>
              <p>Subtotal: ${Object.values(cart).reduce((acc, e) => acc + Number(e.price), 0)}</p>
              <button>Proceed to Checkout</button>
            </div>}
            
          </div>
        </div>
      </div>



    </>
  )
}

export default Cart