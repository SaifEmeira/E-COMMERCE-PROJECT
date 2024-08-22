/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'




import { Link } from 'react-router-dom'
import useMutationCart from '../HOOKS/useMutationCart'
import { addToCart } from '../APIS/CartApi'
import { toast } from 'react-toastify';

export default function Item({ele}) {



 let {mutate:addMutate , status , data} = useMutationCart(addToCart);

 let [flag,setFlag]=useState(false)

if (status==='success') {
 toast.success(data?.data?.message);
  
}
 



  return (
    <div className='md:w-1/6  sm:w-1/2 text-center cursor-pointer product ' >

      
        <Link to={`/productsdetails/${ele?._id}/${ele?.category?._id}`} >
        <div className=" p-6 cursor-pointer">
        
        <img src={ele?.imageCover} className='w-full' alt="" />
        <p className='text-green-700'>{ele?.category?.name}</p>
        <p className=' text-black line-clamp-1'>{ele?.title}</p>
    </div>
    <div className='flex justify-evenly my-3'>
        <p className='text-black'>{ele?.price} EGP</p>
        <p className='text-black'> <i className='  fas fa-star text-yellow-500'></i> {ele?.ratingsAverage}</p>
    </div> </Link>
        

        <button onClick={()=>{addMutate(ele?._id)}} className='  btns bg-green-600 rounded text-white'>Add To Cart</button>
      
    </div>
  )
}
