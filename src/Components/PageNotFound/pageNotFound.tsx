import React from 'react';
import { NavLink } from 'react-router-dom';

import { MDBIcon } from 'mdb-react-ui-kit';
import pageNotFoundStyle from './pageNotFound.module.scss';
import img from '../../public/404_error-page.png';

function PageNotFound() {
    return (
        <div className={pageNotFoundStyle.pageNotFoundContainer}>
                <h1 className='text-center mt-5'>Page Not Found</h1>
                <div className='d-flex justify-content-center'>
                    <NavLink to="/home">
                        <MDBIcon fas icon="chevron-circle-left" className={pageNotFoundStyle.chevronCircleLeft}/>
                    </NavLink>
                </div>
                <img className="col-6 col-lg-5 col-xl-4 col-xxl-3 my-2 d-block mx-auto"  src={img} data-mdb-ripple-color="light" alt="error"/>
        </div>
    )
}

export default PageNotFound;