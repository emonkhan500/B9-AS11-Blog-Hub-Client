import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const AddBlog = () => {
    useEffect(()=>{
        document.title='Add Blog'
    },[])

    const{user,loading}=useContext(AuthContext) 

    

const navigate=useNavigate()
const email =user?.email
const name= user?.displayName

const handleAddBlog = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const title = e.target.title.value;
    const category = e.target.category.value;
    const time = new Date()
    const description = e.target.description.value;
    const longdescription = e.target.longdescription.value;
    
    const blog = {name,email, image,time, title,category, description,longdescription};
    console.log(blog);

    // send data to server
    fetch('https://b9-assignment-11-server-one.vercel.app/blog',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(blog)
    })
    .then(res =>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Blog added successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
           navigate('/')
          }
    })
    
  };
  if(loading){
    return  <div className='text-center'><span className="loading loading-bars loading-lg"></span></div>
} 


    return (
        <div className=" p-6 mt-11 md:p-12">
            <h2 className="text-3xl font-extrabold text-center mb-8 text-green-500">Add a Blog</h2>
            <hr  className='w-72 mx-auto border-2 border-green-500'/>
            <form onSubmit={handleAddBlog}>
                <div className="mb-8">
                    <label className="block mb-2">Image URL</label>
                    <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full bg-gray-100" />
                </div>
                <div className="mb-8">
                    <label className="block mb-2">Title</label>
                    <input type="text" name="title" placeholder="Title" className="input input-bordered w-full bg-gray-100" />
                </div>
                <div className="mb-8">
                    <label className="block mb-2">Category</label>
                    <select name="category" className="input input-bordered w-full bg-gray-100">
                        
                        <option value="Fashion">Fashion</option>
                        <option value="Travel">Travel</option>
                        <option value="Art">Art</option>
                       
                    </select>
                </div>
                <div className="mb-8">
                    <label className="block mb-2">Short Description</label>
                    <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                </div>
                <div className="mb-8">
                    <label className="block mb-2">Long Description</label>
                    <input type="text" name="longdescription" placeholder="Long Description" className="input input-bordered w-full bg-gray-100" />
                </div>
                <button type="submit" className="rounded w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 text-lg">Submit</button>
            </form>
        </div>
    );
};

export default AddBlog;
