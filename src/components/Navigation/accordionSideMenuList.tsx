import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem
} from 'mdb-react-ui-kit';

const AccordionSideMenuList = () => {
    return (
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 accordion-list mt-4'>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="book" className='mr-3'/> Doc</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="bell" className='mr-3'/> Notification</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="check" className='mr-3'/> support</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="chart-line" className='mr-3'/> Careers</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="university" className='mr-3'/> University</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="question-circle" className='mr-3'/> Help</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='accordion-item'>
                <NavLink className="navbar-brand accordion-link" to='#'><MDBIcon fas icon="chart-pie" className='mr-3'/> Statistics</NavLink>
            </MDBNavbarItem>

        </MDBNavbarNav>
    )
}

export default AccordionSideMenuList;