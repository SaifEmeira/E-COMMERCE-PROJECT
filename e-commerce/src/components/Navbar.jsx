/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import logo from '../assets/finalProject assets/freshcart-logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../Context/AuthContext'
import useQueryCart from '../HOOKS/useQueryCart'
import { addToCart, getCart } from '../APIS/CartApi'

export default function Navbar() {

  let { data:datanums, isLoading, isError, error } = useQueryCart("getCart", getCart);

    let { data } = useQueryCart('cart', addToCart)


    let navigate = useNavigate()


    let {setLogin , login} = useContext(auth)


    let [open , setOpen]=useState(false)

    function toggle() {
        setOpen(!open)
    }

    function logout() {
        localStorage.removeItem("userToken")
        setLogin(null)
        navigate('/login')
        
    }


    return (
        <nav className=' py-4 bg-[#f0f3f2]  '>
            <div className="m-auto relative  justify-between items-center  px-[60px] md:flex">
                <div className=' gap-6 md:flex md:gap-3'>
                    <Link to={'/'}><img src={logo} width={130} alt="" /></Link>


                    {login? <ul className={`md:flex gap-4 ${open?"block":"hidden"}` }>
                    <li>
                            <NavLink className='text-black font-bold 'to={'/'}>Home</NavLink>
                        </li>
                       
                        <li>
                            <NavLink className='text-black font-bold 'to={'/brand'}>Brand</NavLink>
                        </li>
                        <li>
                            <NavLink className='text-black font-bold 'to={'/product'}>Products</NavLink>
                        </li>
                    </ul>:""}
                    
                </div>

                <div>
                    <ul className={`md:flex gap-6 justify-center items-center ${open?"block":"hidden"}`} >
                        
                        {login? <>
                            <li className='relative  pt-3  md:pt0 '>
                                <Link to={'/cart'}>
                                    <i className='  fas fa-cart-shopping text-black '></i>
                                    <span className='w-[20px] h-[20px] absolute bottom-4 left-3 bg-green-700 rounded-full flex justify-center items-center text-white'>{datanums?.numOfCartItems}</span>
                                </Link>
                            </li>
                            <li onClick={logout} className='cursor-pointer'>  {login?<b className='me-5 text-2xl text-green-700'>Hi {login.name}</b>:""}
                        
                        
                        
                        
                        
                        
                        
                        LogOut </li> </>:<><li > <NavLink className='text-black' to={'/login'}>Login</NavLink> </li>
                        <li> <NavLink className='text-black' to={'/register'}>Register</NavLink> </li>
                        <li className='flex gap-3'>
                            <a href=""><i className='    fab text-black fa-facebook-f'></i></a>
                            <a href=""><i className='fab   text-black fa-twitter'></i></a>
                            <a href=""><i className='fab  text-black fa-google'></i></a>
                            <a href=""><i className='fab  text-black fa-instagram'></i></a>

                        </li></>}
                        

                    </ul>
                </div>

                <i onClick={toggle} className={` md:hidden block fas ${!open?"fa-bars":"fa-close"} fa-2x absolute top-0 right-2 cursor-pointer`}></i>

            </div>
        </nav>
    )
}
