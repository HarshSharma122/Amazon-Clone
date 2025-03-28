import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import cart from "../../assets/_Pngtree_vector_shopping_cart_icon_4142519-removebg-preview.png";
import search from "../../assets/search.svg";
import { useStateValue } from "../StateProvider";
import Checkout from "../checkout/checkout";
export default function Header() {
  const [{ basket }] = useStateValue();
  return (
    <header className="shadow sticky z-50 top-0">
      {/* Checkout section */}    

      <nav className="nav-bg-color border-gray-200 px-4 lg:px-4 py-2">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center text-white">
            <h1 className="font-medium text-3xl">
              Amazon<span className="text-orange-500">.in</span>
            </h1>
          </Link>
          <div className="flex items-center lg:order-2">
            <select className="text-white bg-black border-1 mr-2">
              <option>EN</option>
              <option value="hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Urdu">Urdu</option>
            </select>
            <Link
              to="#"
              className="text-white focus:ring-gray-300 font-medium  rounded-lg text-l px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white focus:ring-gray-300 font-medium  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Returns<p className="font-medium text-l">&orders</p>
            </Link>
            <NavLink
              to="/checkout"
             
              className="flex items-center justify-center  text-white focus:ring-gray-300 font-medium  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              <img className="w-9" src={cart} alt="" />{" "}
              <div
                className="flex items-center flex-col"
              >
                <span>{basket?.length}</span>
                <h1 className="ml-1 text-l">Cart</h1>
              </div>
            </NavLink>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <div className="bg-white flex items-center justify-between w-120 h-10 rounded-lg focus:outline-none">
              <input
                className="focus:outline-none pl-3 w-100"
                type="text"
                placeholder="Search amazon.in"
              />
              <div className="w-13 h-10 cursor-pointer search-icon-img flex  items-center justify-center">
                <img
                  src={search}
                  className="h-6 flex items-center justify-center"
                  alt=""
                />
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
                `block py-2 pr-2 pl-3 duration-200 text-base ${
                  isActive ? "text-orange-500" : "text-white"
                } border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-normal`
              }
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/boys"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 text-base ${
                  isActive ? "text-orange-500" : "text-white"
                } border-b border-gray-100  lg:border-0 hover:text-orange-700 lg:p-0 font-normal`
              }
            >
              Boy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/girls"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 text-base ${
                  isActive ? "text-orange-500" : "text-white"
                } border-b border-gray-100  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-normal`
              }
            >
              Girls
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/child"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 text-base ${
                  isActive ? "text-orange-500" : "text-white"
                } border-b border-gray-100  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-normal`
              }
            >
              Child
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shoes"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 text-base ${
                  isActive ? "text-orange-500" : "text-white"
                } border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 font-normal`
              }
            >
              Shoes
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
