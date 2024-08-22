
import axios from "axios"

// eslint-disable-next-line no-unused-vars
let baseUrl='https://ecommerce.routemisr.com/api/v1';

let token = localStorage.getItem('userToken')

export function addToCart(productId) 
{
      return  axios.post(`${baseUrl}/cart`,{productId},{headers:{
            token
        }})
}


export function getCart() 
{
   return axios.get(`${baseUrl}/cart`,{headers:{
        token
    }})
}


//delete cart item


export function deleteCartItem(id) 
{
   return axios.delete(`${baseUrl}/cart/${id}`,{headers:{
        token
    }})
}



//update cart item


export function updateCartItem({id,count}) 
{
   return axios.put(`${baseUrl}/cart/${id}`,{count},{headers:{
        token
    }})
}




// CLEAR CART



export function clearCart() 
{
   return axios.delete(`${baseUrl}/cart`,
    {headers:{
        token
    }})
}
