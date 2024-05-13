import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AddBlog from './Components/AddBlog/AddBlog.jsx';
import AllBlog from './Components/Allblog/AllBlog.jsx';
import FeaturedBlog from './Components/FeaturedBLog/FeaturedBlog.jsx';
import WishList from './Components/WishLilsh/WishList.jsx';
import Register from './Components/Register/Register.jsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';
import AuthProvider from './Components/provider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import Login from './Components/Login/Login.jsx';
import Error from './Components/Error/Error.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import Details from './Components/Allblog/Details.jsx';
import Update from './Components/Allblog/UpdateBlog/Update.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
         path:'/',
         element:<Home></Home>
      },
      {
        path:'/addBlog',
        element:<AddBlog></AddBlog>
      },
      {
        path:'/allBlogs',
        element:<AllBlog></AllBlog>,
        loader:()=>fetch('http://localhost:5000/blog')
      },
      {
        path:'/featuredBlogs',
        element:<FeaturedBlog></FeaturedBlog>
      },
      {
        path:'/wishlist',
        element:<PrivateRoute><WishList></WishList></PrivateRoute>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
       loader:()=>fetch('http://localhost:5000/blog')
      },
      {
        path:'/update/:id',
        element:<PrivateRoute></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/blog/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
   
    <RouterProvider router={router} />
   
    <ToastContainer></ToastContainer>
    </AuthProvider>
  </React.StrictMode>,
)
