import React from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';

function ErrorFallback({ error }: any) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  const { resetBoundary } = useErrorBoundary();
  return (
      <div className="container-error vh-100 w-100 d-flex justify-content-center align-items-center">
        <div className="container-inner-error w-50 flex-column justify-content-center align-items-center">
            <h2 className="text-center">Whoops, something went wrong.</h2>
            <h5 className="text-center">Please either refresh the page or return home to try again.</h5>
            <h5 className="text-center">If the issue continues, please 
                <Link className="ml-2 text-decoration-underline" to="/" onClick={() => window.location.href}>get in touch.</Link>
                
            </h5>
            <div className='my-4 d-flex justify-content-center'>
                <button className='btn-default' onClick={resetBoundary}>Go home</button>
            </div>
        </div>
      </div>
  );
}

export default ErrorFallback;