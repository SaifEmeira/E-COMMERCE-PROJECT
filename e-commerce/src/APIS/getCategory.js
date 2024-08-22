/* eslint-disable no-unused-vars */
import axios from "axios"

export  async  function getCategory() 
{
  try {
    let {data} = await  axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  return data
  } catch (error) {
    return error?.message
  }
  
}