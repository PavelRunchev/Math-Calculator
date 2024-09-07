import React, { useState, useEffect, useRef } from 'react';

import globalStyle from '../../SASS-Modules/element.module.scss';
import globalContainerStyle from '../../SASS-Modules/container.module.scss';
import { MDBBtn, MDBIcon, MDBCollapse, MDBRange, MDBRadio, MDBSwitch, MDBInput, MDBCheckbox, MDBTooltip, 
    MDBSpinner, MDBProgress, MDBProgressBar, MDBPopover, MDBPopoverBody, MDBPopoverHeader 
} from 'mdb-react-ui-kit';

import { 
    mdbcssimportCode, 
    mdbimportUseCode, 
    mdbIconData, 
    mdbCarouselData,
    MDBBtnColorData,
    MDBBtnOutlineData,
    MDBCardData,
    MDBRangeData,
    MDBRadioBtnData,
    MDBRadioBtnInlineData,
    MDBSwitchBtnData,
    MDBInputData,
    MDBCheckboxData,
    MDBTooltipData,
    MDBDefaultSpinnerData,
    MDBGrowingSpinnerData,
    MDBBtnSpinnerData,
    MDBProgressData,
    MDBSelectData,
    MDBPopoverData,
    MDBPopoverDisabledElementData,
    MDBModalData,
    MDBScrollSpyData,
    DownloadZIPFile
} from '../../Services/codeData';

import Carousel from './mdbCarousel';
import PreTag from '../PreTag/preTag';
import Card from './mdbCard';
import Modal from './mdbModal';
import ScrollingModal from './mdbScrollingModal';
import ScrollSpy from './mdbScrollspy';

