/* eslint-disable no-unused-vars */
import React from 'react'
import useQueryCart from '../HOOKS/useQueryCart'
import { clearCart, deleteCartItem, getCart, updateCartItem } from '../APIS/CartApi'
import Loading from './Loading'
import { useMutation } from '@tanstack/react-query';
import useMutationCart from '../HOOKS/useMutationCart';

import image from '../assets/11329060.png'
import PaymentModal from './PaymentModal';

export default function Cart() {



  let { data, isLoading, isError, error } = useQueryCart("getCart", getCart);

  let { mutate: deleteMutate, status ,isPending:delpending } = useMutationCart(deleteCartItem)
  let { mutate: updateMutate, status: updateStatus , isPending:uppending } = useMutationCart(updateCartItem)
  let { mutate: clearMutate, status: clearStatus, isPending:clrpending } = useMutationCart(clearCart)


  if (clearStatus === "success") {
    console.log("cleared");

  }



  if (status === 'success') {
    console.log("done");

  }

  if (status === 'error') {
    console.log("eroor");
  }


  console.log(data?.numOfCartItems);
  console.log(data?.data);



  if (isLoading||delpending||clrpending||uppending)
    return <Loading></Loading>

  if (isError)
    return <div className=' py-10 w-[30%] m-auto '>

<img src={image} className='w-full  ' alt="" />

</div>




  return (
    <>


      <div className='py-5 '>

        {data?.numOfCartItems ? <><div className='flex    w-full justify-evenly items-center'>

          <div className='flex flex-col justify-center items-center text-center '>

          <div>
            <button onClick={()=>clearMutate()} className='rounded-lg p-3 m-auto bg-rose-500 text-white '>CLEAR CART </button>
          </div>
            <h2 className='text-center     md:text-2xl  my-4'>CART ITEMS : <span className='text-green-700  font-bold text-center'>{data?.numOfCartItems}</span></h2>
            <h2 className='text-center   md:text-2xl my-4'>CART PRICE : <span className='text-green-700  font-bold text-center'>${data?.data?.totalCartPrice} EGP </span></h2>
            
          </div>
          


        </div> <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className=" md:w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 text-green-700 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 text-white py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 text-white py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 text-white py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 text-white py-3">
                    Action <i className='fas fa-trash text-red-600'></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.products.map((ele) => <><tr key={ele?.product?._id} className="bg-white border-b hover:bg-gray-50">
                  <td className=" ">
                    <img src={ele?.product?.imageCover} className="w-full md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                  </td>
                  <td className="px-6  py-4 font-semibold text-gray-900">
                    {ele?.product?.title}
                  </td>
                  <td className="px-6  py-4">
                    <div className="flex items-center">
                      <button onClick={() => {

                        {
                          ele?.count == 1 ? deleteMutate(ele?.product?._id) : updateMutate({
                            id: ele?.product?._id,

                            count: ele?.count ? ele?.count - 1 : ele?.count
                          })
                        }
                      }}


                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                        </svg>
                      </button>
                      <div>
                        <span>{ele?.count}</span>
                      </div>
                      <button onClick={() => { updateMutate({ id: ele?.product?._id, count:ele?.count==ele?.quantity?ele?.count : ele?.count + 1 }) }} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 w-1/6 py-4 font-semibold text-black dark:text-green">
                    ${ele?.price} EGP
                  </td>
                  <td className="px-6  py-4">
                    <button onClick={() => deleteMutate(ele?.product?._id)} className="font-medium p-[9px] rounded bg-gray-800 text-red-600 dark:text-red-500 ">Remove</button>
                  </td>
                </tr> </>)}

              </tbody>
            </table>
          </div></> :

<div className=' py-10 w-[30%] m-auto '>

<img src={image} className='w-full  ' alt="" />

</div>}




<PaymentModal cartId={data?.data?._id}></PaymentModal>





      </div>
    </>
  )
}
