import React from 'react'
import './Cart.css'
import { CartContext } from '../App'
import { useContext } from 'react'
import { TiWarning } from "react-icons/ti";
import { FiHeart } from "react-icons/fi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
export const Cart = () => {

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




          <div className="cartMain">
            {
              !cart.length && (
                <div className="emptyCart">
                  <h1> <TiWarning /> Your Cart is Empty</h1>
                  <p>Looks like you haven't added anything to your cart yet.</p>
                </div>
              )
            }

            <div className="CartList">
              { cart.length > 0 && (
                <div className="text">
                  <h1>Your Bag</h1>
                  <p>Items in your bag not reserved- check out now to make them yours.</p>
                </div>
              )}
              {
                Object.values(cart).map((e, i) => (
                  <div key={i} className='cartCard'>
                    <img src={`${e.img[0]}`} alt="" />
                    <div className="abt">
                      <div className="nameAndP">
                        <h2>{e.name}</h2>
                        <p>${e.price}.00</p>
                      </div>
                      <div className="description">
                        <p>{e.abt.length > 20 ? e.abt.substring(0, 94) + '...' : e.abt}</p>
                      </div>
                      <div className="SizeAndQty">
                        <p>Size  7 <MdOutlineArrowDropDown /></p>
                        <p>Quantity  1 <MdOutlineArrowDropDown /></p>
                      </div>
                      <div className="actionsBtn">
                        <FiHeart className='like' />
                        <IoTrashBinOutline className='delete' />
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            {cart.length > 0 &&  (<div className="Checkout">
              <h1>Checkout</h1>
              <p>Subtotal: ${Object.values(cart).reduce((acc, e) => acc + Number(e.price), 0)}</p>
              <button>Proceed to Checkout</button>
            </div>)}

          </div>
        </div>
      </div>



    </>
  )
}

export default Cart