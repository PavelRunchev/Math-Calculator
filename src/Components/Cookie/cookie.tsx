import React from 'react';

import { setCookie, getCookie } from 'react-use-cookie';
import GetRandomString from '../../Services/crypto';

//SASS styles components
import cookieStyle from './coockie.module.scss';
import globalStyle from '../../SASS-Modules/element.module.scss';

import { cookieHide } from '../../Services/cookieHideElement';

const token = GetRandomString();

function Cookie() {

    //accept cookie event
    function acceptAllCookies(e: any) {
        setCookie('jwt', token, { days: 1, Secure: true });

        const htmlCookie: HTMLElement = document.querySelector('.coockie_containerCookie__QCTjP')!;
        if(htmlCookie) {
            cookieHide(htmlCookie);
        }
    }

    return (
        <>
            {getCookie('jwt') === '' ? 
                <div className={`py-4 px-3 px-lg-2 ${cookieStyle.containerCookie}`}>
                    <span>{}</span>
                    <div className={`text-dark cookie-info ${cookieStyle.cookieInfo}`}>
                        We use cookies to ensure you have the best browsing experience on our website. By using our site, you acknowledge that you have read and understood our 
                        <span className="high-lighting">Cookie Policy</span> & <span className="high-lighting">Privacy Policy</span>
                    </div>
                    <button className={`${globalStyle.mainBtn} ml-0 ml-xl-3 ${cookieStyle.btnGotIt}`} onClick={(e) => acceptAllCookies(e)}>Got It!</button>
                </div> 
                : null
            }
        </>
    )
}

export default Cookie;