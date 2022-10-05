import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../images/banner/1.jpg'
import banner2 from '../../images/banner/2.jpg'
import banner3 from '../../images/banner/3.jpg'


const ImageSlider = () => {
    const [ index, setIndex ] = useState( 0 );

    const handleSelect = ( selectedIndex, e ) => {
        setIndex( selectedIndex );
    };

    return (
        <Row>
            <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                <div className='text-center'>
                    <h1>image</h1>
                </div>
            </Col>
            <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                <Carousel activeIndex={ index } onSelect={ handleSelect } className="text-center">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ banner1 }
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ banner2 }
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ banner3 }
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                <div className='text-center'>
                    <h1>Image</h1>
                </div>
            </Col>
        </Row>
    );
};

export default ImageSlider;