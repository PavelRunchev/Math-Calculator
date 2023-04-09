import React from "react";
import { MDBCardImage } from "mdb-react-ui-kit";
import loading from '../../public/loading.gif';



const Loading = () => {
    return (
        <div className="container-loading">
            <MDBCardImage className='ml-4 ml-lg-0' src={loading} fluid alt='loading' />
        </div>
    )
}


export default Loading;