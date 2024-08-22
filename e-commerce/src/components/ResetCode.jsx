/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */

import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { auth } from '../Context/AuthContext';

export default function ResetCode() {


    let navigate = useNavigate();

    let [loading, setLoading] = useState(false);
    let [msg, setMsg] = useState('')


    function handleResetCode(values) {


        setLoading(true)
        axios.post('https://ecommerce.routemisr.com/api/v1/auth/VerifyResetCode', values).
            then(({ data }) => {
                console.log(data);
                if (data.status === "Success") {
                    setLoading(false)

                    navigate('/newPassword')
                }


            })
            .catch((err) => {
                setMsg(err?.response?.data?.message);
                setLoading(false)

            })

        //   catch((err) => {


        //   })
    }








    let formik = useFormik({
        initialValues: {

            resetCode: '',

        },


        onSubmit: handleResetCode
    })


    return (
        <div>
            <h2>RESET PASSWORD CODE:</h2>

            {msg ? <div className=" w-1/2 m-auto flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium">{msg}</span>
                </div>
            </div> : ""}

            <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>

                <div className="relative z-0 w-full mb-5 group">
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.resetCode} type="text" id="resetCode" className="block py-2.5 px-0 w-full text-sm text-black border-b-2 bg-transparent border-t-0 border-r-0 border-l-0  border-gray-300 np dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RESET CODE</label>
                </div>



                {/* alert */}
                {formik.errors.resetCode && formik.touched.resetCode ? <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">{formik.errors.resetCode}</span>
                    </div>
                </div> : ""}










                <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    {loading ? <i className='fas fa-spin fa-spinner text-white fa-1x'></i> : "Submit Code"}
                </button>
            </form>




        </div>
    )
}