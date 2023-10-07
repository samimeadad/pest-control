import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Row } from 'react-bootstrap';
import rodent1 from '../../images/service/main/rodent1.jpg';
import rodent2 from '../../images/service/main/rodent2.jpg';
import rodent3 from '../../images/service/main/rodent3.jpg';
import rodent4 from '../../images/service/main/rodent4.jpg';
import rodent5 from '../../images/service/main/rodent5.jpg';
import rodent6 from '../../images/service/main/rodent6.jpg';

import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const Rodent = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div className='w-100 overflow-hidden'>
            <Container className='text-center overflow-hidden'>
                <div className='my-5 overflow-hidden text-center text-success'>
                    <h1 className='my-2'>Rat Removal & Mice Control Across The UK</h1>
                    <h3>Our Technicians are based throughout the country and aim to be with you within 4 hours of your call.</h3>
                </div>
                <div className='my-5 overflow-hidden'>
                    <Row className='g-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                            <img src={ rodent1 } alt="cockroach" className='img-fluid w-75' />
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                            <p className='text-start'>
                                Rats and mice are the most common rodents in the UK, finding a suitable habitat in almost every environment, causing not only a nuisance but also a potential serious health risk to your staff and customers.
                            </p>
                            <p className='text-start'>
                                Global Pest Control package is your essential programme for making sure your premises stays clear of unwanted rodents and insects – this is where Eliminate uses our experience and knowledge to provide you with the best coverage year round.
                            </p>
                            <p className='text-start'>
                                <h5>Rodent Pest Control Options</h5>
                            </p>
                            <p className='text-start'>
                                At Global Pest Control, our highly trained and experienced team can resolve your rodent issue as quickly and discreetly as possible, ensuring that your property is rid of rats and mice in no time.
                            </p>
                            <p className='text-start'>
                                Our rodent solutions are designed to suit your needs and your specific issue. Your first visit is a survey to find the source of the problem and how to resolve it. The Technician will be back to follow this up and make sure your pest problem has been eliminated.
                            </p>
                            <p className='text-start'>
                                When you choose to remove rodents from your house, our skilled team has several different options available to ensure that your rodent issues are resolved quickly and efficiently. We can use first or second-generation anticoagulant poisons, effective traps and, in extreme measures, gassing. Our professional team of technicians have access to the latest products and most advanced equipment, making us the pest control company of choice.
                            </p>
                            <p className='text-start text-danger'>
                                <h4>If you suspect you have a cockroach problem, call Eliminate Solutions pest control services today on 07728 957 714.</h4>
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className='w-100 overflow-hidden text-center bg-success text-light my-5 p-5'>
                <h5>If you require assistance with pests, we will have a Technician with you on the day you call us or at your earliest convenience.</h5>
                <h2 className='mt-5'>Have your rodent problems eliminated forever</h2>
                <h2>Call Global Pest Control today for a free quote and to arrange an appointment</h2>
                <Button variant='light' className='p-3 mt-5'><h4><FontAwesomeIcon className="text-danger" icon={ faPhoneVolume } /> <a className="text-decoration-none text-danger fw-bold" href="tel: +4407728957714"> : 07728957714</a></h4></Button>
            </div>
            <Container className='text-center overflow-hidden my-5'>
                <div className='my-5 overflow-hidden'>
                    <Row className='g-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                            <h3 className='text-start mt-3'>Rodent Proofing</h3>
                            <p className='text-start mt-5'>
                                In some situations, rodent proofing will go a long way to help with issues in domestic and commercial premises.  Eliminate can provide one of the eradication services as well as ongoing rodent monitoring and control programmes.  Your Technician will advise you on the best products available to make your property a fortress against infestation.
                            </p>
                            <p className='text-start'>
                                <h3 className='mt-5'>Types of rodents in the UK</h3>
                            </p>
                            <p className='text-start'>
                                <span className='fw-bold'>Rat – </span>The most common rodent you will likely find in the UK is the Rat. There are two species of rat, the brown rat and the black rat. They are often carriers of nasty diseases and parasites, including Weils disease, Listeria, Salmonella, Leptospirosis and Hantavirus. Rats will feed on anything that will give them nutrition, such as rotten food, faeces, and even rotting corpses of other animals. Their lifestyle can lead to them coming into contact with deadly viruses.
                            </p>
                            <p className='text-start'>
                                <span className='fw-bold'>Mice – </span> There are several different species of mice in the UK, such as the house mouse, dormouse, harvest mouse, wood mouse and the yellow-necked mouse, Out of their species, only the dormouse is a protected one. A mouse can often carry the same diseases that a rat does. They can often invade properties finding shelter under the floorboards and in attics and wall cavities.
                            </p>
                            <p className='text-start'>
                                <Button variant='danger' className='p-3'><h4><FontAwesomeIcon className="text-light" icon={ faPhoneVolume } /> <a className="text-decoration-none text-light fw-bold" href="tel: +4407728957714"> : 077 2895 7714</a></h4></Button>
                            </p>
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                            <img src={ rodent4 } alt="cockroach" className='img-fluid' />
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container className='text-center overflow-hidden my-5'>
                <div className='my-5 overflow-hidden'>
                    <Row className='g-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                            <img src={ rodent6 } alt="cockroach" className='img-fluid' />
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                            <p className='text-start'>
                                <span className='fw-bold'>Voles – </span> Not commonly found in UK homes. The Vole tends to make their home at riverbanks and lakes. They have a similar look to mice, yet some different features include smaller eyes & tails, smaller ears and a rounded snout. Species of Voles in the UK are the bank vole, water vole and field vole. Voles are protected species under the Wildlife and Countryside Act 1981, so if you discover a vole inside your property, get in touch with a local wildlife expert for further advice.
                            </p>
                            <p className='text-start'>
                                <span className='fw-bold'>Shrews – </span> Shrews are not considered a rodent but share behaviours similar to rodents. Shrews have long, pointed snouts, similar to a small elephant’s trunk. The Shrew is also protected under the Wildlife and Countryside Act 1981.
                            </p>
                            <p className='text-start'>
                                <span className='fw-bold'>Squirrels – </span> There are two species of squirrels in the UK. These are the more populated grey squirrel and the protected red squirrel. The red squirrel is native to the UK, but the grey squirrel was imported to the UK in the 1800s and has since grown to a number close to 2.5 million, whilst their red cousin’s population is slowly declining. The existence of the red squirrel remains a severe threat. The grey squirrel can invade your home, cause damage by chewing through soffits and fascias, and take up residence in your property. This often leads people to look for a squirrel pest control service that can be provided by Eliminate Solutions.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container className='text-center overflow-hidden my-5'>
                <div className='my-5 overflow-hidden'>
                    <Row className='g-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                            <h4 className='text-start'>HOW DO I KNOW IF I HAVE A RAT PROBLEM?</h4>
                            <p className='text-start'>
                                <ul>
                                    <li>
                                        <h6 className='text-start text-dark my-3'>Rat droppings – Rat droppings are dark brown and the size of a grain of rice. They are commonly found in concentrated places, making them easy to spot.</h6>
                                    </li>
                                    <li>
                                        <h6 className='text-start text-dark my-3'>Bite marks – Rats’ teeth don’t stop growing and they gnaw on objects to file them down. Look out for bite marks on anything from wood to concrete.</h6>
                                    </li>
                                    <li>
                                        <h6 className='text-start text-dark my-3'>Movement – Rats are nocturnal and if they are in parts of your house, such as the walls or under the floorboards, you may hear them moving around.</h6>
                                    </li>
                                    <li>
                                        <h6 className='text-start text-dark my-3'>Movement – Rats are nocturnal and if they are in parts of your house, such as the walls or under the floorboards, you may hear them moving around.</h6>
                                    </li>
                                    <li>
                                        <h6 className='text-start text-dark my-3'>Footprints – If you suspect you have rats, you can test by sprinkling some flour and checking the next day for footprints in the flour.</h6>
                                    </li>
                                </ul>
                            </p>
                            <p className='text-center text-danger'>
                                <Link to="/contact" className='text-decoration-none text-light'><Button variant='success' className='p-4 my-3'><h4>Get Quote</h4></Button></Link>
                            </p>
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                            <img src={ rodent5 } alt="rodent5" className='img-fluid' />
                        </Col>
                    </Row>
                </div>
            </Container>
            <ScrollToTop smooth />
        </div>
    );
};

export default Rodent;