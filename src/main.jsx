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

import WishList from './Components/WishLilsh/WishList.jsx';
import Register from './Components/Register/Register.jsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';
import AuthProvider from './Components/provider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import Login from './Components/Login/Login.jsx';
import Error from './Components/Error/Error.jsx';

import Details from './Components/Allblog/Details.jsx';
import Update from './Components/Allblog/UpdateBlog/Update.jsx';
import Featureds from './Components/FeaturedBLog/Featureds.jsx';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

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
        loader:()=>fetch('https://b9-assignment-11-server-one.vercel.app/blog')
      },
      
      {
        path:'/featureds',
        element:<Featureds></Featureds>,
        
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
       loader:()=>fetch('https://b9-assignment-11-server-one.vercel.app/blog')
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params})=>fetch(`https://b9-assignment-11-server-one.vercel.app/blog/${params.id}`)

      }
    ]
  },
]);
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<QueryClientProvider client={queryClient}>
<AuthProvider>
   
   <RouterProvider fallbackElement={<div className='text-center '><span className="loading loading-bars loading-lg"></span></div>} router={router} />
  
   <ToastContainer></ToastContainer>
   </AuthProvider>
    </QueryClientProvider>

    
  </React.StrictMode>,
)
