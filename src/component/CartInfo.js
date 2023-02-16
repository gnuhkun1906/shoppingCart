import React from 'react'
import { useSelector } from 'react-redux'


export default function CartInfo() {
  const listCart = useSelector(state => state.listCart)
  let totalAmount=listCart.reduce((total,element)=>total+element.product.price*element.quantity,0)
  let elementCart = ""
  if (listCart.length == 0) {
    elementCart = <tr>
      <th colSpan={6}>Empty product in your cart</th>
    </tr>
  } else {
    elementCart = <tr>
      <td colSpan={4}>
        There are <b>{listCart.length}</b> items in your shopping cart.
      </td>
      <td colSpan={2} className="total-price text-left">
        {totalAmount} USD
      </td>
    </tr>
  }
  return (
    <tfoot id="my-cart-footer">
      {/* CART FOOTER */}
      {elementCart}

    </tfoot>
  )
}
