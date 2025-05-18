import React, { useEffect, useState } from 'react';
import ShowRecentBlog from './ShowRecentBlog';

const RecentBlog = () => {
    const [blogs,setBlogs]=useState()
useEffect(()=>{
    fetch('https://b9-assignment-11-server-one.vercel.app/blog')
    .then(res=>res.json())
    .then(data=>setBlogs(data.slice(0,6      )))
},[])                                 

    return (
        <div className=''>
<h1 className='text-center text-xl md:text-3xl lg:text-4xl font-bold mt-12  text-green-500'>These Are Recently Added BLog</h1>
<hr  className='w-72 mx-auto mt-2 border-2 border-green-500'/>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  mt-2 md:px-8 lg:px-28">
                {
                    blogs?.map(blog=><ShowRecentBlog blog={blog}></ShowRecentBlog>)
                }
            </div>
        </div>
    );
};

export default RecentBlog;