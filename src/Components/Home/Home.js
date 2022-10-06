import React from 'react';
import HomeService from './HomeService';
import HomeTelephone from './HomeTelephone';
import ImageSlider from './ImageSlider';

const Home = () => {
    return (
        <div>
            <ImageSlider />
            <HomeService />
        </div>
    );
};

export default Home;