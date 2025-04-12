import { Boxes } from 'lucide-react'
import React from 'react'
import parcel from '../../assets/delivery.png';
import lock from '../../assets/lock.png'
import address from '../../assets/gps.png'
import { Link, NavLink } from 'react-router-dom';
function Account() {
  return (
    <div className='mt-8 lg:ml-60 flex flex-col ml-20 mb-50 mr-10'>
      <h1 className='font-bold text-black text-4xl'>Your Account</h1>

      {/*  */}
      <div className='mt-10 grid md:grid-cols-4 gap-4 grid-cols-2 gap-10 '>




        {/* for orders components start here*/}
        <NavLink to='/Orders'>
          <div className="border-1 shadow-gray-300 border-t-4 hover: border-gray-500 rounded p-3 md:pb-10 h-30 md:h-[40] hover:scale-105 transition-all hover:shadow-md ">
            <div className='flex'>
              <div className="">
                <img src={parcel}   alt=""  className='w-19 md:w-20 pr-5'/>
              </div>
              <div className="">
                <h2 className='font-bold text-xl'>Your Orders</h2>
                <span>
                  <p className='text-gray-500'>Track, return, or buy things again</p>
                </span>
              </div>

            </div>
          </div>
        </NavLink>
        {/* for orders components start here*/}

        {/* for login and security  components start here*/}
        <NavLink to='/Login'>
          <div className="border-1 shadow-gray-300 border-t-4 hover: border-gray-500 rounded p-3 md:pb-10 h-30 md:h-[40] hover:scale-105 transition-all hover:shadow-md">
            <div className='flex'>
              <div className="">
                <img src={lock}   alt=""  className='w-19 md:w-20 pr-5'/>
              </div>
              <div className="">
                <h2 className='font-bold text-xl'>Login & security</h2>
                <span>
                  <p className='text-gray-500'>Edit login, name, and mobile number</p>
                </span>
              </div>

            </div>
          </div>
        </NavLink>
        {/* for login and security  components end here*/}


        
        {/* for addressed components here */}
        <NavLink to='/Address'>
          <div className="border-1 shadow-gray-300 border-t-4 hover: border-gray-500 rounded p-3 md:pb-10 h-30 md:h-[40] hover:scale-105 transition-all hover:shadow-md">
            <div className='flex'>
              <div className="">
                <img src={address}   alt=""  className='w-19 md:w-20 pr-5'/>
              </div>
              <div className="">
                <h2 className='font-bold text-xl'>Your Addresses</h2>
                <span>
                  <p className='text-gray-500'>Edit addresses for orders and gifts</p>
                </span>
              </div>

            </div>
          </div>
        </NavLink>
        {/* for addressed components here */}
        
      </div>
    </div>
  )
}

export default Account
