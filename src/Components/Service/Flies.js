import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Row } from 'react-bootstrap';
import fly1 from '../../images/service/main/fly1.jpg';
import fly2 from '../../images/service/main/fly2.jpg';
import fly3 from '../../images/service/main/fly3.jpg';
import fly4 from '../../images/service/main/fly4.jpg';
import fly5 from '../../images/service/main/fly5.jpg';
import fly6 from '../../images/service/main/fly6.jpg';
import fly7 from '../../images/service/main/fly7.jpg';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const Flies = () => {
    return (
        <div className='w-100 overflow-hidden'>
            <Container className='text-center overflow-hidden'>
                <div className='my-5 overflow-hidden text-success'>
                    <h1 className='mb-3'>Fly Removal Service in the UK</h1>
                    <h3>Our Technicians are based throughout the country and aim to be with you within 4 hours of your call.</h3>
                </div>
                <div className='my-5 overflow-hidden'>
                    <Row className='g-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                            <img src={ fly1 } alt="fly1" className='img-fluid' />
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                            <p className='text-start my-2'>
                                Flies are becoming far more common within more urban areas; attending call-outs to exterminate flies throughout the UK is now routine for Global Pest Control Technicians. flies are a nuisance and health risk in various industrial and domestic settings throughout the UK.
                            </p>
                            <p className='text-start my-4'>
                                There are many different varieties of flies found in the UK, but they all share one thing in common – their ability to spread disease. House Flies and blow Flies are the most common Flies in the UK. Although Fruit Flies are a particular nuisance in commercial kitchens and anywhere that food is prepared, sold, or stored.
                            </p>
                            <p className='text-start my-4'>
                                Global Pest Control understands that flies can be a real pest. If you require fly control and are located in London, contact us today.
                            </p>
                            <p className='text-start mt-5'>
                                <Button variant='danger' className='p-3'><h4><FontAwesomeIcon className="text-light" icon={ faPhoneVolume } /> <a className="text-decoration-none text-light fw-bold" href="tel: +4407728957714"> : 077 2895 7714</a></h4></Button>
                            </p>
                        </Col>
                    </Row>
                </div>
                <div className='my-5 overflow-hidden'>
                    <Row className='g-5 my-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                            <h3 className='text-start mt-2 mb-2'>How Flies Can Be A Danger To Health</h3>
                            <p className='text-start'>
                                Flies are a health risk. They are attracted to decaying organic matter. Flies eat by regurgitating digestive juices onto the food source thus liquefying it, then sucking it up, taking with it any bacteria present. As they fly from rotting meat or animal droppings, then onto food for human consumption, they carry bacteria with them. They then go onto spreading disease wither from further regurgitation or in their faeces (known as fly-spotting). As well as carrying gastroenteritis, dysentery, typhoid, cholera, and tuberculosis, they can bring with them intestinal worms and their eggs.
                            </p>
                            <h3 className='text-start'>Commercial Damage Caused By Pest Flies</h3>
                            <p className='text-start'>
                                A fly infestation in your business premises may cause:
                                <ul>
                                    <li className='my-4'>
                                        <p className='text-start text-dark my-3'>Damage to your reputation as flies give the impression of poor hygiene and dirt.</p>
                                    </li>
                                    <li className='my-4'>
                                        <p className='text-start text-dark my-3'>Damage to foodstuffs and reduced income from potential customers costing your business profit.</p>
                                    </li>
                                    <li className='my-4'>
                                        <p className='text-start text-dark my-3'>Disease transmission, as they are highly mobile their range for transmission is wide.</p>
                                    </li>
                                    <li className='my-4'>
                                        <p className='text-start text-dark my-3'>Many flies bite whilst spreading diseases which at the least can cause discomfort.</p>
                                    </li>
                                    <li className='my-4'>
                                        <p className='text-start text-dark my-3'>Food legislation may be used where flies are seen to be infesting food premises and this can lead to legal issues.</p>
                                    </li>
                                </ul>
                            </p>

                            <p className='text-start text-danger ms-3'>
                                <h4>Call Global Pest Control services today on 07728 957 714 if you have a fly1 infestation.</h4>
                            </p>
                            <p className='text-start text-danger my-5 ms-3'>
                                <Button variant='danger' className='p-3'><h4><FontAwesomeIcon className="text-light" icon={ faPhoneVolume } /> <a className="text-decoration-none text-light fw-bold" href="tel: +4407728957714"> : 077 2895 7714</a></h4></Button>
                            </p>
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                            <img src={ fly3 } alt="fly1" className='img-fluid mb-2' />
                            <img src={ fly4 } alt="fly1" className='img-fluid' />
                        </Col>
                    </Row>
                </div>
                <div className='my-5 overflow-hidden'>
                    <h2 className='my-5 text-start'>Fly Control For Restaurants and Businesses</h2>
                    <Row className='g-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                            <img src={ fly6 } alt="fly1" className='img-fluid mb-2' />
                            <img src={ fly7 } alt="fly1" className='img-fluid' />
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                            <p className='text-start mb-5 mt-3'>
                                For Restaurants and Businesses that prepare food, fly screens and Electric Insect Killers are often the best methods of keeping Flies at bay. Despite this, these preventions need to be positioned accurately to ensure their effectiveness. Our fully trained staff can recommend the most appropriate proofing and preventive measures to avoid further infestations. We can also carry these out for you as part of our service.
                            </p>
                            <p className='text-start'>
                                Flying Insect Control measures include:
                                <ul>
                                    <li className='my-2'>
                                        <p className='text-start text-dark my-3'>Removal of breeding sites.</p>
                                    </li>
                                    <li className='my-2'>
                                        <p className='text-start text-dark my-3'>Installation of fly screens.</p>
                                    </li>
                                    <li className='my-2'>
                                        <p className='text-start text-dark my-3'>Install Electric Fly Killer machines.</p>
                                    </li>
                                    <li className='my-2'>
                                        <p className='text-start text-dark my-3'>Installation of insect proofing products.</p>
                                    </li>
                                </ul>
                            </p>
                            <p className='text-start my-5'>
                                Global Pest Control provide a variety of products to eradicate flies from your commercial premises.
                            </p>
                            <p className='text-start text-danger'>
                                <h3>Call Global Pest Control Service 07728 957 714 to learn more about our fly1 pest control services.</h3>
                            </p>
                            <p className='text-start text-danger'>
                                <Link to="/contact" className='text-decoration-none text-light'><Button variant='success' className='p-4 my-3'><h4>Get Quote</h4></Button></Link>
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className='w-100 overflow-hidden text-center bg-success text-light my-5'>
                <h2 className='mt-5'>Have your fly problems removed forever</h2>
                <h2>Call us today for a free quote and to arrange an appointment</h2>
                <Button variant='light' className='p-3 my-5'><h4><FontAwesomeIcon className="text-danger" icon={ faPhoneVolume } /> <a className="text-decoration-none text-danger fw-bold" href="tel: +4407728957714"> : 07728957714</a></h4></Button>
            </div>
            <Container className='text-center overflow-hidden my-5'>
                <Row className='g-5 my-5'>
                    <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                        <h3 className='text-start mt-2 mb-5'>The UK Specialists In Fly Control For Domestic Homes</h3>
                        <h3 className='text-start'>Common Species Of Pest Flies</h3>
                        <p className='text-start mb-5 mt-3'>
                            There are different types of flies and they can be a nuisance around the home. The common housefly is around 6mm long with a wingspan of 13-15mm and 4 stripes on its back. There is also a lesser house fly, which is of a similar size but has three stripes on its back, two of them yellow.
                        </p>
                        <p className='text-start mb-5'>
                            The blue and green bottle flies both resemble the common housefly (the green bottle is usually a little bigger), but they can be distinguished by their vibrant metallic colour.
                        </p>
                        <p className='text-start mb-5'>
                            Adult fruit flies are around 3mm in length, the front part of the body is tan and the rear section black and they have red eyes.
                        </p>
                        <p className='text-start mb-5'>
                            Unfortunately, if you have a problem with blowflies, it could signify another pest infestation as they breed exclusively on dead animals and there may be a dead rodent or bird somewhere in your property (under floorboards, behind a cupboard, or in the loft). In this case, you will usually notice a bad smell too as the carcass will have been there for one or two weeks before you see evidence of blowflies.
                        </p>
                        <h3 className='text-start mb-3'>What do we offer?</h3>
                        <p className='text-start mb-5'>
                            Global Pest Control is a professional pest control company and our fly control services are second to none. A Global Pest Control technician will be able to identify the nature of the problem and whether any other pests are present, treating them all accordingly. Our fully-trained staff can recommend the most appropriate proofing and preventative measures to avoid further infestations and carry these out.
                        </p>
                        <p className='text-start mb-5 text-danger'>
                            <h3>Call Global Pest Control on 07728 957 714 to discover more about our fly1 pest control services.</h3>
                        </p>
                        <p className='text-start text-danger my-5'>
                            <Link to="/contact" className='text-decoration-none text-light'><Button variant='success' className='p-4 my-3'><h4>Get Quote</h4></Button></Link>
                        </p>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                        <img src={ fly5 } alt="fly1" className='img-fluid' />
                        <img src={ fly2 } alt="fly1" className='img-fluid my-3' />
                        <img src={ fly3 } alt="fly1" className='img-fluid' />
                    </Col>
                </Row>
            </Container>
            <ScrollToTop smooth />
        </div>
    );
};

export default Flies;