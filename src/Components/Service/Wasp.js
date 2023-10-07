import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Row } from 'react-bootstrap';
import wasp1 from '../../images/service/main/wasp1.jpg';
import wasp2 from '../../images/service/main/wasp2.jpg';
import wasp4 from '../../images/service/main/wasp4.jpg';
import wasp5 from '../../images/service/main/wasp5.jpg';
import wasp6 from '../../images/service/main/wasp6.jpg';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const Wasp = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div className='w-100 overflow-hidden'>
            <Container className='overflow-hidden'>
                <div className='my-5 overflow-hidden text-center text-success'>
                    <h1 className='my-2 text-center'>Wasp & Bee Removal Services from the Professionals</h1>
                    <h3 className='text-center'>Our Technicians are based throughout the country and aim to be with you within 4 hours of your call.</h3>
                </div>
                <div className='my-5 overflow-hidden'>
                    <Row className='g-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                            <img src={ wasp1 } alt="cockroach" className='img-fluid mt-4' />
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                            <p className='text-start'>
                                As the summer months roll around, it’s not unusual to see an influx of wasps and bees around your property. However, if these stinging insects decide to settle in or around your premises, it can not only be irritating but potentially hazardous.
                            </p>
                            <p className='text-start'>
                                Here at Global Pest Control, we understand the importance of dealing with wasp nest removal quickly and carefully to minimise the risk of injury or recurrence, which is why our qualified team of wasp removal specialists are on hand to assist with wasp or bee removal.
                            </p>
                            <p className='text-start'>
                                Global Pest Control can guarantee that we will eradicate your wasp nest using wasp control methods that are highly effective. We have years of experience in wasp nest eradication and have access to all of the latest wasp removal protection equipment to remove the hive safely.
                            </p>
                            <p className='text-start'>
                                Please remember that wasps can become highly aggressive if they feel threatened, so attempting to remove the wasp nest is not advisable. Bring in the wasp eradication experts at Global Pest Control and remove the risk of harming yourself or your family.
                            </p>
                            <p className='text-start text-danger'>
                                <Button variant='danger' className='p-3'><h4><FontAwesomeIcon className="text-light" icon={ faPhoneVolume } /> <a className="text-decoration-none text-light fw-bold" href="tel: +4407728957714"> : 077 2895 7714</a></h4></Button>
                            </p>
                        </Col>
                    </Row>
                </div>
                <div className='my-5 overflow-hidden'>
                    <Row className='g-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                            <p className='text-start'>
                                Wasp nest can be complicated to locate and hidden in the most obscure places, such as under roof slates, in your shed, behind window frames, or in your garden hedge.
                            </p>
                            <p className='text-start'>
                                If you think you need to hire the service of the wasp control experts, call Global Pest Control today.
                            </p>
                            <p className='text-start'>
                                Every bee and wasp nest removal job is different, so it is essential to tackle every situation individually. Before any attempt to remove a nest, we ensure that all options are covered, considering whether a nest can be removed or needs to be eradicated.
                            </p>
                            <p className='text-start'>
                                Whether it’s a commercial, domestic or industrial premises Global Pest Control Ltd has the skills and resources to tackle any pest control issues you may be facing. Our services also cover a vast area throughout Scotland and Northern England, meaning you can be assured that we can be with you immediately after your initial call.
                            </p>
                            <p className='text-start text-danger'>
                                <Button variant='danger' className='p-3'><h4><FontAwesomeIcon className="text-light" icon={ faPhoneVolume } /> <a className="text-decoration-none text-light fw-bold" href="tel: +4407728957714"> : 077 2895 7714</a></h4></Button>
                            </p>
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                            <img src={ wasp4 } alt="cockroach" className='img-fluid' />
                        </Col>
                    </Row>
                </div>
                <div className='my-5 overflow-hidden'>
                    <h2 className='my-5 text-start'>Is it a wasp or a bee?</h2>
                    <Row>
                        <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                            <img src={ wasp2 } alt="wasp" className='img-fluid' />
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                            <p className='text-start mb-5 mt-2'>
                                With around 9,000 species of wasps in the UK, you will likely see a few buzzing around your home. From landing on your food to flying around your face, these creatures can become quite a nuisance when they come out in full force during warmer months.
                            </p>
                            <p className='text-start mb-5'>
                                Wasp nests are easily distinguished from bee problems due to their distinctive papery look. This is produced by wasps chewing wood fibre into a pulp-like mixture that combines with their saliva. Each nest varies in size, but some of the more enormous nests can hold up to 10,000 wasps during peak times – this is why it’s so essential to hire a professional service to deal with nests and never tackle them yourself. Nests are built from wood fibres broken down into a pulp, so you may see nearby damage to trees, decking and fences.
                            </p>
                            <p className='text-start text-danger'>
                                <h3>Call Global Pest Control on 07728 957 714 If you are looking for a wasp pest control expert.</h3>
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className='w-100 overflow-hidden text-center bg-success text-light my-5'>
                <h2 className='mt-5'>Don’t let wasps ruin your summer fun</h2>
                <h2>Call Global Pest Control today for a free quote and to arrange an appointment</h2>
                <Button variant='light' className='p-3 my-5'><h4><FontAwesomeIcon className="text-danger" icon={ faPhoneVolume } /> <a className="text-decoration-none text-danger fw-bold" href="tel: +4407728957714"> : 07728957714</a></h4></Button>
            </div>
            <Container className='text-center overflow-hidden my-5'>
                <h2 className='mt-5 text-start'>Common wasp removal breeds</h2>
                <Row>
                    <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                        <p className='text-start'>
                            There are many kinds of wasps in the UK, but the two most typical wasps you are likely to encounter are the Vespula Vulgaris (also known as the common wasp) and the German wasp (Vespula Germanica). Both types of wasp have recognisable yellow and black markings and are very similar in size and appearance.
                        </p>
                        <p className='text-start'>
                            Other known breeds include the red wasp (Vespula Rufa) and the tree wasp (Dolichovespula Sylvestris). You may encounter the Saxon wasp in the Southern part of the United Kingdom (Dolichovespula Saxonica). It can also be quite standard to face the European hornet (Vespa Crabro) in certain areas of Southern England which is the UK’s only native hornet. It carries a painful stong and is larger in size than ordinary wasps, as well as sharing a similar colouration and pattern to most common and social wasps.
                        </p>
                        <p className='text-start'>
                            North American Black Wasp (Sphex pensylvanicus – the great black wasp or spider rabbit) has also been spotted inside the UK borders, although this is a very rare occurrence. Although they look menacing, they are surprisingly gentle compared to their European cousins and enjoy a solitary nature by digging their own nest within the ground. This breed of digger wasp can grow to a size of 20mm to 35mm.
                        </p>
                        <p className='text-start'>
                            <h3 className='mt-5'>Bee Proofing & Wasp Traps Used For Removal</h3>
                            Prevention is better than cure, which is no different when it comes to minimising the chances of wasps and bees infiltrating your property.
                        </p>
                        <p className='text-start'>
                            You will want to make the most of the fresh air, but open windows leave your property vulnerable to wasp intrusions. If applicable, insect screens can be installed in your property, which can significantly deter insects from setting up shop throughout a commercial premise. Wasp traps can also be extremely useful in drawing insects away from densely populated outdoor spaces such as beer gardens and restaurants. Both products can be supplied and installed by the team here at Global Pest Control.
                        </p>
                        <p className='text-start text-danger'>
                            <h3>Call Global Pest Control on 07728 957 714 to discover more about our Wasp Pest Control Services.</h3>
                        </p>
                        <p className='text-start text-danger my-5'>
                            <Link to="/contact" className='text-decoration-none text-light'><Button variant='success' className='p-4 my-3'><h4>Get Quote</h4></Button></Link>
                        </p>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                        <img src={ wasp5 } alt="cockroach" className='img-fluid mb-5' />
                        <img src={ wasp6 } alt="cockroach" className='img-fluid' />
                    </Col>
                </Row>
            </Container>
            <ScrollToTop smooth />
        </div>
    );
};

export default Wasp;