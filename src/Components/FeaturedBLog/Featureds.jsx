import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react';
import DataTable from 'react-data-table-component';
import { AuthContext } from '../provider/AuthProvider';

const Featureds = () => {
    const {loading}=useContext(AuthContext)
    const {user}=useContext(AuthContext)

    const{data:blogs}=useQuery({
        queryKey:['blogs'],
        queryFn: async ()=>{
            const res=await fetch('https://b9-assignment-11-server-one.vercel.app/blog');
        
           return res.json()
        }
    })
console.log(blogs)
const sortedBlogs = blogs?.sort((a, b) => b.longdescription.length - a.longdescription.length)?.slice(0, 10);

const columns = [
{
    name: 'Serial',
    selector: row => row.serial,
    sortable: true,
},
{
    name: 'Title',
    selector: row => row.title,
    sortable: true,
},
{
    name: 'Owner',
    selector: row => row.owner,
    sortable: true,
},
{
    name: 'Blog Image',
    selector: row => row.profile,
},
];

const data = sortedBlogs?.map((blog, index) => ({
    
serial: index + 1,
title: blog?.title,
owner: blog?.name,
profile: <img className='my-2' src={blog?.image} alt={blog.owner} style={{ width: '100px', borderRadius: '50%' }} />,
}));

if(loading){
    return  <div className='text-center'><span className="loading loading-bars loading-lg"></span></div>
} 
return (
<DataTable 
 className='px-52 text-lg'
    columns={columns}
    data={data}
/>
);
};

export default Featureds;