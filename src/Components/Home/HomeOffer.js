import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bestOffer from '../../images/offer/best-offer.jpg';
import serviceBackground from '../../images/background/service-bg.jpg';

const HomeOffer = () => {
    return (
        <div className='w-100 overflow-hidden p-5' style={ { backgroundImage: `url(${ serviceBackground })`, backgroundSize: "cover", overflow: 'hidden' } }>
            <Container className='text-center overflow-hidden my-5'>
                <Row className='g-5 mb-5'>
                    <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                        <div className='text-center mt-2'>
                            <h2 className='text-start text-bold mb-3 text-success'>We Offer</h2>
                            <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Yearly contracts</h6>
                            <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Fast friendly approach</h6>
                            <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Discrete Services</h6>
                            <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; £10 million liability insurance</h6>
                            <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Humane eradication of pests</h6>
                            <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Competitive pricing – we will beat any competitor on price for a like for like service</h6>
                            <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Regular visits and courtesy calls</h6>
                        </div>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                        <img className="img-fluid w-75" src={ bestOffer } alt="bestoffer" />
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default HomeOffer;