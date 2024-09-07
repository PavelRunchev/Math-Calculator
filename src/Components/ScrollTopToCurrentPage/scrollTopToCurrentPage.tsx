import React from 'react';

import globalStyle from '../../SASS-Modules/element.module.scss';
import globalContainerStyle from '../../SASS-Modules/container.module.scss';

import { scrollTopToCurrentPageData, scrollTopFunctionToIndexJSData } from '../../Services/codeData';
import PreTag from 'Components/PreTag/preTag';

function ScrollTopToCurrentPage() {
    return (
        <section className={globalContainerStyle.globalContainer}>
            <div className={`p-4 ${globalContainerStyle.globalMainContainer}`}>
                <div className={globalContainerStyle.globalTitleContainer}>
                    <div className={globalStyle.globalTitle}>
                        <h2 className={globalStyle.h2}>Scroll Top to Current Page</h2>
                    </div>
                </div>

                <div>
                    <h4>Create function ScrollTopToCurrentPage show to below</h4>
                    <PreTag content={scrollTopToCurrentPageData} platform={'JSX / TSX'} />

                    <h4>Include in index.js or index.ts to following.</h4>
                    <PreTag content={scrollTopFunctionToIndexJSData} platform={'JSX / TSX'} />
                </div>
            </div>
        </section>
    )

}

export default ScrollTopToCurrentPage;