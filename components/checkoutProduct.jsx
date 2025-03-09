import React from 'react'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });

  }
  return (
    <div>
      <div className="cart__Details flex  pl-4 mb-7 mt-4">
        <div className="img_section mr-4">
          <img className="w-40" src={image} alt="" />
        </div>
        <div className="product__info mt-2">
          <div className="product__name">
            <h3>{title}</h3>
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

          <button onClick={removeFromBasket} className="rounded-l border-1 bg-yellow text-black-500 border-none w-25 h-8 cursor-pointer">
            Remove Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct
