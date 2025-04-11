import React, { useContext, useState } from 'react'
import CartContext from '../../context/CartContext'
import CurrencyFormat from 'react-currency-format';
function Checkout() {
    const { value, setvalue } = useContext(CartContext);
    const removeCartItem = (index) => {
        const spli = value.splice(index, 1);
        setvalue([...value])
    }
    const getBasketTotal = (value)=>
    {
        
    }
    return (
        <div className=''>
            {
                value.length === 0 ? (
                    <div>
                        <h2 className='text-xl text-center pt-10 font-medium '>Your cart is empty</h2>
                    </div>
                ) : (
                    <div className=''>
                        {
                            value.map((ans, index) => (
                                <div className="bg-gray-200 flex items-center justify-center mt-5">
                                    <div className=" cursor-pointer bg-white product_boxes  ml-10 w-250 flex flex-col z-0">
                                        <div className="">
                                            <div className="cart__Details flex  pl-4 mb-7 mt-4">
                                                <div className="img_section mr-4">
                                                    <img className="w-40" src={ans.image} alt="" />
                                                </div>
                                                <div className="product__info mt-2">
                                                    <div className="product__name">
                                                        <h3>{ans.product_name}</h3>
                                                    </div>
                                                    <div className="product__price">

                                                        <strong>{'₹' + ans.price}</strong>
                                                    </div>

                                                    <div className="product__desc">

                                                        <strong>{ans.description}</strong>
                                                    </div>


                                                    <button onClick={() => removeCartItem(index)} className="rounded-l border-1 bg-yellow-500 text-black-500 border-none w-25 h-8 cursor-pointer">
                                                        Remove Cart
                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            ))
                            // checkout
                        }

                        {
                            value.length > 0 && (
                                <div className="p-4 bg-yellow-700 float-right mr-8 mb-3">
                                    <CurrencyFormat
                                        renderText={(data) => (
                                            <>
                                                <h1 className="text-medium  text-white pb-2">SubTotal({value.length} items): <strong>{`${data}`}</strong></h1>
                                            </>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(value)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                                    />

                                    <button className="cursor-pointer hover:bg-yellow-600 text-white bg-yellow-500 p-2">Proceed To checkout</button>
                                </div>
                            )
                        }
                    </div>
                )
            }




        </div>

    )
}

export default Checkout
