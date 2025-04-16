import React from 'react'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import LogedContext from '../../context/logedContext';
import { useState } from 'react';
function Address({ onSave, initialAddress = null }) {
  const { isLogedIn } = useContext(LogedContext);
  const [address, setAddress] = useState(initialAddress || {
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India',
    phone: '',
    isDefault: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddress(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/addressData', 
      {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(address)
      }
    )
  };


  return (
    <>
      {
        isLogedIn === true ? (
          <div>
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {initialAddress ? 'Edit Address' : 'Add New Address'}
              </h2>

              <form onSubmit={handleSubmit} method='POST'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={address.firstName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md`}
                      required
                    />

                  </div>

                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={address.lastName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md `}
                    />
                  </div>
                </div>

                {/* Address Line 1 */}
                <div className="mb-4">
                  <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700 mb-1">
                    Address Line 1 *
                  </label>
                  <input
                    type="text"
                    id="addressLine1"
                    name="addressLine1"
                    value={address.addressLine1}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md`}
                  />
                </div>

                {/* Address Line 2 */}
                <div className="mb-4">
                  <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700 mb-1">
                    Address Line 2 (Optional)
                  </label>
                  <input
                    type="text"
                    id="addressLine2"
                    name="addressLine2"
                    value={address.addressLine2}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={address.city}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md `}
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State/Province *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={address.state}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md`}
                    />
                  </div>

                  {/* Postal Code */}
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={address.postalCode}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md `}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Country */}
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={address.country}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md`}
                    >
                      <option value="United States">India</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      {/* Add more countries as needed */}
                    </select>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={address.phone}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md `}
                    />
                  </div>
                </div>

                {/* Default Address Checkbox */}
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="isDefault"
                      checked={address.isDefault}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Set as default address</span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    {initialAddress ? 'Update Address' : 'Save Address'}
                  </button>
                </div>
              </form>
            </div>
          </div>

        ) : (
          <div className='p-40'>
            <div className='text-2xl font-bold'>Please login or signup</div>
            <NavLink to="/login">
              <button className='mt-3 cursor-pointer bg-yellow-500 p-3 text-white text-xl'>Login & signup</button>
            </NavLink>

          </div>
        )
      }
    </>
  )
}

export default Address
