import React, { useState } from "react";
import LogedContext from "./logedContext";
const CheckLogedProvider = ({children}) =>
{
    const[isLogedIn, setIsLogedIn] = useState(false);
    return(
        <LogedContext.Provider value={{isLogedIn, setIsLogedIn}}>
            {children}
        </LogedContext.Provider>
    )
}
export default CheckLogedProvider;