import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MDBBtn, MDBCheckbox, MDBInput } from 'mdb-react-ui-kit';
import globalContainerStyle from '../../SASS-Modules/container.module.scss';
import globalStyle from '../../SASS-Modules/element.module.scss';

import { ValidateEmail } from '../../Services/checkFunctions';
import ReCAPTCHA from "react-google-recaptcha";
import recaptchav2Image from '../../public/images/recaptchav2Image.png';
const siteKey = '6LclyB0qAAAAAGL7gWvMnnh-kgtu4WYU7psr5LxZ';

function ReCaptchaV2() {
    const [reCaptcha, setReCaptcha] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
    const navigate = useNavigate();

    function inputChangeHandler(e: any) {
        if(e.target.value === '') {
            setIsValidEmail(false);
        } else if(ValidateEmail(e.target.value)) {
            setIsValidEmail(false);
            setEmail(e.target.value)
        } else {
            setIsValidEmail(true);
        }
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        if(ValidateEmail(email)) {
            setIsValidEmail(false);
            setEmail('');
            
            navigate('/');
        } else {
            setIsValidEmail(true);
        }
    }

    return (
        <>
            <div className={`p-5 ${globalContainerStyle.globalFormContainer}`}>
                <h3 className='text-center'>ReCaptcha V2</h3>
                <form onSubmit={handleSubmit}>
                <h5 className={`text-danger text-center mb-0 pt-3 ${isValidEmail ? globalStyle.show : globalStyle.hide}`}>This is not valid an email!</h5>
                    <MDBInput onChange={(e) => inputChangeHandler(e)} className='mb-4' type='email' id='form5Example2' label='Email address' />

                    <MDBCheckbox
                        wrapperClass='d-flex justify-content-center mb-4'
                        id='form5Example3'
                        label='I have read and agree to the terms'
                        defaultChecked
                        />

                    <div className='mt-5 d-flex justify-content-center'>
                        <ReCAPTCHA  sitekey={siteKey} onChange={(val: any) => setReCaptcha(val)} theme='dark' /> 
                    </div>
                    <MDBBtn type='submit' block disabled={!reCaptcha} >
                        Subscribe
                    </MDBBtn>
                </form>
            </div> 

            <h3 className='text-center mt-5'><b className={globalStyle.globalColorElement}>React</b> Google Recaptcha V2</h3>
            <h5 className='px-4 mt-3'>Install ReCaptcha V2</h5>
            <pre>npm install --save react-google-recaptcha</pre>
            <p className='mt-3'>For React + Typescript added below.</p>
            <pre>npm install --save @types/react-google-recaptcha</pre>
            <h5 className='px-4 mt-3'>Provide Recaptcha Key</h5>
            <p>
                To use react-google-recaptcha-v3, you need to create a recaptcha key for your domain, you can get one from 
                <Link 
                    to="https://www.google.com/recaptcha/about/" 
                    target="_blank"
                    className={globalStyle.globalColorElement}
                > 
                    <b> here</b>
                </Link>.
            </p>
            <h5 className='px-4 mt-3'>Usage</h5>
            <p>The default usage imports a wrapped component that loads the google recaptcha script asynchronously then instantiates a reCAPTCHA the user can then interact with.</p>
            <p>Code Example: </p>
            <img src={recaptchav2Image} className='img-fluid rounded shadow-4' alt='image-code' />
            <div className='mt-5'></div>
            <hr />
            <div className='mt-5'></div>
        </>
    )
}

export default ReCaptchaV2;