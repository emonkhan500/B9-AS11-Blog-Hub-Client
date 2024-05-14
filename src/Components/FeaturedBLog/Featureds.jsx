import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react';
import DataTable from 'react-data-table-component';
import { AuthContext } from '../provider/AuthProvider';

const Featureds = () => {
    const {loading}=useContext(AuthContext)

    const{data:blogs}=useQuery({
        queryKey:['blogs'],
        queryFn: async ()=>{
            const res=await fetch('http://localhost:5000/blog');
        
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
    name: 'Owner Profile',
    selector: row => row.profile,
},
];

const data = sortedBlogs?.map((blog, index) => ({
serial: index + 1,
title: blog?.title,
owner: blog?.name,
profile: <img src={blog?.image} alt={blog.owner} style={{ width: '50px', borderRadius: '50%' }} />,
}));

if(loading){
    return  <div className='text-center'><span className="loading loading-bars loading-lg"></span></div>
} 
return (
<DataTable 
    columns={columns}
    data={data}
/>
);
};

export default Featureds;