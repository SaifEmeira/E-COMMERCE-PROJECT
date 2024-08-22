/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import mainImg from '../assets/finalProject assets/images/slider-image-1.jpeg';
import secImg from '../assets/finalProject assets/images/slider-image-2.jpeg';
import thirdImg from '../assets/finalProject assets/images/slider-image-3.jpeg';
import Slider from 'react-slick';
import { getProduct } from '../APIS/getProducts';

export default function MainSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true
        
    
      };




      
       
        







  return (
    <div className='flex flex-wrap py-4 overflow-hidden'>

        <div className='w-2/3'>
        
        <Slider {...settings} >
        <img src={mainImg} className='w-full h-[400px] ' alt="" />
        <img src={mainImg} className='w-full h-[400px]' alt="" />
        <img src={mainImg} className='w-full h-[400px]' alt="" />
        </Slider>


        </div>
        <div className='w-1/3'>
        <img src={secImg} className='w-full h-[200px]' alt="" />

        <img src={thirdImg} className='w-full h-[200px]' alt="" />


        </div>
      
    </div>
  )
}
