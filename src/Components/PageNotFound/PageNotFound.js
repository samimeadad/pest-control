import React from 'react';
import errorPage from '../../images/404.jpg'

const PageNotFound = () => {
    return (
        <div className="text-center">
            <img className="img-fluid" src={ errorPage } alt="errorPageImage" />
        </div>
    );
};

export default PageNotFound;