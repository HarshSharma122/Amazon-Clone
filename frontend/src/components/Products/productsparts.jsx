import React from 'react'

function Productsparts({ product_name, price, quantity, description, image }) {
    return (
        <div className=" cursor-pointer bg-gray-100 product_boxes mb-7 ml-10  flex flex-col z-0">
            <div className="img_section">
                <img className="w-60" src={image} alt="" />
            </div>
            <div className="product__info mt-2">
                <div className="product__name">
                    <h3>{product_name}</h3>
                </div>
                <div className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </div>
               
                <div className="product__price">
                    {/* <small>₹</small> */}
                    <strong>{description}</strong>
                </div>
                <div className="product_rating flex mb-2">
                    {Array(5)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>

                <button className="rounded-l border-1 bg-yellow text-black-500 border-none w-25 h-8 cursor-pointer">
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default Productsparts
