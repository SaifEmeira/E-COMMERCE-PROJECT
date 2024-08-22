/* eslint-disable no-unused-vars */
import React from 'react'
import error from '../assets/finalProject assets/error.svg'

export default function Notfound() {
  return (
    <div className='text-center py-11'>
      <h2>NOT FOUND </h2>
      <img src={error} className='w-50 m-auto' alt="" />
    </div>
  )
}
