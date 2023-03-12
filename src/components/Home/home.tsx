import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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
            </div>
        )
    }
}

export default Home;