import React, { useContext, useEffect } from 'react';
import Newsletter from '../NewsLetter/Newsletter';
import Banner from '../Banner/Banner';
import RecentBlog from '../RecentBlog/RecentBlog';

import { AuthContext } from '../provider/AuthProvider';
import Contact from '../Extra/Contact';

const Home = () => {
    const{loading}=useContext(AuthContext)
    if(loading){
        return  <div className='text-center'><span className="loading loading-bars loading-lg"></span></div>
    }
    useEffect(()=>{
        document.title='Home'
    },[])
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <Newsletter></Newsletter>
            <Contact></Contact>
        </div>
    );
};

export default Home;