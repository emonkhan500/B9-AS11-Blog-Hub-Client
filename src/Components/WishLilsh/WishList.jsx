import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import ShowWishList from "./ShowWishList";

const WishList = () => {

  
    useEffect(()=>{
        document.title='WishList'
    },[])
  

  const [wishBlog, setWishBlg] = useState([]);
//   console.log(wishBlog);
  const { user,loading } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://b9-assignment-11-server-one.vercel.app/wishlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWishBlg(data);
      });
    // console.log('jfdhhf')
  }, [user]);
  if(loading){
    return  <div className='text-center min-h-screen'><span className="loading loading-bars loading-lg"></span></div>
} 
  return (

    <div className="mt-8 lg:mt-20">
      <h1 className="text-2xl md:text-4xl text-center mb-2 md:mb-6 font-bold text-green-500">
        Your Wished Blog Is Here!
      </h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-12 px-2 lg:px-6">
        {
        wishBlog?.map((blog) => (
          <ShowWishList blog={blog}></ShowWishList>
        ))
        }
      </div>
    </div>
  );
};

export default WishList;
