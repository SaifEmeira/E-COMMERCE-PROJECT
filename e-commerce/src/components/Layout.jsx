/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <div className='parent'>
    <Navbar/>
    <div className="container px-[60px]">
    <Outlet/>
    </div>
    <Footer></Footer>
    </div>
      
    </>
  )
}
