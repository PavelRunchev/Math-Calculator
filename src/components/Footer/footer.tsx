import React from 'react';
import './footer.scss';

class Footer extends React.Component {
    render () {
        return (
            <footer className="footer-container">
                <div className="text-center text-light">&copy; 2022-2023 Powered by Pavel Runchev</div>
                <div className="text-center text-light">All rights reserved!</div>
            </footer>
        );
    }
}

export default Footer;