import React, { useState, useLayoutEffect } from 'react';

import './navigation.scss';
import navStyle from './navigation.module.scss';
import globalStyle from '../../SASS-Modules/element.module.scss';

import { NavLink } from 'react-router-dom';
import MathMenu from './mathMenu';

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
    MDBCardImage,
    MDBInputGroup,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

import matematica from '../../public/mathematica.png';
import { showOthersMenu, hideOthersMenu } from '../../Services/mathMenu';

function Navigation() {
    const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState<boolean>(false);
    const [showMathMenu, setShowMathMenu] = useState<boolean>(false);

    //resize function for mathMenu
    useLayoutEffect(() => {
        window.addEventListener('resize', updateSize);
        function updateSize() {

            if(window.innerWidth < 992 && !showMathMenu) {
                if(openNavNoTogglerSecond) 
                    setStyleTop("290px");
                else 
                    setStyleTop("77px");
            } else {
                setStyleTop("77px");
                setOpenNavNoTogglerSecond(false);
            }
        }
        return () => window.removeEventListener('resize', updateSize);
      }, [openNavNoTogglerSecond, showMathMenu]);

    //clicked burger btn
    function showHideNavBarToggle(e: any) {
        setOpenNavNoTogglerSecond(!openNavNoTogglerSecond)

        //only when mathmenu is clicked on visible
        if(openNavNoTogglerSecond && showMathMenu)
            setStyleTop("77px");
        else if(!openNavNoTogglerSecond && showMathMenu)
            setStyleTop("290px");
    }

    //only when mathmenu is clicked show or hide
    function clickMathManu(e: any): void {
        if(window.innerWidth < 992 && openNavNoTogglerSecond) {
            setStyleTop("290px");
            !showMathMenu ? showOthersMenu('-900px') : hideOthersMenu('-900px');
        } else {
            setStyleTop("77px");
            !showMathMenu ? showOthersMenu('-800px') : hideOthersMenu('-800px');
        }

        setShowMathMenu(!showMathMenu);
    }

    function setStyleTop(val: string) {
        let mathMenuHTML: HTMLElement = document.querySelector('.mathMenu_mathMenuContainer__lk-J-')!;
        if(mathMenuHTML !== null) mathMenuHTML.style.top = val;
    }

    return (
        <header>
            <nav>

                <MDBNavbar expand='lg' light bgColor='light' className={navStyle.navbarContainer}>
                    <MDBContainer fluid>
                        <MDBNavbarBrand className={navStyle.navbarLogo}>
                            <MDBCardImage className={`rounded-circle ${navStyle.navLogo}`} src={matematica} fluid alt='logo' />
                        </MDBNavbarBrand>

                        <MDBNavbarToggler
                            type='button'
                            data-target='#navbarTogglerDemo02'
                            aria-controls='navbarTogglerDemo02'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={(e) => showHideNavBarToggle(e)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>

                        <MDBCollapse navbar open={openNavNoTogglerSecond} className='navlist'>

                                <MDBNavbarNav className={`mb-lg-0 ${navStyle.navbarUl1}`}>
                                    <MDBNavbarItem className={navStyle.navMenuItem}>
                                        <NavLink ria-current='page' className={navStyle.btnLink} to='/home'>Home</NavLink>
                                        <div className={navStyle.navbarUnderLine}></div>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem className={navStyle.navMenuItem}>
                                        <NavLink to='/about' className={`navlink ${navStyle.btnLink}`}>About</NavLink>
                                        <div className={navStyle.navbarUnderLine}></div>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem className={`navbar-item, ${navStyle.navMenuItem}`}>
                                        <MDBDropdown>
                                            <MDBDropdownToggle tag='a' className={`nav-link navlink ${navStyle.btnLink}`} role='button'>
                                            Menu
                                            </MDBDropdownToggle>
                                            <div className={navStyle.navbarUnderLine}></div>
                                            <MDBDropdownMenu  className='dropdown-container p-2'>
                                                <NavLink className={`dropdown-item dropdown-navlink ${navStyle.navLink} ${navStyle.menuBtnHover}`} to='/intervie-questions'>Interview Questions</NavLink>
                                                <NavLink className={`dropdown-item dropdown-navlink ${navStyle.navLink} ${navStyle.menuBtnHover}`} to='/design-patterns'>Design Patterns</NavLink>
                                                <NavLink className={`dropdown-item dropdown-navlink ${navStyle.navLink} ${navStyle.menuBtnHover}`} to='/gallery'>Gallery</NavLink>
                                                <NavLink className={`dropdown-item dropdown-navlink ${navStyle.navLink} ${navStyle.menuBtnHover}`} to='/reCaptcha-page'>ReCaptcha</NavLink>
                                                <NavLink className={`dropdown-item dropdown-navlink ${navStyle.navLink} ${navStyle.menuBtnHover}`} to='/pagination-page'>Pagination</NavLink>
                                                <NavLink className={`dropdown-item dropdown-navlink ${navStyle.navLink} ${navStyle.menuBtnHover}`} to='/material-design-bootstrap-5'>MDB React Guide</NavLink>
                                                <NavLink className={`dropdown-item dropdown-navlink ${navStyle.navLink} ${navStyle.menuBtnHover}`} to='/scroll-top-to-current-page'>Scroll Top to Current Page</NavLink>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem className={navStyle.navMenuItem}>
                                        <NavLink to='#' className={`navlink ${navStyle.btnLink}`} onClick={(e) => clickMathManu(e)}>Math Menu </NavLink>
                                            {showMathMenu 
                                                ? <MDBIcon fas icon="caret-up" className={`${globalStyle.globalColorElement}`}/> 
                                                : <MDBIcon fas icon="caret-down" className={`${globalStyle.globalColorElement}`}/>
                                            }
                                        <div className={navStyle.navbarUnderLine}></div>
                                    </MDBNavbarItem>
                                </MDBNavbarNav>

                                <MDBNavbarNav className={`mb-lg-0 ${navStyle.navbarUl2}`}>
                                    <MDBNavbarItem className='mr-3'>
                                        <MDBInputGroup tag="form" className='d-flex search-form'>
                                            <input className='form-control inputForm' placeholder="Type query" aria-label="Search" type='Search' />
                                            <MDBBtn color='primary'>Search</MDBBtn>
                                        </MDBInputGroup>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem className={`${navStyle.navbarItem} ${navStyle.signUpItem}`}>
                                        <NavLink to='#' className={`${navStyle.btnLink}`}>Sign In</NavLink>
                                    </MDBNavbarItem>
                                </MDBNavbarNav>

                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>

                <MathMenu {...{clickMathManu}}/>
            </nav>
        </header>
    )
}

export default Navigation;