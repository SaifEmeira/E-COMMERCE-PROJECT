/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { getProduct } from '../APIS/getProducts'
import Loading from './Loading';
import Item from './Item';

export default function FeaturedProduct({arr}) {
    useEffect(()=>{
    console.log(arr);

    },[arr])
    
    let [productsArr,setProductsArr] = useState([])
    let [loading,setLoading] = useState(false);
    let [ msg ,setMsg] = useState("")


    async function getProductApi() {
        setLoading(true);

        let data = await getProduct()
        if (data.data) 
        {
            setProductsArr(data?.data);
            setLoading(false)
            setMsg('')
        }else
        {
            setLoading(false)
            setMsg(data)
        }


    }

    useEffect(() => {
        getProductApi()
    }, [])



if (loading) {
    return <Loading></Loading>
}
if (msg) {
    return <h2 className='text-red-700 my-5 font-bold'>{msg}</h2>
}


    return (
        <div className='flex flex-wrap overflow-hidden py-5 '>
            

            {arr?.length?arr.map(prod =><Item key={prod?._id} ele={prod}></Item>):productsArr.map(prod =><Item key={prod?._id} ele={prod}></Item>)}
            
            
        </div>
    )
}
