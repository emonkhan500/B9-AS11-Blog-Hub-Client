import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { delay, motion } from "framer-motion"
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { AuthContext } from "../provider/AuthProvider";

const Nav = () => {


    const [theme, setTheme] = useState('light');

    useEffect(() =>{
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = e =>{
        if(e.target.checked){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
    // console.log(theme)

    const {user,logOut}=useContext(AuthContext)
// console.log(user)

const handleSignOut=()=>{
  logOut()
  .then()
  .catch(error=>{
    console.error(error)
  })
}


    const navLinks = <>
        <div className="flex flex-col lg:flex-row items-center justify-center">
            <li><NavLink to='/' className={ ({ isActive }) => isActive ? 'text-green-500 border  rounded-md border-green-600 text-xl' : 'text-xl'}>Home</NavLink></li>
            <li><NavLink to='/addBlog' className={({ isActive }) => isActive ? 'text-green-500 border  rounded-md border-green-600 text-xl' : 'text-xl'}>Add Blog</NavLink></li>
            <li><NavLink to='/allBlogs' className={({ isActive }) => isActive ? 'text-green-500 border  rounded-md border-green-600 text-xl' : 'text-xl'}>All blogs</NavLink></li>
            <li><NavLink to='/featureds' className={({ isActive }) => isActive ? 'text-green-500 border  rounded-md border-green-600 text-xl' : 'text-xl'}>Featured Blogs</NavLink></li>
            <li><NavLink to='/wishlist' className={({ isActive }) => isActive ? 'text-green-500 border  rounded-md border-green-600 text-xl' : 'text-xl'}>Wishlist</NavLink></li>
            
            
        </div>
    </>

    return (
        <motion.h1
        initial={{x:-2000}}
        animate={{x:0}}
        transition={{
            duration:'1',
            delay:'0'
        }}
        >
            <div className="navbar  md:px-16 lg:px-8 xl:px-40  mt-3 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link> 
                <img className="w-10 md:w-14 h-10 md:h-12" src="https://i.ibb.co/j9Ns7tr8/Chat-GPT-Image-May-18-2025-10-05-21-PM.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            <div data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName || 'No User'} className="hidden md:flex w-10 mr-2 rounded-full">
          <img  className="rounded-2xl" alt="" src={user?.photoURL  } />
        </div>
        {
          user?<>
          
<Link onClick={handleSignOut}> <button className="px-2 py-2 border rounded-lg text-white   font-semibold bg-gradient-to-r from-green-500 to-green-600">Sign Out</button></Link>
</> :
<div className="flex gap-[1px] md:gap-3">
<Link to='/login'> <button className="px-2 py-2 border rounded-lg text-white   font-semibold bg-gradient-to-r from-green-500 to-green-600">Login</button></Link>
<Link to='/register'> <button className="px-2 py-2 border rounded-lg text-white   font-semibold bg-gradient-to-r from-green-500 to-green-600">Register</button></Link>
</div>
        }

            </div>
            <div className="md:ml-4">
                <label className="cursor-pointer grid place-items-center ">
                    <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
        </motion.h1>
    );
};

export default Nav;