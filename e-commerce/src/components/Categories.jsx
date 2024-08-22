/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { getCategory } from '../APIS/getCategory';
import Slider from "react-slick";

export default function Categories() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    autoplay:true,
    autoplaySpeed:1500,

  };



  let [categoryArr,setCategoryArr] = useState([])
    let [loading,setLoading] = useState(false);
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
    useEffect(()=>{
      console.log(categoryArr);
      
    },[categoryArr])

  return (
    <div className='py-3 overflow-hidden' >
      <Slider {...settings}>
        {categoryArr?.map(ele=><img className='h-[150px]' style={{objectFit:'cover'}} key={ele?._id} src={ele?.image}></img>)}
      </Slider>
    </div>
  )
}
