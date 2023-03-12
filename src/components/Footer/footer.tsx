import React from 'react';
import { NavLink } from 'react-router-dom';


import { 
    MDBIcon,
    MDBInputGroup,
    MDBBtn
} from 'mdb-react-ui-kit';

class Footer extends React.Component {
    render () {
        return (
            <footer className="footer-container">

                <div className="icons-container">
                    <MDBIcon fab icon="facebook" className="icon"/>
                    <MDBIcon fab icon="twitter" className="icon"/>
                    <MDBIcon fab icon="linkedin" className="icon"/>
                    <MDBIcon fab icon="youtube" className="icon"/>
                    <MDBIcon fab icon="github" className="icon"/>
                </div>

                <hr className="w-100 my-0"/>

                <div className="footer-main-container my-4 text-light d-flex flex-column flex-lg-row justify-content-start justify-content-lg-around px-3 px-lg-0">
                    <div className="company-container center-container mb-5 mb-lg-0">
                        <h5><MDBIcon fas icon="gem" className="global-icon"/> Company Name</h5>
                        <div>Owner: <span className="footer-company-owner">RAIDERS</span></div>
                        <div>Email: RAIDERS@gmail.com</div>
                        <div>Developer: <span className="footer-company-owner">Abobo</span></div>
                        <div>Email: abobo@gmail.com</div>
                    </div>

                    <div className="footer-container-services center-container mb-5 mb-lg-0">
                        <h5><MDBIcon fas icon="cog" className="global-icon"/> Support</h5>
                        <div className="pl-4 d-flex flex-column">
                            <div className="footer-container-navlink">
                                <NavLink to="#" className="footer-link footer-link-chart-area"> About</NavLink>
                                <MDBIcon fas icon="chart-area" className="icon-footer-link chart-area"/>
                            </div>
                            <div className="footer-container-navlink">
                                <NavLink to="#" className="footer-link footer-link-shield-alt"> Privacy</NavLink>
                                <MDBIcon fas icon="shield-alt" className="icon-footer-link shield-alt"/>
                            </div>
                           
                            <div className="footer-container-navlink">
                                <NavLink to="#" className="footer-link footer-link-clipboard-check"> Terms</NavLink>
                                <MDBIcon fas icon="clipboard-check" className="icon-footer-link clipboard-check"/>
                            </div>

                            <div className="footer-container-navlink">
                                <NavLink to="#" className="footer-link footer-link-cookie-bite"> Cookies</NavLink>
                                <MDBIcon fas icon="cookie-bite" className="icon-footer-link cookie-bite"/>
                            </div>
                        </div>
                        
                    </div>

                    <div className="feedback-container center-container mb-5 mb-lg-0">
                        <h5><MDBIcon fas icon="envelope" className="global-icon"/> Subscribe Now</h5>
                        <div className="mb-3">Subscribe to our newsletter and never miss our design, latest news etc.</div>
                        <MDBInputGroup className='mb-3'>
                            <input className='form-control subscribe-input' placeholder="Enter your email address" type='text' />
                            <MDBBtn color='primary' className='btn-subscribe'>Subscribe</MDBBtn>
                        </MDBInputGroup>
                    </div>
                </div>

                <div className="license-container pb-3">
                    <MDBIcon fab icon="react" className="icon-react text-light"/>
                    <div className="text-center text-light">Studio: <span className="footer-license-owner">RAIDERS Team</span></div>
                    <div className="text-center text-light">&copy; 2023 All rights reserved!</div>
                </div>

            </footer>
        );
    }
}

export default Footer;