import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2'

const ShowAllBlog = ({blog}) => {
    const{user,loading}=useContext(AuthContext)
  
    const {
        image ,_id,time,title,category,
        description,
        longdescription}=blog
        const wishBlog={blogId:blog._id, userEmail:user?.email,...blog}
        delete wishBlog._id
        console.log(wishBlog)
const handleWish=()=>{
    fetch('https://b9-assignment-11-server-one.vercel.app/wishlist',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },

    body:JSON.stringify(wishBlog )
    })
    .then(res =>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Added To Wishlist',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
           
          }
    })
}
if(loading){
    return <div className='text-center'><span className="loading loading-bars loading-lg"></span></div>
}
    return (
        <div className="backdrop-blur-lg rounded-lg shadow-xl h-full">
            <div className="card h-full bg-white ">
                <figure className="rounded-t-xl">
                    <img src={image} alt="Shoes" className="w-full h-56 object-cover" />
                </figure>
                <div className="card-body relative items-center text-start bg-gradient-to-bl from-orange-100 via-yellow-100 to-yellow-400 backdrop-blur rounded-b-xl">
                    <p className="absolute font-mplus font-medium text-lg bg-green-400 p-2 rounded-md -top-5 right-5 text-white">{category}</p>
                    <h2 className="card-title text-start w-full">{title}</h2>
                    <p className=''>{description}</p>
                    <div className="card-actions w-full flex justify-between mt-6 items-center">
                        <Link to={`/details/${blog._id}`}><button className='btn btn-accent'>View Details</button></Link>
                        <button onClick={handleWish} className='btn btn-warning'>Add to Wishlist</button>
                    </div>
                    
                        
                    
                </div>
            </div>
        </div>
    );
};

export default ShowAllBlog;
