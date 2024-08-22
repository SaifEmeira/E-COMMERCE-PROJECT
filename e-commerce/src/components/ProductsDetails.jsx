/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import { getSpecificProduct } from '../APIS/getSpecificproduct';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { getProductWithCategory } from '../APIS/getProducts';
import Item from './Item';
import { toast } from 'react-toastify';
import useMutationCart from '../HOOKS/useMutationCart';
import { addToCart } from '../APIS/CartApi';

export default function ProductsDetails() {
    

    let {mutate:addMutate , status , data} = useMutationCart(addToCart);

    if (status==='success') {
     toast.success(data?.data?.message);
      
    }
     






    let [imgSrc , setimgSrc]=useState('')

    let { id , categoryId } = useParams()


    let [product, setProduct] = useState([])
    let [relatedProduct,setRelatedProduct] = useState([])
    let [loading, setLoading] = useState(false);
    let [msg, setMsg] = useState("")

    function changeSrc(e) {

        setimgSrc(e.target.src)
        
    }


    async function getspecificProductApi() {




        // setLoading(true);

        let data = await getSpecificProduct(id)

        if (data?.data) {
            setProduct(data?.data);
            setLoading(false)
            setMsg('')
        } else {
            setLoading(false)
            setMsg(data)
        }



    }









    async function getspecificProductCategory() {




        setLoading(true);

        let data = await getProductWithCategory(categoryId)

        if (data?.data) {
            setRelatedProduct(data?.data);
            setLoading(false)
            setMsg('')
        } else {
            setLoading(false)
            setMsg(data)
        }



    }











    useEffect(() => {

        getspecificProductCategory()
    }, [])

    useEffect(() => {
        setimgSrc('')
        setLoading(true)
        getspecificProductApi()

    }, [id])


    



    if (loading) {
        return <Loading></Loading>
    }
    if (msg) {
        return <h2 className='text-red-700 my-5 font-bold'>{msg}</h2>
    }
    return (
    

        <>
    
    <div className= ' py-4 overflow-hidden     flex flex-wrap justify-center items-center text-center' >
       <div className='md:w-1/3 gap-10 md:gap-0'>
            <img src={ imgSrc?imgSrc: product?.imageCover} className='w-full' alt="" />
            <ul className='  flex justify-center my-3 gap-2'>
                {product?.images?.map(img=><li onClick={changeSrc} key={img}><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} src={img} className=" mx-2 w-24 cursor-pointer" alt="" /></li>)}
            </ul>
        </div>


        <div className="md:w-2/3">
        <p className='text-green-700'>{product?.category?.name}</p>
        <p className=' text-black line-clamp-1'>{product?.title}</p>
        <p className='font-thin'>{product?.description}</p>
        <div className='flex justify-evenly my-3'>
        <p className='text-black'>{product?.price} EGP</p>
        <p className='text-black'> <i className='  fas fa-star text-yellow-500'></i> {product?.ratingsAverage}</p>
    </div> 
        

        <button onClick={()=>{addMutate(product?._id)}} className=' w-[70%]  btns bg-green-600 rounded text-white'>Add To Cart</button>
        </div>


        </div >
            <h2 className='text-2xl py-2 text-green-700 '>Related Products</h2>
        <div className=' py-5 flex flex-wrap overflow-hidden'>
        {relatedProduct?.map(ele=><Item ele={ele} key={ele._id}></Item>)}

        </div>
        </>
    )
}
