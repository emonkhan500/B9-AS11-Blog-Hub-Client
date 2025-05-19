import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const Root = () => {
    return (
        <div className=''>
            <Nav></Nav>
            <div className='min-h-[60vh]'>
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;