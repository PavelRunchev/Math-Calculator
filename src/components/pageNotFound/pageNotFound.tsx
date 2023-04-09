import React from 'react';
import { NavLink } from 'react-router-dom';

import { MDBIcon } from 'mdb-react-ui-kit';

const PageNotFound = () => {
    return (
        <div className='container-page-not-found py-5'>
                <h1 className='text-center mt-5'>Page Not Found</h1>
                <div className='d-flex justify-content-center'>
                    <NavLink to="/home">
                        <MDBIcon fas icon="chevron-circle-left" className='chevron-circle-left'/>
                    </NavLink>
                </div>
                <img className="col-12 col-lg-10 col-xl-8 col-xxl-6 my-5 d-block mx-auto"  src='https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg' data-mdb-ripple-color="light" alt="view"/>
        </div>
    )
}

export default PageNotFound;