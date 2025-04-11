import React, {useState, useContext} from 'react';
import CartContextProvider from '../../context/CartContextProvider';
import CartContext from '../../context/CartContext';



function Productsparts({id , product_name, price, quantity, description, image }) {

    const {value, setvalue} = useContext(CartContext)

    const AddCartItem = ()=>
    {
        setvalue(value + 1);
    }
    return (
        <div className=" cursor-pointer bg-gray-100 mb-7 ml-10 flex flex-col z-0">
            <div className="img_section flex-[40%]">
                <img className="w-100 h-50 object-fill" src={image} alt="" />
            </div>
            <div className="product__info mt-4 ml-2 flex-[60%]">
                <div className="product__name">
                    <h3 className='font-bold text-xl'>{product_name}</h3>
                </div>
                <div className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </div>
                <div className="product__price">
                    <strong>{description}</strong>
                </div>
                
                <button onClick={AddCartItem} className="rounded-lg border-1 bg-yellow-400 mb-5 mt-5 text-black-500 border-none w-25 h-8 cursor-pointer">
                    Add to cart
                </button>
            </div>
        </div>
    );
}
export default Productsparts