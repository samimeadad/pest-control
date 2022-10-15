import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import HomeService from './HomeService';
import ImageSlider from './ImageSlider';

const Home = () => {
    return (
        <div className='w-100 overflow-hidden'>
            <ImageSlider />
            <HomeService />
            <ScrollToTop smooth />
        </div>
    );
};

export default Home;