import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { delToCart } from '../actions'
import { updateToCart } from '../actions'

export default function Cart(props) {
  let {cart,stt}=props
  const [quantity,setQuantity]=useState(1)
  const dispatch=useDispatch()
  useEffect(()=>{
    setQuantity(cart.quantity)
  },[cart.quantity])
  const handleDelete=()=>{
    dispatch(delToCart(cart.product.productId))
  }
  const handleUpdate=()=>{
    dispatch(updateToCart(cart.product,quantity))
  }
  return (
    <tr>
              <th scope="row">{stt}</th>
              <td>{cart.product.productName}</td>
              <td>{cart.product.price} USD</td>
              <td>
                <input
                  name="cart-item-quantity-1"
                  type="number"
                  value={quantity}
                  onChange={(e)=>setQuantity(+e.target.value)}
                  min={1}
                />
              </td>
              <td>
                <strong>{cart.product.price*quantity} USD</strong>
              </td>
              <td>
                <a
                  className="label label-info update-cart-item"
                  href="#"
                  data-product=""
                  onClick={handleUpdate}
                >
                  Update
                </a>
                <a
                  className="label label-danger delete-cart-item"
                  href="#"
                  data-product=""
                  onClick={handleDelete}
                >
                  Delete
                </a>
              </td>
            </tr>
  )
}
