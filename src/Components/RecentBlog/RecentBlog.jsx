import React, { useEffect, useState } from 'react';
import ShowRecentBlog from './ShowRecentBlog';

const RecentBlog = () => {
    const [blogs,setBlogs]=useState()
useEffect(()=>{
    fetch('http://localhost:5000/blog')
    .then(res=>res.json())
    .then(data=>setBlogs(data.slice(0,6      )))
},[])

    return (
        <div className='mt-20'>
<h1 className='text-center text-4xl font-bold mt-20  text-green-400'>These Are Recently Added BLog</h1>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-5">
                {
                    blogs?.map(blog=><ShowRecentBlog blog={blog}></ShowRecentBlog>)
                }
            </div>
        </div>
    );
};

export default RecentBlog;