import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { showLeftMenu, hideLeftMenu } from '../../services/left-side-Menu-animation';
import { showOthersMenu, hideOthersMenu } from '../../services/others-menu';
import { growFocusSearchInput, smallOutFocusSearchInput } from '../../services/inputSearchFocusAnimation';
import Notifications from './notification';

import {
    MDBContainer,
    MDBNavbar,
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
import secongLogo from '../../public/mathematica.png';
import OthersMenu from './othersMenu';

interface State {
    showBasic: boolean;
    isShowSlideMenu: boolean;
    isShowOthersMenu: boolean;
}

export default class Navigation extends Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            showBasic: false,
            isShowSlideMenu: false,
            isShowOthersMenu: false
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.checkForResize992);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkForResize992);
    }

    private checkForResize992 = ():Boolean => {
        //otherside menu when clicked bars menu and change 992px uper ot less
        let containerOthersMenu: HTMLElement = document.querySelector('.container-others-menu')!;
        if(window.innerWidth < 992) {
            if(this.state.showBasic) containerOthersMenu.style.top = '310px';
            else containerOthersMenu.style.top = '65px';
        } else {
            containerOthersMenu.style.top = '65px';
        }

        if(window.innerWidth < 1100) {
            return true;
        } else {
            return false;
        }
    }

    private showLeftMenu = (ev: Object): void => {
        const { isShowSlideMenu } = this.state;
        const menu = document.querySelector(".left-side-menu-container") as HTMLElement;

        if(isShowSlideMenu === false) showLeftMenu(menu);
        else hideLeftMenu(menu)

        this.setState({ isShowSlideMenu: isShowSlideMenu ? false : true });
    }

    private hideLeftMenu = (ev: Object): void => {
        const menu = document.querySelector(".left-side-menu-container") as HTMLDivElement;
        hideLeftMenu(menu)

        this.setState({ isShowSlideMenu: false });
    }

    private showHideOthersMenu = (ev: Object): void => {
        let containerOthersMenu: HTMLElement = document.querySelector('.container-others-menu')!;
        this.setState({ isShowOthersMenu: !this.state.isShowOthersMenu });

        new Promise((Resolve: any) => {
            Resolve();
        }).then(() => {
            if(this.state.isShowOthersMenu) {
                showOthersMenu(containerOthersMenu, '-500px');
            } else {
                hideOthersMenu(containerOthersMenu, '-500px');
            }
        }).catch(err => console.log(err.message));
    }

    private growInputThatFocus = (ev: Object): void => {
        if(this.checkForResize992() === false) {
            let form: HTMLElement = document.querySelector('.form-search')!;
            growFocusSearchInput(form);
        }
    }

    private smallInputOutFocus = (ev: Object) => {
        if(this.checkForResize992() === false) {
            let form: HTMLElement = document.querySelector('.form-search')!;
            smallOutFocusSearchInput(form);
        }
    }

    private clickBarsMenu = (ev: Object): void => {
        let containerOthersMenu: HTMLElement = document.querySelector('.container-others-menu')!;

        if(containerOthersMenu != null) {
            new Promise((Resolve: any) => {
                this.setState({ showBasic: this.state.showBasic ? false : true});
                Resolve();
            }).then(() => {
                const bars = this.state.showBasic;

                if(bars) containerOthersMenu.style.top = '310px';
                else containerOthersMenu.style.top = '65px';
            }).catch(err => console.log(err.message));
        }
    }

    render() {
        const classIconAngle = this.state.isShowSlideMenu ? "angle-left" : "angle-right";

        //passing function hideLeftMenu to child component LeftSideMenu
        const termProps = { funcHideLeftMenu: this.hideLeftMenu }

        return (
                <nav>
                    <MDBNavbar expand='lg' light bgColor='light' className='py-3 navbar-container'>
                        <MDBContainer fluid className='containert-nav-second'>
                            <MDBIcon fas icon={classIconAngle} className='navbar-left-icon-bars' onClick={(ev: any) => {this.showLeftMenu(ev)}}/>
                            <MDBCardImage className='nav-logo ml-4 ml-lg-0' src={logo} fluid alt='logo' />
                            

                            <MDBNavbarToggler
                                aria-controls='navbarSupportedContent'
                                aria-expanded='false'
                                aria-label='Toggle navigation'
                                onClick={this.clickBarsMenu}
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


                                <MDBNavbarItem className='navbar-item '>
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link navlink' role='button'>
                                        Menu
                                        </MDBDropdownToggle>
                                        <div className="navbar-under-line"></div>
                                        <MDBDropdownMenu  className='dropdown-container p-2'>
                                            <NavLink className="dropdown-item dropdown-navlink" to='/currency'>Currency</NavLink>
                                            <NavLink className="dropdown-item dropdown-navlink" to='/number-convertor'>Number Convertor</NavLink>
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
                                
                            <h4 className='nav-brand mx-auto mb-0 nav-title'>
                                Math 
                                <MDBCardImage className='nav-second-logo ml-4 ml-lg-0' src={secongLogo} fluid alt='logo' />
                                Calculator
                            </h4>
                                
                            </MDBNavbarNav>
                                <form className='input-group form-search'>
                                    <input onFocus={this.growInputThatFocus} onBlur={this.smallInputOutFocus} type='search' className='form-control search-input' placeholder='Type query' aria-label='Search' />
                                    <MDBBtn color='primary' className='btn-search'>Search</MDBBtn>
                                </form>

                                <Notifications />
                            </MDBCollapse>

                        </MDBContainer>

                    </MDBNavbar>

                    
                        <OthersMenu />

                    <LeftSideMenu {...termProps}/>
                </nav>
            );
    }
}