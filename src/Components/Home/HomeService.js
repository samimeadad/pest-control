import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const HomeService = () => {
    return (
        <Container className='overflow-hidden'>
            <hr className='my-5 overflow-hidden' />
            <div className='my-5 text-center overflow-hidden'>
                <h2 className='fw-bold text-success'>Some Of The Pest Control Solutions We Can Offer You</h2>
            </div>
            <div className='my-5 text-center overflow-hidden'>
                <p className='text-center'>
                    Our professionals specialise in a range of pest control work, dedicated at eradicating your pest infestations and removing the pest problems on your property. We only source highly qualified and experienced pest controllers, who can deal with the following, and more...
                </p>
            </div>
            <hr className='my-5 overflow-hidden' />
            <div className='overflow-hidden'>
                <Row className='g-3'>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <Card className='me-3 text-center h-100'>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Wasps & Bees Nests</Card.Title>
                                <Card.Text>
                                    Wasps nests and bee hives cause a constant issue for homeowners during the long summer months. Our local team are adept at providing quick and effective treatment that eliminates these nests in a matter of hours. Our wasp removal and bee treatment ensures you are free from the risk of stings and able to enjoy your garden in peace once again!
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to='/service/wasp'><Button variant='success'>Details</Button></Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <Card className='me-3 text-center h-100'>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Rodents</Card.Title>
                                <Card.Text>
                                    Rats, mice and even squirrels can cause major disruption to your home or business. Causing unsanitary conditions and even fire hazards, rodents need to be addressed ASAP. Our local team stock a number of traps that can help to remove mice and rats from your property. So, if you think you are living alongside rodents, give us a call!
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to='/service/rodent'><Button variant='success'>Details</Button></Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <Card className='me-3 text-center h-100'>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Cockroaches</Card.Title>
                                <Card.Text>
                                    From eating your food to spreading disease, cockroaches are strongly linked to unsanitary connotations. This is not something you can just let slide on your property. Our pest control team can clear up the cockroach infestation efficiently, with no mess and no more hassle. Get your free quote from us today!
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to='/service/cockroach'><Button variant='success'>Details</Button></Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row className='g-3 my-5'>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <Card className='me-3 text-center h-100'>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Flies</Card.Title>
                                <Card.Text>
                                    When an infestation of flies breaks out at your home, it is never a pleasant experience. From bites, to destroying your food and more, they need to be dealt with fast. ERG are on hand 7 days a week with a local pest controller on hand to apply the lasting treatment to your property!
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to='/service/flies'><Button variant='success'>Details</Button></Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <Card className='me-3 text-center h-100'>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Bird Proofing</Card.Title>
                                <Card.Text>
                                    Birds can be a tremendous stress on homeowners and commercial properties across the UK. They contribute to noise pollution, mess and much more. The only true way of dealing with them is to use trusted bird proofing methods. Our pest controllers can install a variety of bird proofing equipment, keeping them from landing or nesting on your ledges, rooftops or windows.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to='/service/birdproofing'><Button variant='success'>Details</Button></Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <Card className='me-3 text-center h-100'>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Fleas</Card.Title>
                                <Card.Text>
                                    Once a flea infestation appears on your property, it can be a nightmare to deal with. Your high street flea bombs and other treatments are rarely effective. The only true way to deal with a flea infestation is to call in the professionals. We eliminate the fleas themselves, and their eggs, putting a stop to your flea problem for good!
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to='/service/fleas'><Button variant='success'>Details</Button></Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>
            <hr className='my-5 overflow-hidden' />
        </Container>
    );
};

export default HomeService;