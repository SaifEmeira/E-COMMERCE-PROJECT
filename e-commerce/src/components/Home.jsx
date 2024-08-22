/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import FeaturedProduct from './FeaturedProduct'
import Categories from './Categories';
import MainSlider from './MainSlider';

export default function Home() {

  
  return (
    <div>
      <MainSlider></MainSlider>
      <Categories></Categories>

   <FeaturedProduct></FeaturedProduct>
    </div>
  )
}
