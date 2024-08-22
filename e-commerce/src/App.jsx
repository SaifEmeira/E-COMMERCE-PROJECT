/* eslint-disable no-unused-vars */
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Product from './components/Product'
import Cart from './components/Cart'
import Categories from './components/Categories'
import Brand from './components/Brand'
import Notfound from './components/Notfound'
import ProtectedRoute from './components/ProtectedRoute'
import Forget from './components/Forget'
import ResetCode from './components/ResetCode'
import NewPassword from './components/NewPassword'
import ProductsDetails from './components/ProductsDetails'

export default function App() {


  let routes = createBrowserRouter([{
    path:'/',element:<Layout/>,children:[
      {index:true,element:<ProtectedRoute><Home/></ProtectedRoute> },
      {path:'/login',element:<Login/>},
      {path:'/register',element:<Register/>},
      {path:'/product',element:<ProtectedRoute><Product/></ProtectedRoute>},
      {path:'/productsdetails/:id/:categoryId',element:<ProtectedRoute><ProductsDetails/></ProtectedRoute>},
      
      {path:'/cart',element:<ProtectedRoute><Cart/></ProtectedRoute>},
      {path:'/brand',element:<ProtectedRoute><Brand/></ProtectedRoute>},
      {path:'/forget',element:<Forget/>},
      {path:'/newPassword',element:<NewPassword/>},

      {path:'/reset',element:<ResetCode/>},

      {path:'*',element:<ProtectedRoute><Notfound/></ProtectedRoute>},


      
    
    ]
  }])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}
