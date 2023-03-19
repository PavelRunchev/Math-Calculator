import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem
} from 'mdb-react-ui-kit';


const OthersMenu = () => {

    return (
        <div className='container-others-menu'>
            <div className='container-inner-others-menu'>
                <h4 className='pl-3'>Development</h4>
                <div className='ml-3 under-line'></div>

                <MDBNavbarNav className='others-menu-list'>
                    <MDBNavbarItem className='others-menu-item'>
                        <NavLink className="navbar-brand others-menu-link" to='#'> Cureer Center</NavLink>
                        <MDBIcon fas icon="caret-right" className='icon-caret-right'/>
                    </MDBNavbarItem>

                    <MDBNavbarItem className='others-menu-item'>
                        <NavLink className="navbar-brand others-menu-link" to='#'> Forum</NavLink>
                        <MDBIcon fas icon="caret-right" className='icon-caret-right'/>
                    </MDBNavbarItem>

                    <MDBNavbarItem className='others-menu-item'>
                        <NavLink className="navbar-brand others-menu-link" to='#'>Departments</NavLink>
                        <MDBIcon fas icon="caret-right" className='icon-caret-right'/> 
                    </MDBNavbarItem>

                    <MDBNavbarItem className='others-menu-item'>
                        <NavLink className="navbar-brand others-menu-link" to='#'> Education</NavLink>
                        <MDBIcon fas icon="caret-right" className='icon-caret-right'/>
                    </MDBNavbarItem>

                    <MDBNavbarItem className='others-menu-item'>
                        <NavLink className="navbar-brand others-menu-link" to='#'> University</NavLink>
                        <MDBIcon fas icon="caret-right" className='icon-caret-right'/>
                    </MDBNavbarItem>

                </MDBNavbarNav>
            </div>

            <div className='container-inner-others-menu'>
                <h4 className='pl-3'>Opportunities</h4>
                <div className='under-line ml-3'></div>

                <MDBNavbarNav className='others-menu-list'>

                    <MDBNavbarItem className='others-menu-item'>
                        <NavLink className="navbar-brand others-menu-link" to='#'> Awards</NavLink>
                        <MDBIcon fas icon="caret-right" className='icon-caret-right'/>
                    </MDBNavbarItem>

                    <MDBNavbarItem className='others-menu-item'>
                        <NavLink className="navbar-brand others-menu-link" to='#'>Business Partners</NavLink>
                        <MDBIcon fas icon="caret-right" className='icon-caret-right'/> 
                    </MDBNavbarItem>

                    <MDBNavbarItem className='others-menu-item'>
                        <NavLink className="navbar-brand others-menu-link" to='#'> Creativity</NavLink>
                        <MDBIcon fas icon="caret-right" className='icon-caret-right'/>
                    </MDBNavbarItem>

                    <MDBNavbarItem className='others-menu-item'>
                        <NavLink className="navbar-brand others-menu-link" to='#'> Developer Career</NavLink>
                        <MDBIcon fas icon="caret-right" className='icon-caret-right'/>
                    </MDBNavbarItem>

                    <MDBNavbarItem className='others-menu-item'>
                        <NavLink className="navbar-brand others-menu-link" to='#'> Sertifications</NavLink>
                        <MDBIcon fas icon="caret-right" className='icon-caret-right'/>
                    </MDBNavbarItem>

                </MDBNavbarNav>
            </div>
        </div>
    )
}

export default OthersMenu;