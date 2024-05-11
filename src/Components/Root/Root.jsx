import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;