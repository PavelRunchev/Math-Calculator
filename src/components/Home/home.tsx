import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

import Navigation from '../Navigation/navigation';
import Footer from '../Footer/footer';
import { Button } from 'react-bootstrap';
import toastr from '../../services/toastr';

import {
    MDBPopover, 
    MDBPopoverBody, 
    MDBPopoverHeader
  } from 'mdb-react-ui-kit';


class Home extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            redirect: false,
            otherRedirect: false,
            err: false
        }
    }

    clickHandler = () => {
		throw new Error('Handle Error!');
	}

    clickToRedirect = () => {
        this.setState({ redirect: true });
    }

    clickWithNavigate = () => {
        this.setState({ otherRedirect: true });
    }

    clickToastr = () => {
        toastr("Success information", "error");
    }

    render () {
        if(this.state.otherRedirect)
            return <Navigate to='/system'/>

        if(this.state.redirect) {
            return <Navigate to='/about'/>
        }

        return (
            <>
                <Navigation/>
                <div className='container-home'>
                    <h2 className='mx-auto my-5'>React App!</h2>
                    <div>
                        <Button variant="info" onClick={this.clickToRedirect}>Info</Button>{' '}
                        <Button variant="success" onClick={this.clickToastr}>Success</Button>{' '}
                        <Button variant="warning">Warning</Button>{' '}
                        <Button variant="danger" onClick={this.clickHandler}>Error</Button>{' '}
                        <Button variant="secondary" onClick={this.clickWithNavigate}>Secondary</Button>{' '}
                    </div>
                
                    <MDBPopover size='lg' color='danger' btnChildren='Click to toggle popover'>
                        <MDBPopoverHeader>Popover title</MDBPopoverHeader>
                        <MDBPopoverBody>And here's some amazing content. It's very engaging. Right?</MDBPopoverBody>
                    </MDBPopover>
                </div>
                <Footer />
            </>
        )
    }
}

export default Home;
