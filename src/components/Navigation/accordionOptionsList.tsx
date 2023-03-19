import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem
} from 'mdb-react-ui-kit';

const AccordionOptionsList = () => {
    return (
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 accordion-list mt-4'>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon far icon="address-book" className='mr-3'/> About us</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="shield-alt" className='mr-3'/> Privacy</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon far icon="calendar" className='mr-3'/> Terms</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="cookie-bite" className='mr-3'/> Cookies</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="tools" className='mr-3'/> Services</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="flask" className='mr-3'/> Testing</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="paper-plane" className='mr-3'/> Messaging</NavLink>
            </MDBNavbarItem>

        </MDBNavbarNav>
    )
}

export default AccordionOptionsList;