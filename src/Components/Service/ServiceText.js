import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ServiceText = () => {
    return (
        <Container className='overflow-hidden mb-5 text-center'>
            <div className='my-5'>
                <h2 className='text-success'>We use an Integrated Pest Management (IPM) approach</h2>
                <p className='my-5 fs-5'>
                    During our visit we complete a thorough inspection of your premises.  Our technician will compile a service plan on the requirements of your business. Your technician will carry out regular visits to check bait stations, identify any signs of pest activity or potential risks and advise on prevention methods. We fully comply with health and safety standards and meet the high expectations that businesses require.
                </p>
            </div>
            <Row className='g-5 mb-5'>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <div className='text-center mt-2'>
                        <h2 className='text-start text-bold mb-3 text-success'>We Offer Services For</h2>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Emergency call outs (24 hours a day, 7 days per week, all year round)</h6>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Cockroaches</h6>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Mice</h6>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Rats</h6>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Rodents</h6>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Wasps & Bees</h6>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <div className='text-center mt-2'>
                        <h2 className='text-start text-bold mb-3 text-success'>Crawling Insects</h2>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Bedbugs</h6>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Fleas</h6>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Spiders</h6>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Ants</h6>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Silverfish</h6>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Woodworm</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceText; <h1>this is texts for service page</h1>