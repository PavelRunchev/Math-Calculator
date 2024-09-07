import React from 'react';
import { NavLink } from 'react-router-dom';

import footerStyles from './footer.module.scss';
import globalStyle from '../../SASS-Modules/element.module.scss';

import { 
    MDBIcon,
    MDBInputGroup,
    MDBBtn,
    MDBCardImage
} from 'mdb-react-ui-kit';

import matematica from '../../public/mathematica.png';

function Footer() {
    return (
        <footer className={footerStyles.footerContainer}>

            <div className={footerStyles.footerMainContainer}>

                <div className={`${footerStyles.footerMainComponent} ${footerStyles.footerMainComponent1}`}>
                    <h5><MDBIcon fas icon="map-marker-alt" className={globalStyle.globalColorElement}/> Location</h5>
                    <div><MDBIcon fas icon="globe-europe" className={globalStyle.globalColorElement}/> Bulgaria</div>
                    <div><MDBIcon fas icon="globe" className={globalStyle.globalColorElement}/> Gabrovo 5300</div>
                    <div>Developer: <span className={globalStyle.globalColorElement}>RAIDERS</span></div>
                    <div>Email: <span className={globalStyle.globalColorElement}>setty_ii@abv.bg</span></div>
                </div>

                <div className={`${footerStyles.footerMainComponent} ${footerStyles.footerMainComponent2}`}>
                    <h5><MDBIcon fas icon="info-circle" className={globalStyle.globalColorElement}/> Information</h5>
                    <div className={`pl-4 d-flex flex-column ${globalStyle.globalPaddingLeftLinks}`}>
                        <div  className={footerStyles.footerContainerNavlink}>
                            <NavLink to="#" className={`${footerStyles.footerSupportLinks} ${footerStyles.footerCookieLink}`}> News</NavLink>
                            <MDBIcon far icon="paper-plane" className={`${footerStyles.iconsLink} ${footerStyles.footerCookieIcon}`}/>
                        </div>
                        <div className={footerStyles.footerContainerNavlink}>
                            <NavLink to="#" className={`${footerStyles.footerSupportLinks} ${footerStyles.footerSupportLink}`}> About us</NavLink>
                            <MDBIcon fas icon="user-circle" className={`${footerStyles.iconsLink} ${footerStyles.footerSupportIcon}`}/>
                        </div>
                        <div  className={footerStyles.footerContainerNavlink}>
                            <NavLink to="#" className={`${footerStyles.footerSupportLinks} ${footerStyles.footerShieldLink}`}> Statistics</NavLink>
                            <MDBIcon far icon="eye" className={`${footerStyles.iconsLink} ${footerStyles.footerShieldIcon}`}/>
                        </div>
                        
                        <div  className={footerStyles.footerContainerNavlink}>
                            <NavLink to="#" className={`${footerStyles.footerSupportLinks} ${footerStyles.footerClipboardLink}`}> Contacts</NavLink>
                            <MDBIcon fas icon="address-book" className={`${footerStyles.iconsLink} ${footerStyles.footerClipboardIcon}`}/>
                        </div>
                    </div>
                </div>

                <div className={`${footerStyles.footerMainComponent} ${footerStyles.footerMainComponent3}`}>
                    <h5><MDBIcon fas icon="cog" className={globalStyle.globalColorElement}/> Support</h5>
                    <div className={`pl-4 d-flex flex-column ${globalStyle.globalPaddingLeftLinks}`}>
                        <div className={footerStyles.footerContainerNavlink}>
                            <NavLink to="#" className={`${footerStyles.footerSupportLinks} ${footerStyles.footerSupportLink}`}> Support</NavLink>
                            <MDBIcon fas icon="cogs" className={`${footerStyles.iconsLink} ${footerStyles.footerSupportIcon}`}/>
                        </div>
                        <div  className={footerStyles.footerContainerNavlink}>
                            <NavLink to="#" className={`${footerStyles.footerSupportLinks} ${footerStyles.footerShieldLink}`}> Privacy</NavLink>
                            <MDBIcon fas icon="shield-alt" className={`${footerStyles.iconsLink} ${footerStyles.footerShieldIcon}`}/>
                        </div>
                        
                        <div  className={footerStyles.footerContainerNavlink}>
                            <NavLink to="#" className={`${footerStyles.footerSupportLinks} ${footerStyles.footerClipboardLink}`}> Terms</NavLink>
                            <MDBIcon fas icon="clipboard-check" className={`${footerStyles.iconsLink} ${footerStyles.footerClipboardIcon}`}/>
                        </div>

                        <div  className={footerStyles.footerContainerNavlink}>
                            <NavLink to="#" className={`${footerStyles.footerSupportLinks} ${footerStyles.footerCookieLink}`}> Cookies</NavLink>
                            <MDBIcon fas icon="cookie-bite" className={`${footerStyles.iconsLink} ${footerStyles.footerCookieIcon}`}/>
                        </div>
                    </div>
                </div>

                <div className={`${footerStyles.footerMainComponent} ${footerStyles.footerMainComponent4}`}>
                    <h5><MDBIcon fas icon="envelope" className={globalStyle.globalColorElement}/> Subscribe Now</h5>
                    <div className="mb-3">Subscribe to our newsletter and never miss our design, latest news etc.</div>
                    <MDBInputGroup className='mb-3'>
                        <input className='form-control inputForm' placeholder="Enter your email address" type='text' />
                        <MDBBtn color='primary' className='btn-subscribe'>Subscribe</MDBBtn>
                    </MDBInputGroup>
                </div>

            </div>


            <div className={footerStyles.secondContainer}>
                
                <div className={footerStyles.secondInnerContainer}>
                    <div className={footerStyles.secondLogoContainer}>
                        <MDBCardImage className={`rounded-circle ${footerStyles.footerLogo}`} src={matematica} fluid alt='logo' />
                        <h4 className='mb-0'><span className={globalStyle.globalColorElement}>Math</span> Calculator</h4>
                    </div>

                    <div></div>

                    <div className={footerStyles.iconsContainer}>
                        <MDBIcon fab icon="facebook" className={footerStyles.icon}/>
                        <MDBIcon fab icon="twitter" className={footerStyles.icon}/>
                        <MDBIcon fab icon="linkedin" className={footerStyles.icon}/>
                        <MDBIcon fab icon="youtube" className={footerStyles.icon}/>
                        <MDBIcon fab icon="github" className={footerStyles.icon}/>
                    </div>
                  
                </div>

                <hr className={globalStyle.globalUnderLine}/>

                <div className={footerStyles.licenseMainContainer}>
                    <div className="text-center text-light">Copyright &copy; 2024 Studio <span className={globalStyle.globalColorElement}>RAIDERS</span> Team. All rights reserved. </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;