import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-118px)] max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;