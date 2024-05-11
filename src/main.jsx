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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/addBlog',
        element:<AddBlog></AddBlog>
      },
      {
        path:'/allBlogs',
        element:<AllBlog></AllBlog>
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
