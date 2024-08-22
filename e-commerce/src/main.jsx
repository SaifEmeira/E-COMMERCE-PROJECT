/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import './index.css'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'react-toastify/dist/ReactToastify.css';



import CounterContext from './Context/CounterContext.jsx'
import AuthContextProvider from './Context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <CounterContext>
    <AuthContextProvider>
      <ToastContainer theme="dark" position="top-center"
autoClose={3000}></ToastContainer>
    <ReactQueryDevtools initialIsOpen={false} />

    <App />
    </AuthContextProvider>
  </CounterContext>
  </QueryClientProvider>
  
    
 
,
)
