import React, { useState } from 'react';

import { MDBIcon } from 'mdb-react-ui-kit';
import preTagStyle from './preTag.module.scss';

function PreTag({ content, platform }: any) {
    const [copy, setCopy ] = useState<boolean>(true);
    const [paste, setPaste ] = useState<boolean>(false);

    function clickCopyHandler() {
        setCopy(false);
        setPaste(true);
        navigator.clipboard.writeText(content);
    }

    return (
        <div className={preTagStyle.preTagContainer}>
            <div className={preTagStyle.preTagCoppyContainer}>
                <span className={preTagStyle.preTagJSXspan}>{platform}</span>
                {copy ? <MDBIcon far icon="copy" size='2x' className={preTagStyle.preTagCopyIcon} onClick={clickCopyHandler}/> : null}
                {paste ? <MDBIcon far icon="paste" size='2x' className={preTagStyle.preTagCopyIcon}/> : null}
            </div>
            <pre className={preTagStyle.pre}>{content}</pre>
        </div>
    )
}

export default PreTag;