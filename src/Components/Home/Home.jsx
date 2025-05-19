import React, { useContext, useEffect } from 'react';
import Newsletter from '../NewsLetter/Newsletter';
import Banner from '../Banner/Banner';
import RecentBlog from '../RecentBlog/RecentBlog';

import { AuthContext } from '../provider/AuthProvider';
import Contact from '../Extra/Contact';
import Galary from '../Extra/Galary';

const Home = () => {
    const{loading}=useContext(AuthContext)
   
    useEffect(()=>{
        document.title='Home'
    },[])
    if(loading){
        return  <div className='text-center'><span className="loading loading-bars loading-lg"></span></div>
    }
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <Newsletter></Newsletter>
            <Galary></Galary>
            
        </div>
    );
};

export default Home;