function MDBPage() {
    const [collapseOn1, setCollapseOn1] = useState<boolean>(false);
    const [collapseOn2, setCollapseOn2] = useState<boolean>(false);
    const [collapseOn3, setCollapseOn3] = useState<boolean>(false);
    const [collapseOn4, setCollapseOn4] = useState<boolean>(false);
    const [collapseOn5, setCollapseOn5] = useState<boolean>(false);
    const [collapseOn6, setCollapseOn6] = useState<boolean>(false);
    const [collapseOn7, setCollapseOn7] = useState<boolean>(false);
    const [collapseOn8, setCollapseOn8] = useState<boolean>(false);
    const [collapseOn9, setCollapseOn9] = useState<boolean>(false);
    const [collapseOn10, setCollapseOn10] = useState<boolean>(false);
    const [collapseOn11, setCollapseOn11] = useState<boolean>(false);
    const [collapseOn12, setCollapseOn12] = useState<boolean>(false);
    const [collapseOn13, setCollapseOn13] = useState<boolean>(false);
    const [collapseOn14, setCollapseOn14] = useState<boolean>(false);
    const [collapseOn15, setCollapseOn15] = useState<boolean>(false);
    const [collapseOn16, setCollapseOn16] = useState<boolean>(false);
    const [collapseOn17, setCollapseOn17] = useState<boolean>(false);
    const [collapseOn18, setCollapseOn18] = useState<boolean>(false);
    const [collapseOn19, setCollapseOn19] = useState<boolean>(false);
    const [collapseOn20, setCollapseOn20] = useState<boolean>(false);

    const ul = useRef<any>(null);

    useEffect(() => {
        setAllScrollSpyElements(0);

        window.addEventListener("scroll", () => {
            let scrollPercentage = ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;

            if(scrollPercentage <= 10) {
                //install guide
                setAllScrollSpyElements(0);
            } else if(scrollPercentage > 10 && scrollPercentage <= 14) {
                //Icons
                setAllScrollSpyElements(1);
            } else if(scrollPercentage > 14 && scrollPercentage <= 24) {
                //Carousel
                setAllScrollSpyElements(2);
            } else if(scrollPercentage > 24 && scrollPercentage <= 32) {
                //Buttons
                setAllScrollSpyElements(3);
            } else if(scrollPercentage > 32 && scrollPercentage <= 37) {
                //Cards
                setAllScrollSpyElements(4);
            } else if(scrollPercentage > 37 && scrollPercentage <= 44) {
                //Popovers
                setAllScrollSpyElements(5);
            } else if(scrollPercentage > 44 && scrollPercentage <= 49) {
                //Progress
                setAllScrollSpyElements(6);
            } else if(scrollPercentage > 49 && scrollPercentage <= 57) {
                //Spinners
                setAllScrollSpyElements(7);
            } else if(scrollPercentage > 57 && scrollPercentage <= 61) {
                //Tooltips
                setAllScrollSpyElements(8);
            } else if(scrollPercentage > 61 && scrollPercentage <= 63) {
                //Checkbox
                setAllScrollSpyElements(9);
            } else if(scrollPercentage > 63 && scrollPercentage <= 66) {
                //Input Field
                setAllScrollSpyElements(10);
            } else if(scrollPercentage > 66 && scrollPercentage <= 70) {
                //Switch
                setAllScrollSpyElements(11);
            } else if(scrollPercentage > 70 && scrollPercentage <= 75) {
                //Radio button
                setAllScrollSpyElements(12);
            } else if(scrollPercentage > 75 && scrollPercentage <= 80) {
                //Range
                setAllScrollSpyElements(13);
            } else if(scrollPercentage > 80 && scrollPercentage <= 85) {
                //Vertical scroll
                setAllScrollSpyElements(14);
            } else if(scrollPercentage > 85 && scrollPercentage <= 88) {
                //Select
                setAllScrollSpyElements(15);
            } else if(scrollPercentage > 88 && scrollPercentage <= 92) {
                //Modal
                setAllScrollSpyElements(16);
            } else if(scrollPercentage > 92 && scrollPercentage <= 97) {
                //Scroll Spy
                setAllScrollSpyElements(17);
            } else if(scrollPercentage > 97 && scrollPercentage <= 100) {
                //Download zip file
                setAllScrollSpyElements(18);
            }
        });
      }, []);

    function setAllScrollSpyElements(currentElement: number) {
        if(ul.current) {
            //every currentElemnt (number) corresponding on Li in ul ScrollSpyContainer element as array
            Array.from(ul.current.querySelectorAll("li"))
                .map((li: any, i: number) => {
                    if(currentElement === i) {
                        li.style.borderLeftColor = 'hsl(217,55%,49%)';
                        li.firstChild.style.color = 'hsl(217,55%,49%)';
                        li.firstChild.style.fontWeight = 'bold';
                    } else {
                        li.style.borderLeftColor = 'transparent';
                        li.firstChild.style.color = 'hsl(0, 0%, 31%)';
                        li.firstChild.style.fontWeight = 'normal';
                    }

                    return li;
                });
        }
    }

    return (
        <section className={globalContainerStyle.globalContainer}>
            <br id='install-guide'/>
            <div className={globalContainerStyle.ScrollSpyContainer}>
                    <ul ref={ul}>
                        {/* when clicked a tag are set hover color from setAllScrollSpyElements function */}
                        <li onClick={() => setAllScrollSpyElements(1)}><a href='#install-guide'>Install Guide</a></li>
                        <li onClick={() => setAllScrollSpyElements(1)}><a href='#icons'>Icons</a></li>
                        <li onClick={() => setAllScrollSpyElements(2)}><a href='#carousel'>Carousel</a></li>
                        <li onClick={() => setAllScrollSpyElements(3)}><a href='#buttons'>Buttons</a></li>
                        <li onClick={() => setAllScrollSpyElements(4)}><a href='#cards'>Cards</a></li>
                        <li onClick={() => setAllScrollSpyElements(5)}><a href='#popovers'>Popovers</a></li>
                        <li onClick={() => setAllScrollSpyElements(6)}><a href='#progress'>Progress</a></li>
                        <li onClick={() => setAllScrollSpyElements(7)}><a href='#spinners'>Spinners</a></li>
                        <li onClick={() => setAllScrollSpyElements(8)}><a href='#tooltips'>Tooltips</a></li>
                        <li onClick={() => setAllScrollSpyElements(9)}><a href='#checkbox'>Checkbox</a></li>
                        <li onClick={() => setAllScrollSpyElements(10)}><a href='#input-field'>Input field</a></li>
                        <li onClick={() => setAllScrollSpyElements(11)}><a href='#switch'>Switch</a></li>
                        <li onClick={() => setAllScrollSpyElements(12)}><a href='#radio-button'>Radio button</a></li>
                        <li onClick={() => setAllScrollSpyElements(13)}><a href='#range'>Range</a></li>
                        <li onClick={() => setAllScrollSpyElements(14)}><a href='#vertical-scroll'>Vertical scroll</a></li>
                        <li onClick={() => setAllScrollSpyElements(15)}><a href='#select'>Select</a></li>
                        <li onClick={() => setAllScrollSpyElements(16)}><a href='#modal'>Modal</a></li>
                        <li onClick={() => setAllScrollSpyElements(17)}><a href='#scroll-spy'>Scroll Spy</a></li>
                        <li onClick={() => setAllScrollSpyElements(18)}><a href='#download-zip'>Download zip</a></li>
                    </ul>
            </div>
            
            <div className={`p-4 ${globalContainerStyle.globalMainContainer}`}>
                <div className={globalContainerStyle.globalTitleContainer}>
                    <div className={globalStyle.globalTitle}>
                        <h2 className={globalStyle.h2}>Material Design Bootstrap</h2>
                    </div>
                </div>

              

                <h3 className='text-center mt-5'><b className={globalStyle.globalColorElement}>React</b> Install guide</h3>
                <h5>Manual installation</h5>
                <p>Download the package</p>
                <div>
                    <MDBBtn tag='a' className='font-weight' href="http://localhost:3000/MDB5-REACT-UI-KIT-Free-8.0.0.zip" download="MDB5-REACT-UI-KIT-Free-8.0.0.zip">MDB REACT UI KIT DOWNLOAD &nbsp;  <MDBIcon fas icon="download" size='1x'/></MDBBtn>
                </div>
                <p></p>
                <h5>Install dependecies.</h5>
                <pre>npm install mdb-react-ui-kit</pre>
                <h5>Install Font Awesome.</h5>
                <pre>npm install @fortawesome/fontawesome-free</pre>
                <h5>CSS import in index.js</h5>
                <p>Add the following lines in your index.js or index.tsx file before the App.js file import:</p>
                <PreTag content={mdbcssimportCode} platform={'JSX / TSX'}/>
                <h5>Usage.</h5>
                <p>How use in code example.</p>
                <PreTag content={mdbimportUseCode} platform={'JSX / TSX'}/>
                <hr className='mt-3 mb-2'/>
                <br id='icons' className='mb-5'/>
            
                <h5 className={globalStyle.globalColorElement}><b>Icons</b></h5>
                <p>You can place icons just about anywhere using MDBIcon and an icon name in the icon property. Icons are designed to be used with inline elements (we like the &#60;i&#62; tag for brevity, but using a &#60;span&#62; is more semantically correct).</p>
                <p>To increase icon sizes relative to their container, use size prop with xs, sm, lg (33% increase), or use literal sizes (to scale it from 1x to 10x) 2x, 3x, 4x, 5x, 6x, 7x, 8x, 9x, 10x.</p>
                <PreTag content={mdbIconData} platform={'JSX / TSX'}/>
                <hr className='mb-5'/>
                <br id='carousel' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>Carousel</b></h5>
                <p>Responsive Carousel built with Bootstrap 5, React 18 and Material Design 2.0. Slider examples with indicators, captions, image and multiple item carousel.</p>
                <Carousel />

                <MDBBtn tag='a' onClick={() => setCollapseOn1(!collapseOn1)} className={globalStyle.mainBtn}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn1}>
                    <PreTag content={mdbCarouselData} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <hr className='mt-3 mb-2'/>
                <br id='buttons' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>Buttons</b></h5>
                <p>Use MDB custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
                <p>MDB includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
                <p>Colors</p>
                <div>
                    <MDBBtn>Primary</MDBBtn>
                    <MDBBtn className='mx-2' color='secondary'>Secondary</MDBBtn>
                    <MDBBtn color='success'>Success</MDBBtn>
                    <MDBBtn className='mx-2' color='danger'>Danger</MDBBtn>
                    <MDBBtn color='warning'>Warning</MDBBtn>
                    <MDBBtn className='mx-2' color='info'>Info</MDBBtn>
                    <MDBBtn className='text-dark' color='light'>Light</MDBBtn>
                    <MDBBtn className='mx-2' color='dark'>Dark</MDBBtn>
                    <MDBBtn color='link'>Link</MDBBtn>
                </div>
                <MDBBtn tag='a' onClick={() => setCollapseOn2(!collapseOn2)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn2}>
                    <PreTag content={MDBBtnColorData} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <p>Outline</p>
                <div>
                    <MDBBtn outline>Primary</MDBBtn>
                    <MDBBtn outline className='mx-2' color='secondary'>Secondary</MDBBtn>
                    <MDBBtn outline color='success'>Success</MDBBtn>
                    <MDBBtn outline className='mx-2' color='danger'>Danger</MDBBtn>
                    <MDBBtn outline color='warning'>Warning</MDBBtn>
                    <MDBBtn outline className='mx-2' color='info'>Info</MDBBtn>
                    <MDBBtn outline color='light'>Light</MDBBtn>
                    <MDBBtn outline className='mx-2' color='dark'>Dark</MDBBtn>
                    <MDBBtn outline color='link'>Link</MDBBtn>
                </div>
                <MDBBtn tag='a' onClick={() => setCollapseOn3(!collapseOn3)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn3}>
                    <PreTag content={MDBBtnOutlineData} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <hr className='mt-3 mb-2'/>
                <br id='cards' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>Cards</b></h5>
                <p>A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.</p>
                <p>Image with ripple and hover effect</p>
                <p>To add a ripple effect and subtle hover effect you need to modify the HTML markup of the card image.</p>
                <div className='d-flex flex-column flex-md-row justify-content-evenly'>
                    <Card imageUrl={'https://mdbootstrap.com/img/new/standard/nature/111.webp'}/>
                    <Card imageUrl={'https://mdbootstrap.com/img/new/standard/nature/182.webp'}/>
                </div>

                <MDBBtn tag='a' onClick={() => setCollapseOn4(!collapseOn4)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn4}>
                    <PreTag content={MDBCardData} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <hr className='mt-3 mb-2'/>
                <br id='popovers' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>Popovers</b></h5>
                <p>Documentation and examples for adding popovers, like those found in iOS, to any element on your site.</p>
                <p className='mt-3'><b>Basic example</b></p>
                <div className='d-flex flex-column flex-md-row justify-content-evenly'>
                    <MDBPopover size='lg' color='success' btnChildren='Click to toggle popover' placement='top'>
                        <MDBPopoverHeader>Popover title</MDBPopoverHeader>
                        <MDBPopoverBody>And here's some amazing content. It's very engaging. Right?</MDBPopoverBody>
                    </MDBPopover>
                </div>
                <MDBBtn tag='a' onClick={() => setCollapseOn5(!collapseOn5)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn5}>
                    <PreTag content={MDBPopoverData} platform={'JSX / TSX'}/>
                </MDBCollapse>

                <p className='mt-3'><b>Dismiss on next click</b></p>
                <p>Use the <b className={globalStyle.globalColorElement}>dismiss</b> trigger to dismiss popovers on the user’s next click of a different element than the toggle element.</p>
                <MDBPopover size='lg' color='dark' btnChildren='Dismissible popover' dismiss  placement='right'>
                    <MDBPopoverHeader>Dismissible popover</MDBPopoverHeader>
                    <MDBPopoverBody>And here's some amazing content. It's very engaging. Right?</MDBPopoverBody>
                </MDBPopover>
                <p className={globalStyle.globalColorElement}>No need to implement code!</p>

                <p className='mt-3'><b>Disabled element</b></p>
                <p>Elements with the <b className={globalStyle.globalColorElement}>disabled</b> attribute aren’t interactive, meaning users cannot click them to trigger a popover (or tooltip). As a workaround create <b className={globalStyle.globalColorElement}>btnChildren</b> element with attribute <b className={globalStyle.globalColorElement}>disable</b> and change wrapper tag <b className={globalStyle.globalColorElement}>tag='span'</b>.</p>
                <div className='d-flex flex-column flex-md-row justify-content-evenly'>
                    <MDBPopover tag='span' btnClassName='d-inline-block' placement='top'
                        btnChildren={<MDBBtn disabled>Disabled button</MDBBtn>}
                    >
                        <MDBPopoverBody>Disabled Button</MDBPopoverBody>
                    </MDBPopover>
                </div>
                

                <MDBBtn tag='a' onClick={() => setCollapseOn6(!collapseOn6)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn6}>
                    <PreTag content={MDBPopoverDisabledElementData} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <hr className='mt-3 mb-2'/>
                <br id='progress' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>Progress</b></h5>
                <p>Documentation and examples for using custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.</p>
                <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don’t use the HTML5 &lt;progress&gt; element, ensuring you can stack progress bars, animate them, and place text labels over them.</p>
                <p>Add labels to your progress bars by placing text within the MDBProgress. To make the label visible you need to set a proper height to the bar.</p>
                <MDBProgress height='20'>
                    <MDBProgressBar bgColor='dark' width='0' valuemin={0} valuemax={100}>0%</MDBProgressBar>
                </MDBProgress>
                <br/>
                <MDBProgress height='20'>
                    <MDBProgressBar width='25' valuemin={0} valuemax={100}>25%</MDBProgressBar>
                </MDBProgress>
                <br/>
                <MDBProgress height='20'>
                    <MDBProgressBar bgColor='success' width='50' valuemin={0} valuemax={100}>50%</MDBProgressBar>
                </MDBProgress>
                <br/>
                <MDBProgress height='20'>
                    <MDBProgressBar bgColor='warning' width='75' valuemin={0} valuemax={100}>75%</MDBProgressBar>
                </MDBProgress>
                <br/>
                <MDBProgress height='20'>
                    <MDBProgressBar bgColor='dark' width='100' valuemin={0} valuemax={100}>100%</MDBProgressBar>
                </MDBProgress>
                <MDBBtn tag='a' onClick={() => setCollapseOn7(!collapseOn7)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn7}>
                    <PreTag content={MDBProgressData}/>
                </MDBCollapse>
                <hr className='mt-3 mb-2'/>
                <br id='spinners' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>Spinners</b></h5>
                <p>Indicate the loading state of a component or page with MDB spinners, built entirely with HTML, CSS, and no JavaScript.</p>
                <p><b>Colors</b></p>
                <p>The border spinner uses currentColor for its border-color, meaning you can customize the color with text color utilities. You can use any of our text color utilities on the standard spinner.</p>
                <div className='my-3'> 
                    <MDBSpinner color='primary'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                    <MDBSpinner className='mx-2' color='secondary'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                    <MDBSpinner color='success'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                    <MDBSpinner className='mx-2' color='warning'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                    <MDBSpinner color='danger'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                    <MDBSpinner className='mx-2' color='info'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                    <MDBSpinner color='light'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                    <MDBSpinner className='ms-2' color='dark'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                </div>
                <MDBBtn tag='a' onClick={() => setCollapseOn8(!collapseOn8)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn8}>
                    <PreTag content={MDBDefaultSpinnerData} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <p><b>Growing spinner</b></p>
                <p>If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</p>
                <p>Once again, this spinner is built with currentColor, so you can easily change its appearance with text color utilities. Here it is in blue, along with the supported variants.</p>
                <div className='my-3'>
                    <MDBSpinner grow color='primary'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                    <MDBSpinner grow className='mx-2' color='secondary'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                    <MDBSpinner grow color='success'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                    <MDBSpinner grow className='mx-2' color='warning'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                    <MDBSpinner grow color='danger'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                    <MDBSpinner grow className='mx-2' color='info'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                    <MDBSpinner grow color='light'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                    <MDBSpinner grow className='ms-2' color='dark'><span className='visually-hidden'>Loading...</span></MDBSpinner>
                </div>
                <MDBBtn tag='a' onClick={() => setCollapseOn9(!collapseOn9)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn9}>
                    <PreTag content={MDBGrowingSpinnerData} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <p><b>Buttons</b></p>
                <p>Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.</p>
                <div className='my-3'>
                    <MDBBtn disabled className='me-2' color='primary'>
                        <MDBSpinner size='sm' role='status' tag='span' />
                        <span className='visually-hidden'>Loading...</span>
                    </MDBBtn>

                    <MDBBtn disabled outline color='success'>
                        <MDBSpinner size='sm' role='status' tag='span' className='me-2' />
                        Loading...
                    </MDBBtn>
                </div>
                <MDBBtn tag='a' onClick={() => setCollapseOn10(!collapseOn10)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn10}>
                    <PreTag content={MDBBtnSpinnerData} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <hr className='mt-3 mb-2'/>
                <br id='tooltips' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>Tooltips</b></h5>
                <p>Documentation and examples for adding custom tooltips with React.</p>
                <p>Note: Read the API tab to find all available options and advanced customization</p>
                <p><b>Basic example</b></p>
                <div>
                    <p className='mb-0'>Hover the link to see the 
                        <MDBTooltip tag='a' wrapperProps={{ href: '#' }} placement='top' title="Hi! I'm a tooltip!"> tooltip</MDBTooltip>
                    </p>
                </div>
                <MDBBtn tag='a' onClick={() => setCollapseOn11(!collapseOn11)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn11}>
                    <PreTag content={MDBTooltipData} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <p>include placement='bottom' (top, right, bottom, left)</p>
                <p><b>Bottom position</b></p>
                <div className='my-3'>
                    <MDBTooltip wrapperProps={{ color: 'secondary' }} placement='bottom' title='Tooltip on bottom'>Tooltip on bottom</MDBTooltip>
                </div>
                <p><b>Left position</b></p>
                <div className='my-3'>
                    <p className='mb-0'>Hover the link to see the 
                        <MDBTooltip tag='a' wrapperProps={{ href: '#' }} placement='left' title="Hi! I'm a tooltip!"> tooltip</MDBTooltip>
                    </p>
                </div>
                <p><b>Right position</b></p>
                <div className='my-3'>
                    <p className='mb-0'>Hover the link to see the 
                        <MDBTooltip tag='a' wrapperProps={{ href: '#' }} placement='right' title="Hi! I'm a tooltip!"> tooltip</MDBTooltip>
                    </p>
                </div>
                <hr className='mt-3 mb-2'/>
                <br id='checkbox' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>Checkbox</b></h5>
                <p>The checkbox is a component used to allow a user to make multiple choices that are broadly used in forms and surveys. Checkboxes are used to select one or several options in a list, while radio (option) buttons are for selecting one option from many.</p>
                <p>Browser default checkboxes and radios are replaced with the help of .form-check, a series of classes for both input types that improves the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.</p>
                <div>
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Default checkbox' />
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Checked checkbox' defaultChecked />
                </div>
                <MDBBtn tag='a' onClick={() => setCollapseOn12(!collapseOn12)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn12}>
                    <PreTag content={MDBCheckboxData} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <hr className='mt-3 mb-2'/>
                <br id='input-field' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>Input field</b></h5>
                <p>Input fields refer specifically to the text input fields, which are used to obtain data from the users.</p>
                <p>A basic example of the input field consists of the input element with specified ID and label element connected via this ID with the input. Both elements are wrapped in .form-outline class which provides a material design look.</p>
                <div className='w-50 mx-auto'>
                    <MDBInput label="Example label" id="form1" type="text" />
                </div>
                <MDBBtn tag='a' onClick={() => setCollapseOn13(!collapseOn13)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn13}>
                    <PreTag content={MDBInputData} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <hr className='mt-3 mb-2'/>
                <br id='switch' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>Switch</b></h5>
                <p>A switch is a simple component used for activating one of two predefined options. Commonly used as an on/off button.</p>
                <p>A switch uses the MDBSwitch component to render a toggle switch. Switches also support the disabled prop.</p>
                <div>
                    <MDBSwitch id='flexSwitchCheckDefault' label='Default switch checkbox input' />
                    <br />
                    <MDBSwitch defaultChecked id='flexSwitchCheckChecked' label='Checked switch checkbox input' />
                    <br />
                    <MDBSwitch disabled id='flexSwitchCheckDisabled' label='Disabled switch checkbox input' />
                    <br />
                    <MDBSwitch defaultChecked disabled id='flexSwitchCheckCheckedDisabled' label='Disabled checked switch checkbox input' />
                </div>
                <MDBBtn tag='a' onClick={() => setCollapseOn14(!collapseOn14)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn14}>
                    <PreTag content={MDBSwitchBtnData} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <hr className='mt-3 mb-2'/>
                <br id='radio-button' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>Radio button</b></h5>
                <p>A Radio Button is a component used to allow a user to make a single choice among a number of options (whereas Checkboxes are used for selecting multiple options).</p>
                <p>Browser default checkboxes and radios are replaced with the help of .form-check, a series of classes for both input types that improves the layout and behavior of their HTML elements, that provide greater customization and cross browser consistency. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.</p>
                <p><b>Basic example</b></p>
                <div>
                    <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Default radio' />
                    <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='Default checked radio' defaultChecked />
                </div>
                <MDBBtn tag='a' onClick={() => setCollapseOn15(!collapseOn15)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn15}>
                    <PreTag content={MDBRadioBtnData} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <p><b>Inline</b></p>
                <p>Group checkboxes or radios on the same horizontal row by adding inline property.</p>
                <div>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='1' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='2' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='3 (disabled)' disabled inline />
                </div>
                <MDBBtn tag='a' onClick={() => setCollapseOn16(!collapseOn16)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn16}>
                    <PreTag content={MDBRadioBtnInlineData} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <hr className='mt-3 mb-2'/>
                <br id='range' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>Range</b></h5>
                <p>A Range is an interactive component that lets the user swiftly slide through possible values spread over the desired range.</p>
                <p>Create custom &lt;input type="range"&gt; controls with .form-range. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Firefox supports “filling” their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.</p>
                <MDBRange defaultValue={30} id='customRange' label='Example range' />
                <PreTag content={MDBRangeData} platform={'JSX / TSX'}/>

                <hr className='mt-3 mb-2'/>
                <br id='vertical-scroll' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>Vertical scroll</b></h5>
                <p>CSS style:</p>
                <pre>overflow: hidden;</pre>
                <p>and</p>
                <pre>overflow-y: scroll;</pre>
                <div className={globalContainerStyle.containerscroll}>
                <div className="">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque animi autem cum acceptenda perferendis iusto doloribus voluptate, quo exercitationem. Aliquid, provident non magnam quia repudiandae molestias dicta sed tenetur soluta quas minus eaque. Praesentium est commodi tempora laborum voluptatem, quis vitae aut perferendis facere expedita, dolores nisi ipsam necessitatibus soluta, natus itaque numquam illo animi eveniet non iure cum. Deserunt corrupti eaque vel modi debitis rerum libero deleniti facilis dolorum sequi! Nobis eum fugiat ipsa quaerat iste repellendus laboriosam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque animi autem cum acceptenda perferendis iusto doloribus voluptate, quo exercitationem. Aliquid, provident non magnam quia repudiandae molestias dicta sed tenetur soluta quas minus eaque. Praesentium est commodi tempora laborum voluptatem, quis vitae aut perferendis facere expedita, dolores nisi ipsam necessitatibus soluta, natus itaque numquam illo animi eveniet non iure cum. Deserunt corrupti eaque vel modi debitis rerum libero deleniti facilis dolorum sequi! Nobis eum fugiat ipsa quaerat iste repellendus laboriosam.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque animi autem cum acceptenda perferendis iusto doloribus voluptate, quo exercitationem. Aliquid, provident non magnam quia repudiandae molestias dicta sed tenetur soluta quas minus eaque. Praesentium est commodi tempora laborum voluptatem, quis vitae aut perferendis facere expedita, dolores nisi ipsam necessitatibus soluta, natus itaque numquam illo animi eveniet non iure cum. Deserunt corrupti eaque vel modi debitis rerum libero deleniti facilis dolorum sequi! Nobis eum fugiat ipsa quaerat iste repellendus laboriosam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque animi autem cum acceptenda perferendis iusto doloribus voluptate, quo exercitationem. Aliquid, provident non magnam quia repudiandae molestias dicta sed tenetur soluta quas minus eaque. Praesentium est commodi tempora laborum voluptatem, quis vitae aut perferendis facere expedita, dolores nisi ipsam necessitatibus soluta, natus itaque numquam illo animi eveniet non iure cum. Deserunt corrupti eaque vel modi debitis rerum libero deleniti facilis dolorum sequi! Nobis eum fugiat ipsa quaerat iste repellendus laboriosam.
                </div>
                </div>

                <hr className='mt-3 mb-2'/>
                <br id='select' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>Select</b></h5>
                <p>Select fields components are used for collecting user provided information from a list of options.</p>
                <div className="form-group w-25">
                    <label htmlFor="exampleFormControlSelect15" className="pl-3">Fruit</label>
                    <select   className={`form-control form-select ${globalStyle.formSelect}`} id="exampleFormControlSelect15">
                        <option value="lemon">Lemon</option>
                        <option value="banan">Banan</option>
                        <option value="orange">Orange</option>
                        <option value="apple">Apple</option>
                        <option value="ananas">Ananas</option>
                    </select>
                </div>
                <MDBBtn tag='a' onClick={() => setCollapseOn17(!collapseOn17)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn17}>
                    <PreTag content={MDBSelectData} platform={'JSX / TSX'}/>
                </MDBCollapse>

                <hr className='mt-3 mb-2'/>
                <br id='modal' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>Modal</b></h5>
                <p>Use MDB modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
                <p className={globalStyle.globalColorElement}><b>Basic example</b></p>
                <div>
                    <Modal />
                </div>
                <MDBBtn tag='a' onClick={() => setCollapseOn18(!collapseOn18)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn18}>
                    <PreTag content={MDBModalData} platform={'JSX / TSX'}/>
                </MDBCollapse>

                <p className={globalStyle.globalColorElement}><b>Scrolling long content</b></p>
                <p>When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</p>
                <div>
                    <ScrollingModal />
                </div>

                <hr className='mt-3 mb-2'/>
                <br id='scroll-spy' className='mb-5'/>

                <h5 className={globalStyle.globalColorElement}><b>ScrollSpy</b></h5>
                <p>Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.</p>
                <p><b>Basic example</b></p>
                <ScrollSpy />

                <MDBBtn tag='a' onClick={() => setCollapseOn19(!collapseOn19)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn19}>
                    <PreTag content={MDBScrollSpyData} platform={'JSX / TSX'}/>
                </MDBCollapse>

                <hr className='mt-3 mb-2'/>
                <br id='download-zip' className='mb-5'/>

                <h5  className={globalStyle.globalColorElement}><b>Download zip file</b></h5>
                <p>Example for download <b className={globalStyle.globalColorElement}>MDB5-REACT-UI-KIT-Free-8.0.0.zip</b> from <b className={`text-decoration-underline ${globalStyle.globalColorElement}`}>global public</b> folder react app!</p>
                <div>
                    <MDBBtn style={{ backgroundColor: '#ac2bac' }} tag='a' className='font-weight' href="http://localhost:3000/MDB5-REACT-UI-KIT-Free-8.0.0.zip" download="MDB5-REACT-UI-KIT-Free-8.0.0.zip">MDB REACT UI KIT DOWNLOAD &nbsp;  <MDBIcon fas icon="download" size='1x'/></MDBBtn>
                </div>
                <MDBBtn tag='a' onClick={() => setCollapseOn20(!collapseOn20)} className={`my-3 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOn20}>
                    <PreTag content={DownloadZIPFile} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <hr/>
            </div>
        </section>
    )     
}

export default MDBPage;