import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAllBlog from './ShowAllBlog';

const AllBlog = () => {
    const loadedBlogs = useLoaderData();
    const [blogs, setBlogs] = useState(loadedBlogs);

    const handleSort = (sortCriteria) => {
        let filteredBlogs = [...loadedBlogs];

        if (sortCriteria === "Fashion") {
            filteredBlogs = loadedBlogs.filter(blog => blog.category === "Fashion");
        } else if (sortCriteria === "Art") {
            filteredBlogs = loadedBlogs.filter(blog => blog.category === "Art");
        } else if (sortCriteria === "Travel") {
            filteredBlogs = loadedBlogs.filter(blog => blog.category === "Travel");
        }

        setBlogs(filteredBlogs);
    };

    return (
        <div>
            <h1 className="text-4xl mb-6 font-bold text-gray-500">All Tourist Spot in Asia</h1>
            <div className='flex items-center justify-center gap-14'>
            <div className=''>
                <details className="dropdown">
                    <summary className="m-1 px-6 py-3 rounded-lg bg-[#23BE0A] hover:bg-[#23BE0Aac] active:scale-95 text-white text-lg font-semibold">Sort By Category</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSort("Art")}><a>Art</a></li>
                        <li onClick={() => handleSort("Travel")}><a>Travel</a></li>
                        <li onClick={() => handleSort("Fashion")}><a>Fashion</a></li>
                    </ul>
                </details>
            </div>
                <div>
<input className='border-2 px-6 py-3 rounded-lg border-red-800'placeholder='Search here' type="text" />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-12">
                {
                    blogs.map(blog => <ShowAllBlog key={blog.id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default AllBlog;
