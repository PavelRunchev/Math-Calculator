import React from "react";

import loadingStyle from './loading.module.scss';

import { MDBCardImage } from "mdb-react-ui-kit";
import loading from "../../public/loading.gif";

const Loading = () => {
    return (
        <div className={loadingStyle.laodingContainer}>
            <MDBCardImage className={loadingStyle.laodingImage} src={loading} fluid alt='loading'/>
        </div>
    )
}

export default Loading;