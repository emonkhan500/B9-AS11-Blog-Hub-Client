import React from 'react';
import Newsletter from '../NewsLetter/Newsletter';
import Banner from '../Banner/Banner';
import RecentBlog from '../RecentBlog/RecentBlog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;