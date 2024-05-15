import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import ShowWishList from "./ShowWishList";

const WishList = () => {

  
    useEffect(()=>{
        document.title='WishList'
    },[])
  

  const [wishBlog, setWishBlg] = useState([]);
//   console.log(wishBlog);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://b9-assignment-11-server-one.vercel.app/wishlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWishBlg(data);
      });
    // console.log('jfdhhf')
  }, [user]);
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-12">
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
