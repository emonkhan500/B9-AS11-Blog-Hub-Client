import React from 'react';
import Newsletter from '../NewsLetter/Newsletter';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1>This is Home</h1>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;