import React from 'react';
import HomeService from './HomeService';
import HomeTelephone from './HomeTelephone';
import ImageSlider from './ImageSlider';

const Home = () => {
    return (
        <div>
            <ImageSlider />
            <HomeTelephone />
            <HomeService />
        </div>
    );
};

export default Home;