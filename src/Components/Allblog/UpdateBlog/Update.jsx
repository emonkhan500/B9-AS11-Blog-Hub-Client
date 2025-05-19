import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const blog =useLoaderData()
    const { id } = useParams();
    const{_id,image, title,category, description,longdescription}=blog
    console.log(blog)

const navigate=useNavigate()
const handleUpdate=e=>{
    e.preventDefault();
    const image = e.target.image.value;
    const title = e.target.title.value;
    const category = e.target.category.value;
    
    const description = e.target.description.value;
    const longdescription = e.target.longdescription.value;
    
    const blog = { image, title,category, description,longdescription};
    console.log(blog);
    
   
    

     // send data to server
     fetch(`https://b9-assignment-11-server-one.vercel.app/blog/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(blog)
    })
    .then(res =>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount){
            Swal.fire({
              title: 'Success!',
              text: 'blog updated successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
           navigate('/')
          }
    })
}

    return (
         
      


      

      <div className=" p-6 mt-11 md:p-12">
           <h2 className="text-3xl font-extrabold text-center mb-8 text-green-500">Update Your Blog</h2>
            <hr  className='w-72 mx-auto border-2 border-green-500'/>
            <form onSubmit={handleUpdate}>
                <div className="mb-8">
                    <label className="block mb-2">Image URL</label>
                    <input type="text"  defaultValue={image} name="image" placeholder="Image URL" className="input input-bordered w-full bg-gray-100" />
                </div>
                <div className="mb-8">
                    <label className="block mb-2">Title</label>
                    <input type="text"defaultValue={title} name="title" placeholder="Title" className="input input-bordered w-full bg-gray-100" />
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
                    <input type="text" defaultValue={description} name="description" placeholder="Short Description" className="input input-bordered w-full bg-gray-100" />
                </div>
                <div className="mb-8">
                    <label className="block mb-2">Long Description</label>
                    <input type="text" defaultValue={longdescription} name="longdescription" placeholder="Long Description" className="input input-bordered w-full bg-gray-100" />
                </div>
                <button type="submit" className="rounded w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 text-lg">Submit</button>
            </form>
        </div>
    
    
    );
};

export default Update;