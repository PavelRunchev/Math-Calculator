import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import {
    MDBPopover, 
    MDBPopoverBody, 
    MDBPopoverHeader
  } from 'mdb-react-ui-kit';

class Home extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {}
    }


    render () {

        return (
            <div >
                 <h2 className='mx-auto my-5'>React App!</h2>
                <div>
                    <Button variant="info">Info</Button>{' '}
                    <Button variant="success">Success</Button>{' '}
                    <Button variant="warning">Warning</Button>{' '}
                    <Button variant="danger">Danger</Button>{' '}
                    <Button variant="secondary">Secondary</Button>{' '}
                </div>

                
              
                <MDBPopover size='lg' color='danger' btnChildren='Click to toggle popover'>
                    <MDBPopoverHeader>Popover title</MDBPopoverHeader>
                    <MDBPopoverBody>And here's some amazing content. It's very engaging. Right?</MDBPopoverBody>
                 </MDBPopover>
            </div>
        )
    }
}

export default Home;