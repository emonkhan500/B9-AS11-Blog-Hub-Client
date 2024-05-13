import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const blogs=useLoaderData()
    const {id}=useParams()
    console.log(typeof id)
    const selectedblog=blogs?.find((prop)=>prop._id===id)
const {
    image ,_id,time,title,category,
    description,
    longdescription}=selectedblog || {}
    return (
        <div>
            
        </div>
    );
};

export default Details;