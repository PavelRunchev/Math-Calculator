import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import {
    MDBCarousel,
    MDBCarouselItem,
    MDBPopover, 
    MDBPopoverBody, 
    MDBPopoverHeader
  } from 'mdb-react-ui-kit';

class Home extends Component {
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


                <MDBCarousel showIndicators showControls fade>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={1}
                        src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                        alt='...'
                    >
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                        alt='...'
                    >
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </MDBCarouselItem>

                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                        alt='...'
                    >
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </MDBCarouselItem>
                </MDBCarousel>


                <MDBPopover size='lg' color='danger' btnChildren='Click to toggle popover'>
                    <MDBPopoverHeader>Popover title</MDBPopoverHeader>
                    <MDBPopoverBody>And here's some amazing content. It's very engaging. Right?</MDBPopoverBody>
                 </MDBPopover>
            </div>
        )
    }
}

export default Home;