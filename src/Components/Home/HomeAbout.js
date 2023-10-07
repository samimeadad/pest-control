import React from 'react';
import { Container } from 'react-bootstrap';

const HomeAbout = () => {
    return (
        <div className='overflow-hidden'>
            <Container className='my-5 overflow-hidden text-center'>
                <h2 className='my-5 text-success'>Welcome to Global Pest Control.</h2>
                <p className='my-5 fs-5'>
                    We are a professional business offering pest control services.  We are professionally trained ,We  deal with commercial properties and domestic properties.   We offer our services predominantly in the Sussex area.  Our pest control services in Sussex is tailored around each customer, ensuring every requirement is completely met. We cover one-off problems to continued contract work.
                </p>
                <p className='my-5 fs-5'>
                    We have a friendly and professional approach and work with our customer to eradicate the problem.  Our technicians are very discreet with their work.  Our technicians do not wear uniform and the vehicles do not have any logos on them.  Our technicians are qualified and experienced to identify and quickly solve any issues in a professional and discreet manner.
                </p>
                <p className='my-5 fs-5'>
                    We service businesses throughout Sussex from multiple industries including all retail units, restaurants and take-aways, hotels and B&Bs, office buildings, warehouses and industrial premises.
                </p>
                <p className='mt-5 fs-5'>
                    Global Pest Control take pride in our work and we strive to provide a thorough service to our customers.  We use humane methods when controlling pest infestations.  We have £10 million liability insurance. We understand how much a pest infestation can impact on your business, that's why we take time to make sure the job is done right first time.
                </p>
            </Container>
        </div>
    );
};

export default HomeAbout;