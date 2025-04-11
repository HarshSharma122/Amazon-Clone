import React, { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
    const [value, setvalue] = useState([]);
    return (
        <CartContext.Provider value={{ value, setvalue }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;