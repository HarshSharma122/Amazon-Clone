import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import amazon from '../../assets/logo-amazon.svg'
import { MoveRightIcon } from 'lucide-react'
import LogedContext from '../../context/logedContext'
function LoginSecurity() {
    const { isLogedIn, setIsLogedIn } = useContext(LogedContext);
    const [InputValue, setInputValue] = useState({
        name: "",
        email: "",
        password: "",
        number: ""
    });

    const changeValue = (e) => {
        setInputValue({ ...InputValue, [e.target.name]: e.target.value });
    }
    const addProduct = (e) => {

        e.preventDefault();
        setIsLogedIn(true);

        fetch('http://localhost:3000/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(InputValue)
        }).then(res => res.json())
    }

    return (
        <>
            <div>
                <Link to='/account'>
                    <button className='rounded shadow border-t-3 border-yellow-800  bg-yellow-500 text-white pt-2 pl-3 pr-4 mt-3 ml-2 font-bold cursor-pointer '>Back</button>
                </Link>
                <motion.div className='flex items-center justify-center flex-col'>
                    <img src={amazon} className='w-30' alt="" />
                    <div className=" bg-white px-6 py-18 sm:py-3 lg:px-8 border-1 border-gray-200 w-[46%] flex items-center flex-col justify-center mt-3 shadow-md">
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                        >
                            <div
                                className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg]  opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                            />
                        </div>
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-2xl">Signup or Create Account</h2>

                        </div>
                        <form onSubmit={addProduct} action='/' className="mx-auto mt-10 max-w-xl">

                            <div className="grid grid-cols-1 gap-x-5 gap-y-1 sm:grid-cols-2">
                                <div className='sm:col-span-2'>
                                    <label htmlFor="full-name" className="block text-sm/6 font-semibold text-gray-900">
                                        Full Name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="full-name"
                                            name="name"
                                            type="text"
                                            autoComplete="given-name"
                                            value={InputValue.name}
                                            onChange={changeValue}
                                            required
                                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#3c6e71]"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={InputValue.email}
                                            onChange={changeValue}
                                            required
                                            autoComplete="email"
                                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#3c6e71]"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="password" className="block text-sm/6 font-semibold text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={InputValue.password}
                                            onChange={changeValue}
                                            required

                                            autoComplete="organization"
                                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#3c6e71]"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                                        Phone number
                                    </label>
                                    <div className="mt-2.5">
                                        <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                            <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                                <select
                                                    id="country"
                                                    name="country"
                                                    autoComplete="country"
                                                    aria-label="Country"

                                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#3c6e71] sm:text-sm/6"
                                                >
                                                    <option>INR</option>
                                                    <option>CA</option>
                                                    <option>EU</option>
                                                </select>

                                            </div>
                                            <input
                                                id="phone-number"
                                                name="number"
                                                value={InputValue.number}
                                                onChange={changeValue}
                                                required
                                                type="text"
                                                placeholder="123-456-7890"
                                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-10">



                                <button
                                    type="submit"
                                    className="block w-full rounded-md cursor-pointer bg-yellow-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-yellow-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:focus:outline-[#3c6e71]"
                                >
                                    SignUp
                                </button>






                            </div>


                            <button className='flex mr-1 mt-2 cursor-pointer hover:text-yellow-600'>Already have an account <MoveRightIcon className='ml-1' /> </button>

                        </form>
                    </div>
                </motion.div>




            </div>
        </>
    )
}

export default LoginSecurity
