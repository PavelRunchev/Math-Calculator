import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBCollapse,
    MDBCardImage
  } from 'mdb-react-ui-kit';

import './navigation.scss';
import logo from '../../public/logo.png';

export default function Navigation() {
    const [showBasic, setShowBasic] = useState(false);

        return (
            <MDBNavbar expand='lg' light bgColor='light' className='py-3'>
                <MDBContainer fluid>
                    <MDBCardImage className='nav-logo' src={logo} fluid alt='logo' />
                    

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                    <MDBIcon icon='bars' fas className='icon-bars'/>
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem className='navbar-item'>
                            <NavLink className="navbar-brand navlink" to='/home'>Home</NavLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='navbar-item'>
                            <NavLink className="navbar-brand navlink" to='/about'>About</NavLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem className='navbar-item'>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link navlink' role='button'>
                                Others
                                </MDBDropdownToggle>
                                <MDBDropdownMenu  className='dropdown-container'>
                                    <NavLink className="dropdown-item dropdown-navlink" to='/home'>Home</NavLink>
                                    <NavLink className="dropdown-item dropdown-navlink" to='/about'>About</NavLink>
                                    <NavLink className="dropdown-item dropdown-navlink" to='/home'>Another action</NavLink>
                                    <NavLink className="dropdown-item dropdown-navlink" to='/home'>Something else here</NavLink>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>

                        
                    <MDBNavbarBrand className='nav-brand mx-auto nav-title' href='/'>Math Calculator</MDBNavbarBrand>
                        
                    </MDBNavbarNav>
                        <form className='d-flex input-group w-auto'>
                            <input type='search' className='form-control search-input' placeholder='Type query' aria-label='Search' />
                            <MDBBtn color='primary' className='btn-search'>Search</MDBBtn>
                        </form>
                    </MDBCollapse>
                </MDBContainer>
                </MDBNavbar>
        );
}