import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { showLeftMenu, hideLeftMenu } from '../../services/left-side-Menu-animation';
import { showOthersMenu, hideOthersMenu } from '../../services/others-menu';

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

import LeftSideMenu from './left-side-menu';
import logo from '../../public/logo.png';
import OthersMenu from './othersMenu';

export default class Navigation extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            showBasic: false,
            isShowSlideMenu: false,
            isShowOthersMenu: false
        }
    }

    private showLeftMenu = (ev: Object) => {
        const { isShowSlideMenu } = this.state;
        const menu = document.querySelector(".left-side-menu-container") as HTMLElement;

        if(isShowSlideMenu === false) showLeftMenu(menu);
        else hideLeftMenu(menu)

        this.setState({ isShowSlideMenu: isShowSlideMenu ? false : true });
    }

    private hideLeftMenu = (ev: Object) => {
        const menu = document.querySelector(".left-side-menu-container") as HTMLDivElement;
        hideLeftMenu(menu)

        this.setState({ isShowSlideMenu: false });
    }

    private showHideOthersMenu = (ev: any) => {
        this.setState({ isShowOthersMenu: !this.state.isShowOthersMenu });
        let containerOthersMenu: HTMLElement = document.querySelector('.container-others-menu')!;

        new Promise((Resolve: any) => {
            Resolve();
        }).then(() => {
            if(this.state.isShowOthersMenu) {
                showOthersMenu(containerOthersMenu, '-300px');
            } else {
                hideOthersMenu(containerOthersMenu, '-300px');
            }
        }).catch(err => console.log(err.message));
    }


    render() {
        const classIconAngle = this.state.isShowSlideMenu ? "angle-left" : "angle-right";

        //passing function hideLeftMenu to child component LeftSideMenu
        const termProps = { funcHideLeftMenu: this.hideLeftMenu }

        return (
                <>
                    <MDBNavbar expand='lg' light bgColor='light' className='py-3 navbar-container'>
                        <MDBContainer fluid>
                            <MDBIcon fas icon={classIconAngle} className='navbar-left-icon-bars' onClick={(ev: any) => {this.showLeftMenu(ev)}}/>
                            <MDBCardImage className='nav-logo ml-4 ml-lg-0' src={logo} fluid alt='logo' />
                            

                            <MDBNavbarToggler
                                aria-controls='navbarSupportedContent'
                                aria-expanded='false'
                                aria-label='Toggle navigation'
                                onClick={() => this.setState({ showBasic: this.state.showBasic ? false: true})}
                            >
                            <MDBIcon icon='bars' fas className='icon-bars'/>
                            </MDBNavbarToggler>

                            <MDBCollapse navbar show={this.state.showBasic}>
                            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 navlist'>
                                <MDBNavbarItem className='navbar-item'>
                                    <NavLink className="navbar-brand navlink" to='/home'>Home</NavLink>
                                    <div className="navbar-under-line"></div>
                                </MDBNavbarItem>
                                <MDBNavbarItem className='navbar-item'>
                                    <NavLink className="navbar-brand navlink" to='/about'>About</NavLink>
                                    <div className="navbar-under-line"></div>
                                </MDBNavbarItem>


                                <MDBNavbarItem className='navbar-item'>
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link navlink' role='button'>
                                        Menu
                                        </MDBDropdownToggle>
                                        <div className="navbar-under-line"></div>
                                        <MDBDropdownMenu  className='dropdown-container p-2'>
                                            <NavLink className="dropdown-item dropdown-navlink" to='/home'>Home</NavLink>
                                            <NavLink className="dropdown-item dropdown-navlink" to='/about'>About</NavLink>
                                            <NavLink className="dropdown-item dropdown-navlink" to='/action'>Another action</NavLink>
                                            <NavLink className="dropdown-item dropdown-navlink" to='/something'>Something else here</NavLink>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>

                                <MDBNavbarItem className='navbar-item'>
                                    <NavLink className="navbar-brand navlink" to='#' onClick={this.showHideOthersMenu}>Others</NavLink>
                                    {this.state.isShowOthersMenu ? <MDBIcon fas icon="caret-up" className='caret-icons'/> : <MDBIcon fas icon="caret-down" className='caret-icons'/>}
                                    <div className="navbar-under-line"></div>
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

                    <OthersMenu />

                    <LeftSideMenu {...termProps}/>
                </>
            );
    }
}