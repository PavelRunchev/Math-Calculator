
import globalContainerStyle from '../../SASS-Modules/container.module.scss';
import globalStyle from '../../SASS-Modules/element.module.scss';

import ReCaptchaV2 from './reCaptchaV2';
import ReCaptchaV3 from './reCaptchaV3';

function ReCaptchaPage() {
   

    return (
        <section className={globalContainerStyle.globalContainer}>

            <div className={`p-4 ${globalContainerStyle.globalMainContainer}`}>
                <div className={globalContainerStyle.globalTitleContainer}>
                    <div className={globalStyle.globalTitle}>
                        <h2 className={globalStyle.h2}>ReCaptcha</h2>
                    </div>
                </div>

                <ReCaptchaV2 />

                <ReCaptchaV3 />

            </div>
        </section>
    )
}

export default ReCaptchaPage;