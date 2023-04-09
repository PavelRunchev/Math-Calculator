import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
    MDBIcon,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBSwitch
} from 'mdb-react-ui-kit';

const Notifications = () => {
    const [scrollableModal, setScrollableModal] = useState(false);

    return (
        <>

            <div className="container-notification ml-0 ml-xl-3 mt-4 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
                
                <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='navlink navlink-bell' role='button'>
                        <MDBIcon fas icon="bell"/>
                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                    </MDBDropdownToggle>
                    

                    <MDBDropdownMenu  className='dropdown-container p-2'>
                        <NavLink className="dropdown-item dropdown-navlink" to='#'>Some news</NavLink>
                        <NavLink className="dropdown-item dropdown-navlink" to='#'>Another news</NavLink>
                        <NavLink className="dropdown-item dropdown-navlink" to='#' onClick={() => setScrollableModal(!scrollableModal)}>Settings</NavLink>
                    </MDBDropdownMenu>
                </MDBDropdown>
            </div>

            <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1' animationDirection="top" backdrop={false} className='container-modal'>
                    <MDBModalDialog scrollable className='notification-options-modal'>
                    <MDBModalContent className='notification-options-modal'>
                        <MDBModalHeader>
                        <MDBModalTitle>Notification Settings</MDBModalTitle>
                        <MDBBtn
                            className='btn-close'
                            color='none'
                            onClick={() => setScrollableModal(!scrollableModal)}
                        ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                        <MDBSwitch defaultChecked id='flexSwitchCheckChecked' label='Enable public profile' />
                        <br />
                        <MDBSwitch defaultChecked id='flexSwitchCheckChecked' label='Enable display notifications' />
                        <br />   
                        <MDBSwitch defaultChecked id='flexSwitchCheckChecked' label='Enable comments' />
                        <br />
                        <MDBSwitch defaultChecked id='flexSwitchCheckChecked' label='Enable emails' />
                        <br />    
                        <MDBSwitch defaultChecked id='flexSwitchCheckDefault' label='Enable security mode' />
                        <br />  
                        <MDBSwitch defaultChecked id='flexSwitchCheckDefault' label='Enable payment' />
                        <br />  
                        <MDBSwitch defaultChecked id='flexSwitchCheckChecked' label='Enable bugs reported' />
                        <br />   
                        <MDBSwitch defaultChecked id='flexSwitchCheckChecked' label='Enable social interactions' />
                        <br />   
                        <MDBSwitch defaultChecked id='flexSwitchCheckChecked' label='Enable new comments' />
                        <br />   

                        </MDBModalBody>
                        <MDBModalFooter>
                        <MDBBtn color='dark' onClick={() => setScrollableModal(!setScrollableModal)}>
                            Close
                        </MDBBtn>
                        <MDBBtn className='btn-accept'>Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
        </>
      
    )
}

export default Notifications;