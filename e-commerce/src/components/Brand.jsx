/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Loading from './Loading'

export default function Brand() {

  function getBrands() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  }


  let {isError,error,data,isLoading} = useQuery({queryKey:['brands'],queryFn:getBrands,

    select:(data)=>data?.data?.data
  })

  console.log(data?.data?.data);


  if (isLoading) {
    return <Loading></Loading>
  }

  if (isError) {
    return <h2 className='text-red-600 fa-2xl my-2'>{error}</h2>
  }
  


  return (
    <div className='flex flex-wrap justify-center'>
    {data?.map(ele=><div key={ele?._id} className='md:w-1/4'>
    
    <div className='p-3'>
      <img src={ele?.image} alt="" />
      <p className='text-green-700 text-center  font-bold fa-1x'>{ele?.name}</p>
    </div>
    
    </div>)}
    </div>
  )
}
