import React, { Component, ReactNode } from 'react';

import cookie from 'react-cookies';
import { cookieHide } from '../../services/cookieAnimation';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYXNkYXNkMzQ1M2UtcndlcjIhNDIzd2VyQDIzRFNGU0RSIyRAIzQyIiwiZXhwIjoxNjc5OTA4MzY0fQ.udHxjNrqtfY1iui8Fzv0ENYugUr3n9MV7Hal-XweK-s';

interface State {
    isShowCookie: boolean;
}

interface Props {
    children?: ReactNode;
}

class Cookie extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isShowCookie: false
        }
    }

    componentDidMount(): void {
        const cookieToken = cookie.load('jwt');
        if(cookieToken === null || cookieToken === undefined)
            this.setState({ isShowCookie: true });
    }

    acceptAllCookies = (ev: Object) => {
        //set cookie
        cookie.save('jwt', token,{ maxAge: 8640, path: '/', secure: true, httpOnly: false });

        //get html component cookie
        const htmlCookie: HTMLElement = document.querySelector('.container-cookie')!;
        //animation get hiding html cookie
        cookieHide(htmlCookie);
    }

    render() {
        const { isShowCookie } = this.state;

        if(isShowCookie === false) 
            return null;

        return (
            <div className="container-cookie py-4 px-3 px-lg-2">
                <span>{}</span>
                <div className="text-dark cookie-info">
                    We use cookies to ensure you have the best browsing experience on our website. By using our site, you acknowledge that you have read and understood our 
                    <span className="high-lighting">Cookie Policy</span> & <span className="high-lighting">Privacy Policy</span>
                </div>
                <button className=" btn-default btn-got-it ml-0 ml-xl-3" onClick={this.acceptAllCookies}>Got It!</button>
            </div>
        )
    }
}

export default Cookie;