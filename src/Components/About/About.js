import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container className='my-5'>
            <div className='my-5 text-center'>
                <h1>Learn More About Global Pest Control</h1>
            </div>
            <div className='my-5 text-start'>
                <p className='text-justify'>
                    We at Global Pest Control have years of experience in assisting with pest issues behind us, when it comes to offering amazing and reliable pest control services! We understand that the discovery of a pest infestation can be incredibly overwhelming and leave you feeling stressed and unsure where to turn. That's why we can offer a local and friendly pest control service to your area, whether at home or at work! We source the best pest controllers in the business and dispatch them to you from our head office in Essex at your time of need. We send pest control engineers who are fully qualified and highly regarded professionals, who know exactly what to do in any pest control situation, ensuring you are always left satisfied and able to continue your day, with one less thing to worry about!
                </p>
                <p className='text-justify'>
                    We are proud to be able to offer our amazing, local services around the clock! Our dedicated and helpful customer care team are on hand to answer your questions and advise at any time! We pride ourselves on our quick response service, and we even offer an emergency response service, giving you peace of mind!
                </p>
            </div>

            <div className='my-5 text-center'>
                <Row className='g-5'>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <Card className="mb-2 bg-light">
                            <Card.Header><h2 className='fw-bold'>WHAT</h2></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    We help thousands of households and businesses in London, as well as in the South East and the North West of the country each month to get rid of mice, rats, bed bugs, fleas, wasps and other health-hazardous pests. We offer all-in-one pest control solutions that include inspection, treatment, proofing and prevention against a wide variety of vermin infestations.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <Card className="mb-2 bg-light">
                            <Card.Header><h2 className='fw-bold'>WHY</h2></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    We deliver our pest control services effectively, with guaranteed results and with your and your property’s safety in mind.. Our pest control company ensures that all anti-pest treatments are executed in compliance with health and safety regulations. We employ proven methods, professional equipment and industry-grade products to meet both residential and commercial clients’ pest control needs.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <Card className="mb-2 bg-light">
                            <Card.Header><h2 className='fw-bold'>HOW</h2></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Fantastic Pest Control is part of the Fantastic Services brand, which means that we apply the same customer-service practices, high-quality standards and company’s principles of our service delivery process. Through innovative technology, modern online solutions and an all-round satisfaction approach, we make sure that customers and pest technicians alike have a Fantastic service experience as an end result
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container >
    );
};

export default About;