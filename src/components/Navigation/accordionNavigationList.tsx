import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem
} from 'mdb-react-ui-kit';

const AccordionNavigationList = () => {
    return (
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 accordion-list mt-4'>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="calculator" className='mr-3'/> Math Calculators</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="hand-holding-usd" className='mr-3'/> Currency</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="calculator" className='mr-3'/> Number Calculator</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="eye" className='mr-3'/> Carousel</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="download" className='mr-3'/> Download</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fab icon="wpforms" className='mr-3'/> Forms</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="vial" className='mr-3'/> Mocha</NavLink>
            </MDBNavbarItem>

        </MDBNavbarNav>
    )
}

export default AccordionNavigationList;