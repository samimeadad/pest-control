import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Row } from 'react-bootstrap';
import fleas1 from '../../images/service/main/fleas1.jpg';
import fleas2 from '../../images/service/main/fleas2.jpg';
import cockroach3 from '../../images/service/main/cockroach3.jpg';
import cockroach4 from '../../images/service/main/cockroach4.jpg';
import fleas5 from '../../images/service/main/fleas5.jpg';
import fleas6 from '../../images/service/main/fleas6.jpg';
import fleas7 from '../../images/service/main/fleas7.jpg';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const Fleas = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div className='w-100 overflow-hidden'>
            <Container className='text-center overflow-hidden'>
                <div className='my-5 overflow-hidden text-success'>
                    <h1 className='my-2'>Flea Eradication Service in the UK</h1>
                    <h3>Our Technicians are based throughout the country and aim to be with you within 4 hours of your call.</h3>
                </div>
                <div className='my-5 overflow-hidden'>
                    <Row className='g-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                            <img src={ fleas1 } alt="cockroach" className='img-fluid' />
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                            <p className='text-start'>
                                You may be familiar with fleas and treatments if you have a dog or cat. Fleas can also be carried by other hairy animals such as rabbits, squirrels, foxes and rats.
                            </p>
                            <p className='text-start'>
                                Fleas can lay between 4-8 eggs every time, producing up to 1000 eggs in their entire 2-year lifetime. These unpleasant pests can swarm a house very quickly if not treated properly. If you have spotted fleas in your home, act promptly to stop the spread.
                            </p>
                            <p className='text-start'>
                                Global Pest Control are your local, friendly flea extermination experts. We use the latest in flea removal equipment that is safe for homeowners and their pets, which entirely removes the fleas from your property. We are available 24/7, all year round. We have affordable pest control treatment options for you to choose from that will banish fleas from your home. We can cover Scotland and most of Northern England.
                            </p>
                            <p className='text-start text-danger'>
                                <Button variant='danger' className='p-3'><h4><FontAwesomeIcon className="text-light" icon={ faPhoneVolume } /> <a className="text-decoration-none text-light fw-bold" href="tel: +4407728957714"> : 077 2895 7714</a></h4></Button>
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container className='text-center overflow-hidden my-5'>
                <div className='my-5 overflow-hidden'>
                    <Row className='g-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                            <h3 className='text-start mb-5'>Why Choose Global Pest Control</h3>
                            <p className='text-start'>
                                Global Pest Control has many years of pest control experience behind, so we’re fully qualified to tackle your flea pest problems with a range of professional treatments available. We set strict guidelines for all our pest removal experts and operate only the most humane pest control solutions.
                            </p>
                            <p className='text-start my-5'>
                                Around 40% of homeowners have pets, whether a dog, cat or other furry mammals. Fleas like to attach themselves to your loved companions and can be transferred from one to another through contact. Once they are brought into your home, they can infest furniture and carpets. Fleas can also bite, capable of transferring diseases.
                            </p>
                            <p className='text-start my-5'>
                                Global Pest Control understands that flies can be a real pest. If you require fly control and are located in London, contact us today.
                            </p>
                            <p className='text-start text-danger'>
                                <Button variant='danger' className='p-3'><h4><FontAwesomeIcon className="text-light" icon={ faPhoneVolume } /> <a className="text-decoration-none text-light fw-bold" href="tel: +4407728957714"> : 077 2895 7714</a></h4></Button>
                            </p>
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                            <img src={ fleas2 } alt="cockroach" className='img-fluid' />
                        </Col>
                    </Row>
                </div>
                <div className='my-5 overflow-hidden'>
                    <h2 className='my-5 text-start'>Eradication of Fleas</h2>
                    <Row className='g-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                            <img src={ cockroach3 } alt="cockroach" className='img-fluid mb-2' />
                            <img src={ cockroach4 } alt="cockroach" className='img-fluid' />
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                            <p className='text-start mb-5 mt-3'>
                                Our Flea Control programmes use a knockdown spray to remove as many of these unwanted pests as possible in one go. The spray we use not only kills the eggs, adult and juvenile (nymph) fleas on contact with the insect but will also remain active for some time after the initial spray treatment. In conjunction with this, we will also treat the affected area with an edible poison in a gel form, which will round up any cockroaches that the initial spray may miss.
                            </p>
                            <p className='text-start mb-5'>
                                Fleas are very resilient pests and are tough to eradicate. Their ability to breed rapidly makes flea pest removal services even more vital. If you can catch the infestation quickly enough, it will be easier to manage the situation. Global Pest Control has only the best elimination equipment to handle any size flea infestation.
                            </p>
                            <p className='text-start mb-5'>
                                Fleas can survive for at least two weeks without eating. They are very aggressive feeders and will feed from a person should they need to. They need to eat so they can lay their eggs, so everything that moves is lunch.
                            </p>
                            <p className='text-start mb-5'>
                                Fleas are capable of jumping at an impressive 13 inches, which is the equivalent of a human jumping 1000 feet.
                            </p>
                            <p className='text-center text-danger'>
                                <Link to="/contact" className='text-decoration-none text-light'><Button variant='success' className='p-4 my-3'><h4>Get Quote</h4></Button></Link>
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className='w-100 overflow-hidden text-center bg-success text-light my-5'>
                <h2 className='mt-5'>Have your Fleas problems remove forever</h2>
                <h2>Call Global Pest Control today for a free quote and to arrange an appointment</h2>
                <Button variant='light' className='p-3 my-5'><h4><FontAwesomeIcon className="text-danger" icon={ faPhoneVolume } /> <a className="text-decoration-none text-danger fw-bold" href="tel: +4407728957714"> : 07728957714</a></h4></Button>
            </div>
            <Container className='text-center overflow-hidden my-5'>
                <Row className='g-5 my-5'>
                    <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                        <p className='text-start mb-5 mt-3'>
                            Several household items will help control infestation, but using a British Pest Control Association member such as Eliminate, means your home will be treated with much more potent products than available in a shop and will kill off the flea’s lifecycle, not just the ones you can see.
                        </p>
                        <p className='text-start mb-5'>
                            Bites can be painful, but that’s primarily due to the irritation the bites can cause. If not treated swiftly, fleas can have a damaging effect. Within businesses, this can affect your staff’s morale and reputation. If customers are affected, they may stay away from your business and recovery from instances like this can cause massive disruption to your business.
                        </p>
                        <p className='text-start mb-5'>
                            Fleas are blood-feeding pests that reproduce quicker in warmer climates. They can survive the winter by nesting in a heated home. Each adult flea is smaller than a grain of rice and has no wings. They are extremely strong jumpers.
                        </p>
                        <p className='text-start mb-5'>
                            <h3 className='mb-3'>What do we offer?</h3>
                            We are available for emergency visits 24 hours per day – 7 days per week. We only use highly effective safety-aware methods. Our pest controllers are experienced in dealing with any pest control problem, and we can arrange discreet visits if required. If it has been confirmed that you have a cockroach infestation problem, we will survey the situation at your property or workplace. We need to find out the problem’s seriousness before providing a strategy.
                        </p>
                        <p className='text-start mb-5'>
                            Once we have surveyed your property, we will provide cockroach elimination treatments such as specialised gel bait that attracts cockroaches. These gels will then poison the cockroaches once they feed on them. We will then offer you expert advice on preventing a future cockroach infestation.
                        </p>
                        <p className='text-start mb-5 text-danger'>
                            <h3>Call Global Pest Control on 07728 957 714 to discover more about our cockroach pest control services.</h3>
                        </p>
                        <p className='text-start text-danger'>
                            <Link to="/contact" className='text-decoration-none text-light'><Button variant='success' className='p-4 my-3'><h4>Get Quote</h4></Button></Link>
                        </p>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                        <img src={ fleas5 } alt="fleas5" className='img-fluid' />
                        <img src={ fleas7 } alt="cockroach" className='img-fluid my-2' />
                        <img src={ fleas6 } alt="fleas6" className='img-fluid' />
                    </Col>
                </Row>
            </Container>
            <ScrollToTop smooth />
        </div >
    );
};

export default Fleas;