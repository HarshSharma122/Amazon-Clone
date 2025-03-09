import React from "react";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "../checkoutProduct";
import { getBasketTotal } from "../../reducer";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="bg-gray-200 flex items-center justify-center mt-5">
      <div className=" cursor-pointer bg-white product_boxes  ml-10 w-250 flex flex-col z-0">
        {basket.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is Empty</h2>
          </div>
        ) : (
          <div className="">
            {
              basket?.map(item => (
                <CheckoutProduct
                  title={item.title}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />

              ))
            }


            {
              basket.length>0&&(
               <div className="p-4 bg-yellow-700 float-right mr-8 mb-3">
              <CurrencyFormat
              renderText={(value)=>(
                <>
                <h1 className="text-medium  text-white pb-2">SubTotal({basket.length} items): <strong>{ `${value}`}</strong></h1>
                </>
              )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
 
               <button className="cursor-pointer hover:bg-yellow-600 text-white bg-yellow-500 p-2">Proceed To checkout</button>
             </div>
              )
            }
           
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
