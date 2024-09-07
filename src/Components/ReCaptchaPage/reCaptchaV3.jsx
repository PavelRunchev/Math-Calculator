import React, { Component } from 'react';
import { MDBBtn, MDBCheckbox, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import globalContainer from '../../SASS-Modules/container.module.scss';
import globalStyle from '../../SASS-Modules/element.module.scss';
import recaptchav3Image from '../../public/images/recaptchav3Image.png';
const key = "6Le8ER8qAAAAAFVzhm3oBVcuBJhNRETbmW7p0nLg";

class ReCaptchaV3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      isErrorReCaptcha: false,
      isAccessReCaptcha: false,
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  componentDidMount() {
    const script = document.createElement("script")
    script.src = `https://www.google.com/recaptcha/api.js?render=${key}`
    script.addEventListener("load", () => {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(`${key}`, {action: 'homepage'})
          .then((token) => this.setState({ token: token }));
      });
    })
    document.body.appendChild(script)
  }

  onSubmitHandler(e) {
    e.preventDefault();
    if(this.state.token !== undefined) {
        this.setState({isAccessReCaptcha: true});
        this.setState({isErrorReCaptcha: false});
    } else {
        this.setState({isAccessReCaptcha: false});
        this.setState({ isErrorReCaptcha: true});
    }
  };

  render() {
    const { isErrorReCaptcha, isAccessReCaptcha } = this.state;
    return (
      <>
        <div className={`p-5 ${globalContainer.globalFormContainer}`}>
          <h3 className='text-center'>ReCaptcha V3</h3>

          <form onSubmit={this.onSubmitHandler} >
              <MDBInput className='mb-4' type='email' id='form5Example2' label='Email address' />
              <MDBCheckbox
                      wrapperClass='d-flex justify-content-center mb-4'
                      id='form5Example3'
                      label='I have read and agree to the terms'
                      defaultChecked
              />
              <div className="g-recaptcha"
                  data-sitekey={key}
                  data-size="invisible"
              >
              </div>
              <MDBBtn className={`d-block mx-auto w-50 ${globalStyle.mainBtn}`}>Verify recaptcha</MDBBtn>

              {isErrorReCaptcha ? <h5 className={`text-danger text-center mb-0 pt-3`}>The form is not success true!</h5> : null}
              {isAccessReCaptcha ? <h5 className={`text-primary text-center mb-0 pt-3`}>The form is access true!</h5> : null}
          </form>

        </div>

        <h3 className='text-center mt-5'><b className={globalStyle.globalColorElement}>React</b> Google Recaptcha V3</h3>
        <h5 className='px-4 mt-3'>Install ReCaptcha V3</h5>
        <pre>npm install --save react-google-recaptcha-v3</pre>
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
        <h5 className='px-4 mt-3'>GoogleReCaptchaProvider</h5>
        <p><b>react-google-recaptcha-v3</b> provides a <b className={globalStyle.globalColorElement}>GoogleReCaptchaProvider</b> provider component that should be used to wrap around your components.</p>
        <p><b className={globalStyle.globalColorElement}>GoogleReCaptchaProvider</b>'s responsibility is to load the necessary reCaptcha script and provide access to reCaptcha to the rest of your application.</p>
        <p>Usually, your application only needs one provider. You should place it as high as possible in your React tree. It's to make sure you only have one instance of Google Recaptcha per page and it doesn't reload unecessarily when your components re-rendered.</p>
        <h5 className='px-4 mt-3'>GoogleReCaptcha</h5>
        <p><b className={globalStyle.globalColorElement}>GoogleRecaptcha</b> is a react component that can be used in your app to trigger the validation. It provides a prop onVerify, which will be called once the verify is done successfully, also supports a prop refreshReCaptcha which supports any type of value and is used to force recaptcha to revalidate (you can use a timestamp updated after every submit), there is an example below.</p>
        <p className='text-primary'>Implement with class is not a hook!</p>
        <p>Code Example: </p>
        <img src={recaptchav3Image} className='img-fluid rounded shadow-4' alt='image-code' />
    </>
    )
  }
}

export default ReCaptchaV3;