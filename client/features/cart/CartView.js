import React from 'react'
import Cart from './Cart'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectCart } from './cartSlice';
export const CartView = () => {
  const cart = useSelector(selectCart)
  return (
    <div>
      <Cart />
      <br />
      {cart.length ? <Link to="/checkout">
        <button className="checkoutButton"><p>GO TO CHECKOUT</p></button>
      </Link> :
        <div className='emptyCart'>
          <div className='emptyCartText'>
          <h1>Uh oh!</h1>
          <h2>testing!</h2>
          </div>
          <Link to="/rents">
          <button className="keepShoppingButton">Click here to keep shopping</button>
        </Link>
        </div>
        }
    </div>
  )
}
