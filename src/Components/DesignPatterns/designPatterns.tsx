import React from 'react';

import globalContainerStyle from '../../SASS-Modules/container.module.scss';
import globalStyle from '../../SASS-Modules/element.module.scss';

function DesignPatterns(): JSX.Element {
   
    return (
        <section className={globalContainerStyle.globalContainer}>
            <div className={`p-4 ${globalContainerStyle.globalMainContainer}`}>
                <div className={globalContainerStyle.globalTitleContainer}>
                    <div className={globalStyle.globalTitle}>
                        <h2 className={globalStyle.h2}>Design Patterns</h2>
                    </div>
                </div>


               

            </div>
        </section>
    )
}

export default DesignPatterns;