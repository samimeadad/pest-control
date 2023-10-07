import React, { useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import HomeService from './HomeService';
import ImageSlider from './ImageSlider';
import HomeAbout from './HomeAbout';
import HomeOffer from './HomeOffer';

const Home = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div className='w-100 overflow-hidden'>
            <ImageSlider />
            <HomeAbout />
            <HomeOffer />
            <HomeService />
            <ScrollToTop smooth />
        </div>
    );
};

export default Home;