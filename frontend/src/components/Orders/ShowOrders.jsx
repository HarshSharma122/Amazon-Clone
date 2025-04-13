import React from 'react'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import LogedContext from '../../context/logedContext';
function ShowOrders() {
   const {isLogedIn} = useContext(LogedContext);
      
  return (
    <>
    {
      isLogedIn === true?(
      <div>
            <h1 className='p-3 text-2xl font-bold'>No orders yet</h1>
      </div>

      ):(
        <div className='p-40'>
          <div className='text-2xl font-bold'>Please login or signup for accessing the orders</div>
          <NavLink to="/login">
            <button className='mt-3 cursor-pointer bg-yellow-500 p-3 text-white text-xl'>Login & signup</button>
          </NavLink>

        </div>
      )
    }
    </>
  )
}

export default ShowOrders
