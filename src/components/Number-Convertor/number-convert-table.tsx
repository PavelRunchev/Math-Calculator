import React, { useState } from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';

import { tableData } from '../../services/Data/data';

const NumberConvertTable = () => {
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);

    return (
        <>
            <MDBBtn tag='a' onClick={toggleShow}>Link</MDBBtn>
            
            <MDBCollapse show={showShow}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">Decimal</th>
                            <th scope="col">Binary</th>
                            <th scope="col">Hex</th>
                            <th scope="col">Octal</th>
                        </tr>
                    </thead>
                </table>
            </MDBCollapse>
        </>
    )
}

export default NumberConvertTable;