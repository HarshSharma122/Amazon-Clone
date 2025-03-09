import React, { useState } from "react";
import "./product.css";
import { useStateValue } from "../StateProvider";


function Product({id, name, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
   const addToBasket = ()=>
  {
    
    
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id, 
        title:name,
        image:image, 
        price:price,
        rating:rating
      }
    })
  }
  return (
    <div className=" cursor-pointer bg-gray-100 product_boxes mb-7 ml-10  flex flex-col z-0">
      <div className="img_section">
        <img className="w-60" src={image} alt="" />
      </div>
      <div className="product__info mt-2">
        <div className="product__name">
          <h3>{name}</h3>
        </div>
        <div className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </div>
        <div className="product_rating flex mb-2">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={addToBasket} className="rounded-l border-1 bg-yellow text-black-500 border-none w-25 h-8 cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
