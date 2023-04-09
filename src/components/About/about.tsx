import React, { Component } from 'react';

import Navigation from '../Navigation/navigation';
import Footer from '../Footer/footer';

class About extends Component {
    render () {
        return (
            <>
                <Navigation />
                <div >
                    <h2>About Component</h2>
                </div>

                <Footer />
            </>
            
        )
    }
}

export default About;