import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const blogs = useLoaderData();
  const { id } = useParams();
  console.log(typeof id);
  const selectedBlog = blogs.find((blog) => blog._id === id);
  const { image, _id, time, title, category, description, longdescription } =
    selectedBlog || {};

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
              Go Back
            </h2>
          </div>
        </div>
      </Link>

      <div className="my-10 md:w-[80%] mx-auto bg-gradient-to-br to-orange-300 via-yellow-200 from-yellow-300 px-1 md:px-3 py-10 md:py-16 rounded-2xl flex flex-col justify-center items-center md:gap-[10%]">
        <label className="md:w-[60%] w-[90%]">
          <img className="w-full rounded-md" src={image} alt={title} />
        </label>
        <h2 className="font-exo text-xl md:text-3xl font-semibold text-[#331a15] my-5">
          {" "}
          #{title}
        </h2>
        <div className="md:w-[90%] w-[95%] mx-auto">
          <div className="px-4 md:px-0 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="p-3 w-[40%] flex flex-col gap-3">
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="font-mplus space-y-1">
                  <h3 className="font-medium">
                    Category:{" "}
                    <span className="font-exo font-normal">{category}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-3 w-full flex flex-col gap-1">
            <p className="text-xl font-semibold">-- {description}</p>
          </div>
          <div className="p-6 md:p-3 w-full flex flex-col gap-1">
            <p className="text-sm">
              {" "}
              <span className="font-exo font-medium text-lg">
                {" "}
                Description :
              </span>
              {longdescription}
            </p>
          </div>
          
         <Link to={`/update/${id}`}> <button className="btn btn-warning">Update Blog</button></Link>
        </div>
        <div className="flex flex-col justify-end mt-7 mr-60 md:mr-80">
            <div>
            <label>
              
              <textarea className="py-2 px-5 justify-start" placeholder="Comment here" name="postContent" rows={3} cols={20} />
            </label>
            </div>
            <button className="btn btn-accent relative -mt-2">Comment</button>
          </div>
      </div>
    </div>
  );
};

export default Details;
