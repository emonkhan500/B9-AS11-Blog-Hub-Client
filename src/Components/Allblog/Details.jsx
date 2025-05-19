import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import ShowComment from "../ShowComment/ShowComment";

const Details = () => {
  const { user } = useContext(AuthContext);
  const [allComments, setAllComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  
  const userEmail=user.email
  const name=user.displayName
  const profile=user.photoURL

  const blogs = useLoaderData();
  const { id } = useParams();
  const selectedBlog = blogs.find((blog) => blog._id === id);
  const { image, _id, email, title, category, description, longdescription } = selectedBlog || {};

  //  all comments
  useEffect(() => {
    fetch("https://b9-assignment-11-server-one.vercel.app/comment")
      .then((res) => res.json())
      .then((data) => {
        setAllComments(data);
      });
  }, []);

  
  useEffect(() => {
    if (_id) {
      const filtered = allComments.filter(comment => comment.blogId === _id);
      setFilteredComments(filtered);
    }
  }, [allComments, _id]);

  const handleComment = (e) => {
    e.preventDefault();
    const commentValue = e.target.comment.value;

    const commentData = {
      userEmail,
      name,
      commentValue,
      blogId: _id,
      profile,
    };

    // Send data to server
    fetch("https://b9-assignment-11-server-one.vercel.app/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Thank you for Comment",
            icon: "success",
            confirmButtonText: "Cool",
          });
          setAllComments([...allComments, commentData]);
          e.target.reset()
        }
      });
  };

  return (
    <div className="bg-yellow-50 w-[95%] md:w-[85%] mx-auto my-10 px-1 md:px-10 py-4 rounded-xl">
      <Link to="/">
        <div className="my-10 text-[#331a15]">
          <div className="flex justify-start items-center gap-2 bg-yellow-200 max-w-[9rem] hover:cursor-pointer text-orange-800 rounded p-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="inline"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="square"
                strokeMiterlimit="10"
                strokeWidth="48"
                d="M244 400 100 256l144-144M120 256h292"
              ></path>
            </svg>
            <h2 className="font-exo pb-1 font-semibold text-xl inline">
              Home
            </h2>
          </div>
        </div>
      </Link>

      <div className="my-10  mx-auto bg-gradient-to-br to-orange-300 via-yellow-200 from-yellow-300 px-1 md:px-3 py-10 md:py-16 rounded-2xl flex flex-col justify-center items-center md:gap-[10%]">
        {image && <img className="w-full rounded-md" src={image} alt={title} />}
        <h2 className="font-exo text-xl md:text-3xl font-semibold text-[#331a15] my-5">#{title}</h2>
        <div className="md:w-[90%] w-[95%] mx-auto">
          <div className="px-4 md:px-0 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="p-3 w-[40%] flex flex-col gap-3">
              <div className="font-mplus space-y-1">
                <h3 className="font-medium">
                  Category: <span className="font-exo font-normal">{category}</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-3 w-full flex flex-col gap-1">
            <p className="text-xl font-semibold">-- {description}</p>
          </div>
          <div className="p-6 md:p-3 w-full flex flex-col gap-1">
            <p className="text-sm">
              <span className="font-exo font-medium text-lg">Description:</span>
              {longdescription}
            </p>
          </div>

          {userEmail === email && (
            <Link to={`/update/${id}`}>
              <button className="px-2 py-2 border rounded-lg text-white   font-semibold bg-gradient-to-r from-green-500 to-green-600">Update Blog</button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 ">
          {filteredComments.map((com) => (
            <ShowComment  com={com} />
          ))}
        </div>

        <div className="flex   mt-7 justify-center">
        {userEmail === email ? (
            <p className="text-red-600">You cannot comment on your own blog.</p>
          ) : (
            
         <form onSubmit={handleComment} className="pb-10 md:pb-20 w-full">
         <input  className="bg-gray-200   rounded-s-xl py-4 px-5 md:px-8"  placeholder="Comment Here"
        
              name="comment" required />
          <input className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 rounded-e-xl
               py-4" type="submit" id="id2" />
         </form>
       
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
