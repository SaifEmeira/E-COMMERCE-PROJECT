/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import FeaturedProduct from './FeaturedProduct';
import { getCategory } from '../APIS/getCategory';
import { getProductWithCategory } from '../APIS/getProducts';

export default function Product() {


  let [categoryArr,setCategoryArr] = useState([])
    let [loading,setLoading] = useState(false);
    let [arr , setArr] = useState([]);
    let [ msg ,setMsg] = useState("")


    async function getCategoryApi() {
        setLoading(true);

        let data = await getCategory()
        if (data.data) 
        {
            setCategoryArr(data?.data);
            setLoading(false)
            setMsg('')
        }else
        {
            setLoading(false)
            setMsg(data)
        }
      }
      useEffect(()=>{
        getCategoryApi()
      },[])
     async function getData(id) {
      setLoading(true);
        let data = await getProductWithCategory(id);
        setArr(data?.data);
        
        
        
      } 




  return (

    <div className='flex flex-wrap'>
      <div className='w-[20%] py-28'>
        <ul className='text-center' >
        {categoryArr?.map(ele=><li onClick={()=>getData(ele?._id)} className='hover:border-b-2  w-[50%] border-green-700 text-green-700 py-2 cursor-pointer  ' key={ele?._id}>{ele?.name}</li>)}
        </ul>
      </div>
    <div className='overflow-hidden py-5 w-[80%] '>
      
      <FeaturedProduct arr={arr}></FeaturedProduct>
    </div>
    </div>
  )
}
