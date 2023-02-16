import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions';


export default function Product(props) {
  const [quantity,setQuantity]=useState(1)
  const dispatch=useDispatch()
  let { product } = props 
  console.log(props);
  let isshow = true
  if (product.quantity==0) {
    isshow=false
  }
  const handleAdd=()=>{
    dispatch(addToCart(product,quantity))
    setQuantity(1)
  }
 
  let elementBuy = ""
  if (isshow) {
    elementBuy =
      <div>
        <input
          name="quantity-product-1"
          type="number"
          value={quantity}
          onChange={(e)=>setQuantity(+e.target.value)}
          min={1}
        />
        <a data-product={1} href="#" className="price" onClick={handleAdd}>
          {" "}
          {product.price} USD{" "}
        </a>
      </div>
  } else {
    elementBuy = <span class="price"> {product.price} USD</span>
  }
  return (
    <div className="media product">
      <div className="media-left">
        <a href="#">
          <img
            className="media-object"
            src={product.image}
            alt={product.productName}
          />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{product.productName}</h4>
        <p>
        {product.title}
        </p>
        {elementBuy}
      </div>
    </div>
  )
}
