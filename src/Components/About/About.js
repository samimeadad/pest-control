import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import about1 from '../../images/about/about-1.jpg'
import about2 from '../../images/about/about-2.jpg'
import about3 from '../../images/about/about-3.jpg'

const About = () => {
    return (
        <div>
            <Container className='my-5'>
                <div className='my-5 text-center'>
                    <h1 className='fw-bold'>Learn More About <span className='text-success'>Global Pest Control</span></h1>
                </div>
                <div className='my-5 text-start'>
                    <p className='text-justify'>
                        We at Global Pest Control have years of experience in assisting with pest issues behind us, when it comes to offering amazing and reliable pest control services! We understand that the discovery of a pest infestation can be incredibly overwhelming and leave you feeling stressed and unsure where to turn. That's why we can offer a local and friendly pest control service to your area, whether at home or at work! We source the best pest controllers in the business and dispatch them to you from our head office in Essex at your time of need. We send pest control engineers who are fully qualified and highly regarded professionals, who know exactly what to do in any pest control situation, ensuring you are always left satisfied and able to continue your day, with one less thing to worry about!
                    </p>
                    <p className='text-justify'>
                        We are proud to be able to offer our amazing, local services around the clock! Our dedicated and helpful customer care team are on hand to answer your questions and advise at any time! We pride ourselves on our quick response service, and we even offer an emergency response service, giving you peace of mind!
                    </p>
                </div>
                <Container className='my-5'>
                    <hr />
                </Container>

                <div className='my-5 text-center'>
                    <h1 className='text-center fw-bold my-5'>Our Purpose</h1>
                    <Row className='g-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                            <Card className="mb-2 bg-light h-100">
                                <Card.Header><h2 className='fw-bold'>WHAT</h2></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        We help thousands of households and businesses in London, as well as in the South East and the North West of the country each month to get rid of mice, rats, bed bugs, fleas, wasps and other health-hazardous pests. We offer all-in-one pest control solutions that include inspection, treatment, proofing and prevention against a wide variety of vermin infestations.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                            <Card className="mb-2 bg-light h-100">
                                <Card.Header><h2 className='fw-bold'>WHY</h2></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        We deliver our pest control services effectively, with guaranteed results and with your and your property’s safety in mind.. Our pest control company ensures that all anti-pest treatments are executed in compliance with health and safety regulations. We employ proven methods, professional equipment and industry-grade products to meet both residential and commercial clients’ pest control needs.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                            <Card className="mb-2 bg-light h-100">
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
            <Container className='my-5'>
                <hr />
            </Container>
            <Container className='my-5 text-center'>
                <h1 className='my-5 fw-bold'>Our Strengths</h1>
                <Row>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <h2 className='text-end mt-5 text-success fw-bold'>The Soldiers</h2>
                        <h4 className='text-end'>
                            We work with experts, who operate under the Fantastic Pest Control brand through our franchise business model. They have a solid background in the pest control field and are fully certified and insured, in order to provide a high-quality service. The exterminators are trained and equipped to inspect, treat and proof residential properties and commercial buildings against various types of pests. The teams are on call even when you need a discreet assistance urgently and without delay.
                        </h4>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 8 } lg={ 8 }>
                        <img className="img-fluid" src={ about1 } alt="errorPageImage" />
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col xs={ 12 } sm={ 12 } md={ 8 } lg={ 8 }>
                        <img className="img-fluid" src={ about2 } alt="errorPageImage" />
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <h2 className='text-start mt-5 text-success fw-bold'>Behind The Scenes</h2>
                        <h4 className='text-start'>
                            In order to achieve the best possible job results, as well as your utmost satisfaction, we count on our amazing IT experts, service development team, quality control specialists and many more professionals. Furthermore, we strive to deliver outstanding customer care and support by evaluating each individual case accurately and thus, meet the customer’s needs and express requirements.
                        </h4>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <h2 className='text-end mt-5 text-success fw-bold'>The Technology</h2>
                        <h4 className='text-end'>
                            Pests are the most irritating species in the world which are the disturbances to effective human living. The pests have been controlled for more than decades and centuries, but still, we cannot eliminate them from this world. It is not possible to destroy any species completely, but you can control the presence of insects for a period of time. Though technology is improving with the growth of the world, the pests are involving more. It is possible to defend the presence of pests with a number of methods. Though there are many physical, chemical, and biological methods, it is difficult to kill the total species, and here in Global Pest Control we use the latest innovations in pest control technology.
                        </h4>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 8 } lg={ 8 }>
                        <img className="img-fluid" src={ about3 } alt="errorPageImage" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;