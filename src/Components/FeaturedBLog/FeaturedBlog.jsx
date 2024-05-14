import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useLoaderData } from 'react-router-dom';

const FeaturedBlog = () => {
    const loadedBlogs = useLoaderData();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        if (loadedBlogs) {
           
            const sortedBlogs = [...loadedBlogs].sort((a, b) => b.longdescription.length - a.longdescription.length);
      
            const topBlogs = sortedBlogs.slice(0, 10);
            setBlogs(topBlogs);
        }
    }, [loadedBlogs]);

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

    const data = blogs.map((blog, index) => ({
        serial: index + 1,
        title: blog.title,
        owner: blog.name,
        profile: <img src={blog.image} alt={blog.owner} style={{ width: '50px', borderRadius: '50%' }} />,
    }));

    return (
        <DataTable 
            columns={columns}
            data={data}
        />
    );
};

export default FeaturedBlog;
