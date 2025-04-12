import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/amazon-dark-logo-png-transparent-removebg-preview.png'
import { SearchIcon, ShoppingCart, User, UserX, X } from 'lucide-react'
import CartContext from "../../context/CartContext";
import LogedContext from "../../context/logedContext";
export default function Header() {
    
    const {isLogedIn} = useContext(LogedContext);
    
    const { value } = useContext(CartContext);
    return (
        <>

            <header className="shadow sticky z-50 top-0">
                <nav className="bg-navbar border-gray-200 px-4 lg:px-4 py-1">
                    <div className="flex flex-wrap justify-between items-center mx-auto">
                        <Link to="/" className="flex items-center text-white">
                            <img className="w-25" src={logo} alt="" />
                        </Link>
                        <div className="flex items-center lg:order-2">
                            {
                                isLogedIn===true? (
                                    <Link
                                
                                    className="text-white bg-yellow-500 focus:ring-gray-300 font-medium flex items-center justify-center  rounded-lg text-[18px] focus:outline-none px-2 py-2 mr-4">
                                        
                                  
                                </Link>
                                ):(
                                    <Link
                                
                                    className="text-white bg-yellow-500 focus:ring-gray-300 font-medium flex items-center justify-center  rounded-lg text-[18px] focus:outline-none px-2 py-2 mr-4">
                                  <X/>
                                </Link>
                                )
                            }
                     
                            <NavLink
                                to="/account"
                                className="text-white bg-yellow-500 focus:ring-gray-300 font-medium w-[90px] flex items-center justify-center  rounded-lg text-[18px] focus:outline-none px-2 py-2 mr-4"
                            >
                                account
                            </NavLink>
                            <Link
                                to="#"
                                className="text-white focus:ring-gray-300 font-medium  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Returns<p className="font-medium text-l">&orders</p>
                            </Link>
                            <NavLink
                                to="/checkout"

                                className="flex items-center justify-center  text-white focus:ring-gray-300 font-medium  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">

                                {/* <img className="w-9"  alt="" /> */}
                                <ShoppingCart />
                                <div className="flex items-center flex-col">
                                    <span>{value?.length}</span>
                                    <h1 className="ml-1 text-l">Cart</h1>
                                </div>
                            </NavLink>
                        </div>
                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <div className="bg-white flex items-center justify-between w-150 h-10 rounded-lg focus:outline-none">
                                <input
                                    className="focus:outline-none pl-3 w-[100%]"
                                    type="text"
                                    placeholder="Search amazon.in"
                                />
                                <div className="w-13 h-10 cursor-pointer flex bg-yellow-500   items-center justify-center">
                                    <SearchIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="bg-gray-800 h-10  justify-between items-center w-full lg:flex">
                    <ul className="flex ml-8 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 pr-2 pl-3 duration-200 text-base ${isActive ? "text-orange-500" : "text-white"
                                    } border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-normal`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </header>
        </>
    );
}
