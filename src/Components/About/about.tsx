

import aboutStyle from './about.module.scss';
import globalStyle from '../../SASS-Modules/element.module.scss';
import globalContainerStyle from '../../SASS-Modules/container.module.scss';

import devEnvImage from '../../public/development-environment.jpg';

export default function About() {
    return (
        <section className={globalContainerStyle.globalContainer}>

            <div className={globalContainerStyle.globalMainContainer}>
            <div className={globalContainerStyle.globalTitleContainer}>
                    <div className={globalStyle.globalTitle}>
                        <h2 className={globalStyle.h2}>About Us</h2>
                    </div>
                </div>

                <div className={aboutStyle.aboutSecondContainer}>
                    <p className={globalStyle.paragraph}>
                        When you have a great story about how your product or service was built to change lives, share it. 
                        The "About Us" page is a great place for it to live, too. Good stories humanize your brand, providing context and meaning for your product. 
                        What’s more, good stories are sticky -- which means people are more likely to connect with them and pass them on.
                    </p>
                    <p className={globalStyle.paragraph}>
                        Every company has a story to tell, so break out your storytelling skills from that random English class you took years ago and put them to work on your "About Us" page.
                        Using descriptive and emotive copy and gorgeous graphics, an "About Us" page with a story works harder for your business than a generic one.</p>
                    <img className={aboutStyle.aboutImage} src={devEnvImage} alt="img"/>
                    <p className={globalStyle.paragraph}>
                        People tend to think that "About Us" pages have to sound formal to gain credibility and trust. 
                        But most people find it easier to trust real human beings, rather than a description that sounds like it came from an automaton. 
                        Trying to sound too professional on your "About Us" page results in stiff, “safe” copy and design -- the perfect way to make sure your company blends in with the masses.
                    </p>
                    <p className={globalStyle.paragraph}>
                        When you’re designing your "About Us" page, avoid industry jargon and replace it with an authentic voice -- yours -- to describe your product or service. 
                        Sure, it needs to be polished and free of errors, but it should always sound friendly and real.
                    </p>
                </div>

                <div className={aboutStyle.aboutDevStudioContainer}>
                    <h3 className='text-center'>&nbsp; 
                        <span className={globalStyle.globalColorElement}>Developer Team </span>
                         - Studio 
                        <span className={globalStyle.globalColorElement}> RAIDERS </span> 
                        Team
                    </h3>
                </div>
            </div>
           
        </section>
    )
}