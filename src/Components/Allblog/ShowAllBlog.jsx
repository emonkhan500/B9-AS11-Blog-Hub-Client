import React from 'react';

const ShowAllBlog = ({blog}) => {
    const {
        image ,_id,time,title,category,
        description,
        longdescription}=blog
    return (
        <div className="backdrop-blur-lg rounded-lg shadow-xl">
            <div className="card w-96 bg-white">
                <figure className="rounded-t-xl">
                    <img src={image} alt="Shoes" className="w-full h-56 object-cover" />
                </figure>
                <div className="card-body relative items-center text-start bg-gradient-to-bl from-orange-100 via-yellow-100 to-yellow-400 backdrop-blur rounded-b-xl">
                    <p className="absolute font-mplus font-medium text-lg bg-green-400 p-2 rounded-md -top-5 right-5 text-white">{category}</p>
                    <h2 className="card-title text-start w-full">{title}</h2>
                    <p className=''>{description}</p>
                    <div className="card-actions w-full flex justify-between mt-6 items-center">
                        <button className='btn btn-accent'>View Details</button>
                        <button className='btn btn-warning'>Add to Wishlist</button>
                    </div>
                    
                        
                    
                </div>
            </div>
        </div>
    );
};

export default ShowAllBlog;
