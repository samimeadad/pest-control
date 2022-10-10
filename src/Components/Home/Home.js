import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import HomeService from './HomeService';
import HomeTelephone from './HomeTelephone';
import ImageSlider from './ImageSlider';

const Home = () => {
    return (
        <div>
            <ImageSlider />
            <HomeService />
            <ScrollToTop smooth />
        </div>
    );
};

export default Home;