import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowAllBlog from "./ShowAllBlog";
import { AuthContext } from "../provider/AuthProvider";

const AllBlog = () => {
const{loading}=useContext(AuthContext)


  
    useEffect(()=>{
        document.title='ALL Blog'
    },[])

  
  const loadedBlogs = useLoaderData();
  const [searchValue, setSearchValue] = useState("");
  const [blogs, setBlogs] = useState(loadedBlogs);

  const handleSort = (sortCriteria) => {
    let filteredBlogs = [...loadedBlogs];

    if (sortCriteria === "Fashion") {
      filteredBlogs = loadedBlogs.filter((blog) => blog.category === "Fashion");
    } else if (sortCriteria === "Art") {
      filteredBlogs = loadedBlogs.filter((blog) => blog.category === "Art");
    } else if (sortCriteria === "Travel") {
      filteredBlogs = loadedBlogs.filter((blog) => blog.category === "Travel");
    }

    setBlogs(filteredBlogs);
  };

  const handleSearch = () => {
    const filteredBlogs = loadedBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setBlogs(filteredBlogs);
  };
  if(loading){
    return <div className='text-center'><span className="loading loading-bars loading-lg"></span></div>
  }

  return (
    <div className="mt-10  md:mt-20">
      <h1 className="text-2xl md:text-4xl text-center md:mb-6 font-bold text-green-500">
        All Blogs in Blog Hub
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-14">
        <div className="mt-5">
          <details className="dropdown">
            <summary className="m-1 px-6 py-2 md:py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold">
              Sort By Category
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={() => handleSort("Art")}>
                <a>Art</a>
              </li>
              <li onClick={() => handleSort("Travel")}>
                <a>Travel</a>
              </li>
              <li onClick={() => handleSort("Fashion")}>
                <a>Fashion</a>
              </li>
            </ul>
          </details>
        </div>
        <div>
          <input
            className="bg-gray-100 outline-none px-6 py-3 mt-5 rounded-s-lg "
            placeholder="Search here"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="  py-3 px-2 rounded-e-lg bg-gradient-to-r from-green-500 to-green-600 text-white" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-12 px-2 lg:px-6 ">
          {blogs.map((blog) => (
            <ShowAllBlog key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <p className="mt-5 text-center text-red-600">
          No blog found !
        </p>
      )}
    </div>
  );
};

export default AllBlog;
