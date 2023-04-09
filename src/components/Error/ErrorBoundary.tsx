import React, { Component, ErrorInfo, ReactNode } from  'react';
import { Link } from 'react-router-dom';

interface Props {
    children?: ReactNode;
}
  
interface State {
    hasError: boolean;
    shouldRedirect: boolean;
}

//worked correclty only in production mode
class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
        super(props);

        this.state = {
            hasError: false,
            shouldRedirect: false
        }
    }

    public static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.log(errorInfo);
	}

    redirectToHome = () => {
        this.setState({ shouldRedirect: true });
    }

	render () {

        if(this.state.shouldRedirect) {
            return window.location.href;
        }
	
		if(this.state.hasError) {
			return (
				<div className="container-error vh-100 w-100 d-flex justify-content-center align-items-center">
                    <div className="container-inner-error w-50 flex-column justify-content-center align-items-center">
                        <h2 className="text-center">Whoops, something went wrong.</h2>
                        <h5 className="text-center">Please either refresh the page or return home to try again.</h5>
                        <h5 className="text-center">If the issue continues, please 
                            <Link className="ml-2 text-decoration-underline" to="/" onClick={() => window.location.href}>get in touch.</Link>
                            
                        </h5>
                        <div className='my-4 d-flex justify-content-center'>
                            <button className='btn-default' onClick={this.redirectToHome}>Go home</button>
                        </div>
                    </div>
				</div>
			)	
		}

		return this.props.children;
	}
}

export default ErrorBoundary;


