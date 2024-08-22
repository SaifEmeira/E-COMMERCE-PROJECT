/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import useMutationCart from '../HOOKS/useMutationCart';
import { cash, paymentOnline } from '../APIS/payment';
import { toast } from 'react-toastify';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function PaymentModal({cartId}) {

    

    let {mutate , data} = useMutationCart(paymentOnline)
    let {mutate:mutateCash, data:dataCash} = useMutationCart(cash)


    let [flag,setFlag] = React.useState(false)


    function hamdleSubmit(shippingAddress) 
    {
        if(flag){
        mutate({cartId,shippingAddress})
    }else{
        mutateCash({cartId,shippingAddress})
    } 

    console.log(dataCash);
    

        

        
        
    }
    if (data?.data?.status==='success') {
        window.location.href=data?.data?.session?.url;
        
    }

    if (dataCash?.data?.status==="success") {
        toast("ORDER CREATED SUCCESSFULLY")
        {dataCash?.numOfCartItems}
    }
console.log(dataCash?.numOfCartItems);

    let formik = useFormik({
        initialValues:{
            details:'',
            phone:'',
            city:''

        },
        onSubmit:hamdleSubmit
    })


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='flex justify-evenly py-5'>
            <Button sx={{
                backgroundColor: "#15803D", color: "white", ":hover": {
                    backgroundColor: "#15803D",
                },
            }} onClick={()=>{handleOpen();setFlag(!flag)}}>PAY ONLINE</Button>
            <Button sx={{
                backgroundColor: "#15803D", color: "white", ":hover": {
                    backgroundColor: "#15803D",
                },
            }} onClick={handleOpen}>PAY CASH</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>


                    <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="details" className="block mb-2 text-sm font-medium text-green-700">DETAILS</label>
                            <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.details} id="details" className="bg-green-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-white" placeholder="YOUR LOCATION DETAILS"  />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-green-700">PHONE</label>
                            <input type="tel" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} id="phone" className="bg-green-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-green-700">CITY</label>
                            <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.city} id="city" className="bg-green-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        
                        <button type="submit"  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>

                    </form>


                </Box>
            </Modal>
        </div>
    );
}
