export const firebaseConfigFileData = " import { initializeApp } from \"firebase/app\";" +
    "\n import { getDatabase } from \"firebase/database\";" +
    "\n" +
    "\n const firebaseConfig = {" +
    "\n    apiKey: ...," +
    "\n    authDomain: ...," +
    "\n    databaseURL: ...," +
    "\n    projectId: ...," +
    "\n    storageBucket: ...," +
    "\n    messagingSenderId: ...," +
    "\n    appId: ..." +
    "\n };" +
    "\n" +
    "\n const app = initializeApp(firebaseConfig);" +
    "\n const database = getDatabase(app);" +
    "\n" +
    "\n export default database;";

export const firebaseReadDatabaseData = " import { useState, useEffect } from 'react';" +
    "\n import { get, ref } from 'firebase/database';" +
    "\n import database from '../../firebaseConfig';" +
    "\n" +
    "\n export default function Gallery() {" +
    "\n const [gallery, setGallery] = useState<Array<any>>([]);" +
    "\n" +
    "\n useEffect(() => {" +
    "\n     const galleryRef = ref(database, 'gallery');" +
    "\n     get(galleryRef).then((data) => {" +
    "\n         if(data.exists()) {" +
    "\n             setGallery(data.val());" +
    "\n         }" +
    "\n     }).catch(err => console.log(err.message));" +
    "\n" +
    "\n  }, []);" +
    "\n" +
    "\n     return (" +
    "\n         <section className={globalContainerStyle.globalContainer}>" +
    "\n             <div className={globalContainerStyle.globalInnerContainer}>" +
    "\n                 {gallery.map((el, i) => {" +
    "\n                    return <ImageModel key={el._id}  img={el}/>" +
    "\n                 })}" +
    "\n             </div>" +
    "\n         </section>" +
    "\n    )" +
    "\n }";

export const InstalllazyLoadImageComponentData = "npm i --save react-lazy-load-image-component" +
    "\nnpm i --save @types/react-lazy-load-image-component";

export const implementLazyLoadImageComponentData = "import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';" +
    "\nimport 'react-lazy-load-image-component/src/effects/blur.css';" +
    "\nimport imageStyle from './image.module.scss';" +
    "\n" +
    "\nconst ImageModel = ({ img, scrollPosition }: any) => {" +
    "\n  return (" +
    "\n    <div className={imageStyle.imageModelContainer}>" +
    "\n       <LazyLoadImage" +
    "\n         alt={img.alt}" +
    "\n         src={img.imgUrl}" +
    "\n         effect='blur'" +
    "\n         loading='lazy'" +
    "\n         wrapperProps={{ style: {transitionDelay: '1s'} }}" +
    "\n         scrollPosition={scrollPosition}" +
    "\n       />" +
    "\n       <span>{img.caption}</span>" +
    "\n    </div>" +
    "\n  )" +
    "\n}" +
    "\n" +
    "\nexport default trackWindowScroll(ImageModel);";

export const scrollTopToCurrentPageData = "import { useEffect } from 'react';" +
    "\nimport { useLocation } from 'react-router-dom';" +
    "\n" +
    "\nexport default function ScrollToTop({ children }: any) {" +
    "\n    const { pathname } = useLocation();" +
    "\n" +
    "\n    useEffect(() => {" +
    "\n        const canControlScrollRestoration = 'scrollRestoration' in window.history" +
    "\n        if (canControlScrollRestoration) {" +
    "\n             window.history.scrollRestoration = 'manual';" +
    "\n        }" +    
    "\n" +
    "\n        window.scrollTo(0, 0);" +
    "\n    }, [pathname]);" +
    "\n" +    
    "\n    return children;" +
    "\n}";

export const scrollTopFunctionToIndexJSData = "import ScrollToTop from './Services/scrollToTop';" +
    "\n" +
    "\nconst root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);" +
    "\n    root.render(" +
    "\n         <BrowserRouter>" +
    "\n             <ScrollToTop />" +
    "\n             <App />" +
    "\n         </BrowserRouter>" + 
    "\n);";


export const PaginationExampleCodeData = `import { useState, useEffect } from 'react';\nimport { get, ref } from 'firebase/database';\nimport database from '../../firebaseConfig';\n\nimport ResponsivePagination from 'react-responsive-pagination';\nimport 'react-responsive-pagination/themes/classic.css';\n\nimport globalContainerStyle from '../../SASS-Modules/container.module.scss';\nimport globalStyle from '../../SASS-Modules/element.module.scss';\nimport CardModel from './cardModel';\n\nfunction PaginationPage() {\n    const [gallery, setGallery] = useState<Array<any>>([]);\n    const [currentImages, setCurrentImages] = useState<Array<any>>([]);\n    const [currentPage, setCurrentPage] = useState<number>(1);\n    const totalPages: number = gallery.length / 3;\n\n    useEffect(() => {\n        const galleryRef = ref(database, 'gallery');\n        get(galleryRef).then((data) => {\n            if(data.exists()) {\n                const startIndex: number = (currentPage * 3) - 3;\n                const lastIndex: number = startIndex + 3;\n                const updateCurrentPage: Array<any> = data.val().slice(startIndex, lastIndex);\n                setCurrentImages(updateCurrentPage);\n\n                setGallery(data.val());\n            }\n        }).catch(err => console.log(err.message));\n    }, [currentPage]);\n\n    function changePages(e: any) {\n        setCurrentPage(e);\n        const startIndex: number = (e * 3) - 3;\n        const lastIndex: number = (e * 3 - 3) + 3\n        setCurrentImages(gallery.slice(startIndex, lastIndex));\n    }\n\n    const currentPaginationArray = currentImages.map((el, i) => {\n        return <CardModel key={el._id}  imgUrl={el}/>\n    });\n\n    return (\n        <section className={globalContainerStyle.globalContainer}>\n            <div className={\`p-4 \${globalContainerStyle.globalMainContainer}\`}>\n                ...\n                <div className='w-100 d-flex flex-column flex-md-row justify-content-around'>\n                    {currentImages.length > 0 ? currentPaginationArray : <p>No data image!</p>}\n                </div>\n\n                <ResponsivePagination\n                    current={currentPage}\n                    total={totalPages}\n                    onPageChange={changePages}\n                />\n                ...\n            </div>\n        </section>\n    )\n}\n\nexport default PaginationPage;`;

export const cardModelCode = `import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';\nimport globalContainerStyle from '../../SASS-Modules/container.module.scss';\nimport ImageModel from '../Image/image.model';\n\nexport default function CardModel({ imgUrl }: any) {\n     return (\n         <MDBCard className={\`my-5 \${globalContainerStyle.globalCard}\`}>\n             <div className='w-100'>\n                 <ImageModel img={imgUrl} className='h-75'/>\n             </div>\n             <MDBCardBody>\n                 <MDBCardText>\n                   Some quick example text to build on the card title and make up the bulk of the card's content.\n                 </MDBCardText>\n             </MDBCardBody>\n         </MDBCard>\n     );\n}`;

export const mdbcssimportCode = "import 'mdb-react-ui-kit/dist/css/mdb.min.css';" +
    "\nimport '@fortawesome/fontawesome-free/css/all.min.css';";

export const mdbimportUseCode = "import { MDBBtn, MDBIcon, ... } from 'mdb-react-ui-kit';";

export const mdbIconData = "<MDBIcon fab icon='mdb' />";

export const mdbCarouselData = "import React from 'react';" +
    "\nimport { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';" +
    "\nimport { get, ref } from 'firebase/database';" +
    "\nimport database from '../../firebaseConfig';" +
    "\nimport Loading from '../Loading/Loading';" +
    "\n" +
    "\ninterface State {" +
    "\n     gallery?: Array<any>," +
    "\n     isLoadingData?: boolean" +
    "\n}" +
    "\n" +
    "\nclass Carousel extends React.Component<State, any> {" +
    "\n    constructor(props: State) {" +
    "\n         super(props);" +
    "\n" +
    "\n         this.state = {" +
    "\n             galleryArray: []," +
    "\n             isLoadingData: true" +
    "\n         }" +
    "\n     }" +
    "\n" +
    "\n     componentDidMount(): void {" +
    "\n         const galleryRef = ref(database, 'gallery');" +
    "\n         get(galleryRef).then((data) => {" +
    "\n             if(data.exists()) {" +
    "\n                 this.setState({ galleryArray: data.val()});" +
    "\n                 this.setState({ isLoadingData: false});" +
    "\n             }" +
    "\n         }).catch(err => console.log(err.message));" +
    "\n     }" +
    "\n" +
    "\n     render() {" +
    "\n         const { isLoadingData, galleryArray } = this.state;" +
    "\n         return (" +
    "\n             <>" +
    "\n                 {!isLoadingData ? <div className='d-flex justify-content-center my-3'>" +
    "\n                     <MDBCarousel className='w-100' showControls showIndicators>" +
    "\n                         <MDBCarouselItem itemId={1}>" +
    "\n                         <img src={galleryArray[0].imgUrl} className='d-block w-100' alt='...' />" +
    "\n                         </MDBCarouselItem>" +
    "\n                         <MDBCarouselItem itemId={2}>" +
    "\n                         <img src={galleryArray[1].imgUrl} className='d-block w-100' alt='...' />" +
    "\n                         </MDBCarouselItem>" +
    "\n                         <MDBCarouselItem itemId={3}>" +
    "\n                         <img src={galleryArray[2].imgUrl} className='d-block w-100' alt='...' />" +
    "\n                         </MDBCarouselItem>" +
    "\n                         <MDBCarouselItem itemId={4}>" +
    "\n                         <img src={galleryArray[6].imgUrl} className='d-block w-100' alt='...' />" +
    "\n                         </MDBCarouselItem>" +
    "\n                         <MDBCarouselItem itemId={5}>" +
    "\n                         <img src={galleryArray[7].imgUrl} className='d-block w-100' alt='...' />" +
    "\n                         </MDBCarouselItem>" +
    "\n                     </MDBCarousel>" +
    "\n                 </div> : <Loading />}" +
    "\n             </>" +
    "\n         );" +
    "\n     }" +
    "\n}" +
    "\n" +
    "\nexport default Carousel;";

export const MDBBtnColorData = "<MDBBtn>Primary</MDBBtn>" +
    "\n<MDBBtn className='mx-2' color='secondary'>Secondary</MDBBtn>" +
    "\n<MDBBtn color='success'>Success</MDBBtn>" +
    "\n<MDBBtn className='mx-2' color='danger'>Danger</MDBBtn>" +
    "\n<MDBBtn color='warning'>Warning</MDBBtn>" +
    "\n<MDBBtn className='mx-2' color='info'>Info</MDBBtn>" +
    "\n<MDBBtn className='text-dark' color='light'>Light</MDBBtn>" +
    "\n<MDBBtn className='mx-2' color='dark'>Dark</MDBBtn>" +
    "\n<MDBBtn color='link'>Link</MDBBtn>";

export const MDBBtnOutlineData = "<MDBBtn outline>Primary</MDBBtn>" +
    "\n<MDBBtn outline className='mx-2' color='secondary'>Secondary</MDBBtn>" +
    "\n<MDBBtn outline color='success'>Success</MDBBtn>" +
    "\n<MDBBtn outline className='mx-2' color='danger'>Danger</MDBBtn>" +
    "\n<MDBBtn outline color='warning'>Warning</MDBBtn>" +
    "\n<MDBBtn outline className='mx-2' color='info'>Info</MDBBtn>" +
    "\n<MDBBtn outline color='light'>Light</MDBBtn>" +
    "\n<MDBBtn outline className='mx-2' color='dark'>Dark</MDBBtn>" +
    "\n<MDBBtn outline color='link'>Link</MDBBtn>";

export const MDBCardData = "import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRipple } from 'mdb-react-ui-kit';" +
    "\nimport cardStyle from './mdbCard.module.scss';" +
    "\n" +
    "\nfunction Card({ imageUrl }: any) {" +
    "\n     return (" +
    "\n         <MDBCard className={cardStyle.cardElement}>" +
    "\n             <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>" +
    "\n             <MDBCardImage src={imageUrl} fluid alt='...' />" +
    "\n                 <a>" +
    "\n                     <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>" +
    "\n                 </a>" +
    "\n             </MDBRipple>" +
    "\n             <MDBCardBody>" +
    "\n                 <MDBCardTitle>Card title</MDBCardTitle>" +
    "\n                     <MDBCardText>" +
    "\n                     Some quick example text to build on the card title and make up the bulk of the card's content." +
    "\n                     </MDBCardText>" +
    "\n                 <MDBBtn>Button</MDBBtn>" +
    "\n             </MDBCardBody>" +
    "\n         </MDBCard>" +
    "\n     )" +
    "\n}" +
    "\n" +
    "\nexport default Card;";

export const MDBRangeData = "<MDBRange defaultValue={30} id='customRange' label='Example range' />";

export const MDBRadioBtnData = "<div>" +
    "\n     <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Default radio' />" +
    "\n     <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='Default checked radio' defaultChecked />" +
    "\n</div>";

export const MDBRadioBtnInlineData = "<div>" +
    "\n     <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='1' inline />" +
    "\n     <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='2' inline />" +
    "\n     <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='3 (disabled)' disabled inline />" +
    "\n</div>";

export const MDBSwitchBtnData = "<div>" +
    "\n     <MDBSwitch id='flexSwitchCheckDefault' label='Default switch checkbox input' />" +
    "\n     <br />" +
    "\n     <MDBSwitch defaultChecked id='flexSwitchCheckChecked' label='Checked switch checkbox input' />" +
    "\n     <br />" +
    "\n     <MDBSwitch disabled id='flexSwitchCheckDisabled' label='Disabled switch checkbox input' />" +
    "\n     <br />" +
    "\n     <MDBSwitch defaultChecked disabled id='flexSwitchCheckCheckedDisabled' label='Disabled checked switch checkbox input' />" +
    "\n</div>";

export const MDBInputData = "<MDBInput label='Example label' id='form1' type='text' />";

export const MDBCheckboxData = "<div>" +
    "\n     <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Default checkbox' />" +
    "\n     <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Checked checkbox' defaultChecked />" +
    "\n</div>";

export const MDBTooltipData = "<p className='mb-0'>Hover the link to see the " +
    "\n     <MDBTooltip tag='a' wrapperProps={{ href: '#' }} placement='top' title='Hi! I'm a tooltip!'> tooltip</MDBTooltip>" +
    "\n</p>";

export const MDBDefaultSpinnerData = "<div className='my-3'>" +
    "\n     <MDBSpinner color='primary'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n     <MDBSpinner className='mx-2' color='secondary'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n     <MDBSpinner color='success'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n     <MDBSpinner className='mx-2' color='warning'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n     <MDBSpinner color='danger'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n     <MDBSpinner className='mx-2' color='info'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n     <MDBSpinner color='light'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n     <MDBSpinner className='ms-2' color='dark'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n</div>";

export const MDBGrowingSpinnerData = "<div className='my-3'>" +
    "\n     <MDBSpinner grow color='primary'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n     <MDBSpinner grow className='mx-2' color='secondary'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n     <MDBSpinner grow color='success'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n     <MDBSpinner grow className='mx-2' color='warning'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n     <MDBSpinner grow color='danger'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n     <MDBSpinner grow className='mx-2' color='info'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n     <MDBSpinner grow color='light'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n     <MDBSpinner grow className='ms-2' color='dark'><span className='visually-hidden'>Loading...</span></MDBSpinner>" +
    "\n</div>";

export const MDBBtnSpinnerData = "<div className='my-3'>" +
    "\n     <MDBBtn disabled className='me-2'>" +
    "\n         <MDBSpinner size='sm' role='status' tag='span' />" +
    "\n         <span className='visually-hidden'>Loading...</span>" +
    "\n     </MDBBtn>" +
    "\n" +
    "\n     <MDBBtn disabled>" +
    "\n         <MDBSpinner size='sm' role='status' tag='span' className='me-2' />" +
    "\n             Loading..." +
    "\n     </MDBBtn>" +
    "\n</div>";

export const MDBProgressData = "<MDBProgress height='20'>" +
    "\n     <MDBProgressBar bgColor='dark' width='0' valuemin={0} valuemax={100}>0%</MDBProgressBar>" +
    "\n</MDBProgress>" +
    "\n<br/>" +
    "\n<MDBProgress height='20'>" +
    "\n     <MDBProgressBar width='25' valuemin={0} valuemax={100}>25%</MDBProgressBar>" +
    "\n</MDBProgress>" +
    "\n<br/>" +
    "\n<MDBProgress height='20'>" +
    "\n     <MDBProgressBar bgColor='success' width='50' valuemin={0} valuemax={100}>50%</MDBProgressBar>" +
    "\n</MDBProgress>" +
    "\n<br/>" +
    "\n<MDBProgress height='20'>" +
    "\n     <MDBProgressBar bgColor='warning' width='75' valuemin={0} valuemax={100}>75%</MDBProgressBar>" +
    "\n</MDBProgress>" +
    "\n<br/>" +
    "\n<MDBProgress height='20'>" +
    "\n     <MDBProgressBar bgColor='dark' width='100' valuemin={0} valuemax={100}>100%</MDBProgressBar>" +
    "\n</MDBProgress>";

export const MDBSelectData = `<div className='form-group w-25'>\n     <label htmlFor='exampleFormControlSelect15' className='pl-3'>Fruit</label>\n     <select   className={\`form-control form-select \${globalStyle.formSelect}\`} id='exampleFormControlSelect15'>\n         <option value='lemon'>Lemon</option>\n         <option value='banan'>Banan</option>\n         <option value='orange'>Orange</option>\n         <option value='apple'>Apple</option>\n         <option value='ananas'>Ananas</option>\n     </select>\n</div>`;

export const MDBPopoverData = "<MDBPopover size='lg' color='warning' btnChildren='Click to toggle popover' placement='top'>" +
    "\n     <MDBPopoverHeader>Popover title</MDBPopoverHeader>" +
    "\n     <MDBPopoverBody>And here's some amazing content. It's very engaging. Right?</MDBPopoverBody>" +
    "\n</MDBPopover>";

export const MDBPopoverDisabledElementData = "<MDBPopover tag='span' btnClassName='d-inline-block' placement='top'" +
    "\n     btnChildren={<MDBBtn disabled>Disabled button</MDBBtn>}" +
    "\n>" +
    "\n     <MDBPopoverBody>Disabled Button</MDBPopoverBody>" +
    "\n</MDBPopover>";

export const MDBModalData = "import React, { useState } from 'react';" +
    "\nimport { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter } from 'mdb-react-ui-kit';" +
    "\n" +
    "\nfunction Modal() {" +
    "\n     const [basicModal, setBasicModal] = useState(false);" +
    "\n     const toggleOpen = () => setBasicModal(!basicModal);" +
    "\n" +
    "\n     return (" +
    "\n         <>" +
    "\n             <MDBBtn color='dark' onClick={toggleOpen}>LAUNCH DEMO MODAL</MDBBtn>" +
    "\n             <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>" +
    "\n                 <MDBModalDialog>" +
    "\n                     <MDBModalContent>" +
    "\n                         <MDBModalHeader>" +
    "\n                             <MDBModalTitle>Modal title</MDBModalTitle>" +
    "\n                             <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>" +
    "\n                         </MDBModalHeader>" +
    "\n                         <MDBModalBody>example text...</MDBModalBody>" +
    "\n                         <MDBModalFooter>" +
    "\n                             <MDBBtn color='secondary' onClick={toggleOpen}>Close</MDBBtn>" +
    "\n                             <MDBBtn>Save changes</MDBBtn>" +
    "\n                         </MDBModalFooter>" +
    "\n                     </MDBModalContent>" +
    "\n                 </MDBModalDialog>" +
    "\n             </MDBModal>" +
    "\n         </>" +
    "\n     );" +
    "\n}" +
    "\n" +
    "\nexport default Modal;";

export const MDBScrollSpyData = "import React, { useRef } from 'react';" +
    "\nimport { MDBCol, MDBContainer, MDBRow, MDBScrollspy, MDBScrollspyLink, MDBScrollspySubList } from 'mdb-react-ui-kit';" +
    "\n" +
    "\nfunction ScrollSpy() {" +
    "\n     const section1 = useRef(null);" +
    "\n     const section2 = useRef(null);" +
    "\n     const section3 = useRef(null);" +
    "\n     const section4 = useRef(null);" +
    "\n     const sectionA = useRef(null);" +
    "\n     const sectionB = useRef(null);" +
    "\n" +
    "\n     const containerRef = useRef(null);" +
    "\n     const subsections = [sectionA, sectionB];" +
    "\n" +
    "\n     return (" +
    "\n         <MDBContainer>" +
    "\n             <MDBRow>" +
    "\n                 <MDBCol md='8'>" +
    "\n                     <div id='element' ref={containerRef} className='scrollspy-example'" +
    "\n                         style={{position: 'relative', height: '200px', overflow: 'auto'}}" +
    "\n                     >" +
    "\n                         <section ref={section1} id='section-1'>" +
    "\n                             <h3>Section 1</h3>" +
    "\n                             <p>" +
    "\n                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error" +
    "\n                             maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis" +
    "\n                             quaerat accusamus numquam." +
    "\n                             </p>" +
    "\n                             <p>" +
    "\n                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error" +
    "\n                             maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis" +
    "\n                             quaerat accusamus numquam." +
    "\n                             </p>" +
    "\n                         </section>" +
    "\n                         <section ref={section2} id='section-2'>" +
    "\n                             <h3>Section 2</h3>" +
    "\n                             <p>" +
    "\n                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error" +
    "\n                             maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis" +
    "\n                             quaerat accusamus numquam." +
    "\n                             </p>" +
    "\n                             <p>" +
    "\n                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error" +
    "\n                             maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis" +
    "\n                             quaerat accusamus numquam." +
    "\n                             </p>" +
    "\n                         </section>" +
    "\n                         <section ref={section3} id='section-3'>" +
    "\n                             <h3>Section 3</h3>" +
    "\n                             <p>" +
    "\n                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error" +
    "\n                             maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis" +
    "\n                             quaerat accusamus numquam." +
    "\n                             </p>" +
    "\n                             <p>" +
    "\n                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error" +
    "\n                             maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis" +
    "\n                             quaerat accusamus numquam." +
    "\n                             </p>" +
    "\n                             <section ref={sectionA} id='subsection-a'>" +
    "\n                                 <h3>Subsection A</h3>" +
    "\n                                 <p>" +
    "\n                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error" +
    "\n                                 maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis" +
    "\n                                 quaerat accusamus numquam." +
    "\n                                 </p>" +
    "\n                                 <p>" +
    "\n                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error" +
    "\n                                 maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis" +
    "\n                                 quaerat accusamus numquam." +
    "\n                                 </p>" +
    "\n                             </section>" +
    "\n                             <section ref={sectionB} id='subsection-b'>" +
    "\n                                 <h3>Subsection B</h3>" +
    "\n                                 <p>" +
    "\n                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error" +
    "\n                                 maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis" +
    "\n                                 quaerat accusamus numquam." +
    "\n                                 </p>" +
    "\n                                 <p>" +
    "\n                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error" +
    "\n                                 maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis" +
    "\n                                 quaerat accusamus numquam." +
    "\n                                 </p>" +
    "\n                             </section>" +
    "\n                         </section>" +
    "\n                         <section ref={section4} id='section-4'>" +
    "\n                             <h3>Section 4</h3>" +
    "\n                             <p>" +
    "\n                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error" +
    "\n                             maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis" +
    "\n                             quaerat accusamus numquam." +
    "\n                             </p>" +
    "\n                             <p>" +
    "\n                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error" +
    "\n                             maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis" +
    "\n                             quaerat accusamus numquam." +
    "\n                             </p>" +
    "\n                         </section>" +
    "\n                     </div>" +
    "\n                 </MDBCol>" +
    "\n" +
    "\n                 <MDBCol md='4'>" +
    "\n                     <MDBScrollspy container={containerRef}>" +
    "\n                         <MDBScrollspyLink targetRef={section1}>Section 1</MDBScrollspyLink>" +
    "\n                         <MDBScrollspyLink targetRef={section2}>Section 2</MDBScrollspyLink>" +
    "\n                         <MDBScrollspyLink subsections={subsections} targetRef={section3}>" +
    "\n                             Section 3" +
    "\n                         </MDBScrollspyLink>" +
    "\n                         <MDBScrollspySubList className='ps-3'>" +
    "\n                             <MDBScrollspyLink targetRef={sectionA}>Subsection A</MDBScrollspyLink>" +
    "\n                             <MDBScrollspyLink targetRef={sectionB}>Subsection B</MDBScrollspyLink>" +
    "\n                         </MDBScrollspySubList>" +
    "\n                         <MDBScrollspyLink targetRef={section4}>Section 4</MDBScrollspyLink>" +
    "\n                     </MDBScrollspy>" +
    "\n                 </MDBCol>" +
    "\n             </MDBRow>" +
    "\n         </MDBContainer>" +
    "\n     );" +
    "\n}" +
    "\n" +
    "\nexport default ScrollSpy;";

export const DownloadZIPFile = "<MDBBtn tag='a' className='font-weight'" +
    "\n     href='http://localhost:3000/MDB5-REACT-UI-KIT-Free-8.0.0.zip'" +
    "\n     download='MDB5-REACT-UI-KIT-Free-8.0.0.zip'" +
    "\n>" +
    "\n     MDB REACT UI KIT DOWNLOAD &nbsp;" +
    "\n     <MDBIcon fas icon='download' size='1x'/>" +
    "\n</MDBBtn>";

export const JuniorQuestion2 = "let x = 2;" +
    "\nconst y = 3" +
    "\nx = 5; //valid" +
    "\ny = 10; //invalid - will throw an error!";

export const JuniorQuestion3 = "1 == '1'; // true - 1 is converted to a string" +
    "\n1 === '1'; // false - they are not the same type of value";

export const JuniorQuestion4 = `const person = {\n     name: 'Anna',\n     age: 28,\n     printName: function() {\n          console.log(\`Hello \${name}!\`);\n     }\n};`;

export const JuniorQuestion5 = `const numbers = [1, 2, 3, 4];\nconst fruits = ['apple', 'bananas', 'kiwi', 'orange'];\nconst array = [{}, [1, 2, 3], 'text'];`;

export const JuniorQuestion6 = "function sum(par1, par2) {" +
    "\n     return par1 + par2" +
    "\n};" +
    "\nconst func1 = function() { console.log('Test program.'); }; //anonymous function" +
    "\nconst func = () => { console.log('Hello Wold!'); }; //arraw function`;";

export const JuniorQuestion7 = "document.querySelector('.button')" +
    "\n     .addEventListener('click', function() {" +
    "\n         console.log('I am clicked!');" +
    "\n     }" +
    "\n);";

export const JuniorQuestion8 = "function fetchData(callback) {" +
    "\n     setTimeout(function() {" +
    "\n         const data = 'Some data';" +
    "\n         callback(data);" +
    "\n     }, 2000);" +
    "\n}" +
    "\n" +
    "\nfunction processData(data) {" +
    "\n     console.log('Data received: ' + data);" +
    "\n}" +
    "\n" +
    "\nfetchData(processData); //Output: Data received: Some data";

export const JuniorQuestion12 = "// math.js module export function" +
    "\nexport function add(a, b) { return a + b; }" +
    "\nexport function subtract(a, b) { return a - b; }" +
    "\n" +
    "\n// other js file" +
    "\nimport { add, subtract } from './math.js';" +
    "\n" +
    "\nconsole.log(add(5, 3), subtract(5, 3));";

export const JuniorQuestion16 = "let x; //declared available but not value" +
    "\nlet y = null; //has value null but has not type" +
    "\n" +
    "\nconsole.log(x); //show undefined " +
    "\nconsole.log(y); //show null" +
    "\n" +
    "\nconsole.log(null === undefined) //false (not the same type)" +
    "\nconsole.log(null == undefined) //true (but the same type)" +
    "\nconsole.log(null === null) //true (both type and value are the same)";

export const JuniorQuestion21 = "const foo = () => { console.log('foobar'); };" +
        "\nfoo(); //Invoke it using the variable" +
        "\n" +
        "\nfunction sayHello() { //return function" +
        "\n    return () => { console.log('Hello'); }" +
        "\n};" +
        "\n" +
        "\nfunction sayHello() { return 'Hello, '; }" +
        "\nfunction greeting(helloMessage, name) {" +
        "\n     console.log(helloMessage() + name);" +
        "\n}" +
        "\ngreeting(sayHello, 'JavaScript!'); passing a function as an argument"; 

export const JuniorQuestion23 = "const wm1 = new WeakMap();" +
    "\nconst wm2 = new WeakMap();" +
    "\nconst wm3 = new WeakMap();" +
    "\nconst o1 = {};" +
    "\nconst o2 = function () {};" +
    "\nconst o3 = window;" +
    "\n" +
    "\nwm1.set(o1, 37);" +
    "\nwm1.set(o2, 'azerty');";



export const JuniorQuestion31 = "const numbersOne = [1, 2, 3];" +
    "\nconst numbersTwo = [4, 5, 6];" +
    "\nconst numbersCombined = [...numbersOne, ...numbersTwo];" +
    "\n" +
    "\nconst myVehicle = {" +
    "\n     brand: 'Ford'," +
    "\n     model: 'Mustang'," +
    "\n     color: 'red'" +
    "\n}" +
    "\n" +
    "\nconst updateMyVehicle = {" +
    "\n     type: 'car'," +
    "\n     year: 2021," +
    "\n     color: 'yellow'" +
    "\n}" +
    "\n" +
    "\nconst myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}";

export const JuniorQuestion33Set = "let arr = ['apple', 'mango', 'apple', 'orange', 'mango', 'mango'];" +
    "\n" +
    "\nfunction removeDuplicates(arr) {" +
    "\n     return [...new Set(arr)];" +
    "\n}" +
    "\n" +
    "\nconsole.log(removeDuplicates(arr)); //output: ['apple', 'mango', 'orange']";

export const JuniorQuestion33filter = "let arr = ['apple', 'mango', 'apple', 'orange', 'mango', 'mango'];" +
    "\n" +
    "\nfunction removeDuplicates(arr) {" +
    "\n     return arr.filter((item, i) => arr.indexOf(item) === i);" +
    "\n}" +
    "\n" +
    "\nconsole.log(removeDuplicates(arr)); //output: ['apple', 'mango', 'orange']";

export const JuniorQuestion33forEach = "let arr = ['apple', 'mango', 'apple', 'orange', 'mango', 'mango'];" +
    "\n" +
    "\nfunction removeDuplicates(arr) {" +
    "\n     let uniqueArr = [];" +
    "\n     arr.forEach(el => {" +
    "\n         if (!uniqueArr.includes(el))" +
    "\n             uniqueArr.push(el);" +
    "\n     });" +
    "\n" +
    "\n     return uniqueArr;" +
    "\n}" +
    "\n" +
    "\nconsole.log(removeDuplicates(arr)); //output: ['apple', 'mango', 'orange']";
    
export const JSPromiseJuniorQuestion = "console.log('start');" +
    "\n" +
    "\nconst promise = new Promise((resolve, reject) => {" +
    "\n         console.log(1);" +
    "\n         resolve(2);" +
    "\n});" +
    "\n" +
    "\npromise.then((res) => console.log(res));" +
    "\n" +
    "\nconsole.log('end');";

export const JSPromiseJuniorResult = "Output: " +
    "\nstart" +
    "\n1" +
    "\nend" +
    "\n2";

export const JSPromiseSeniorQuestion = "const promise = new Promise((resolve, reject) => {" +
    "\n     console.log(1);" +
    "\n     setTimeout(() => {" +
    "\n         console.log('timerStart');" +
    "\n         resolve('success');" +
    "\n         console.log('timerEnd');" +
    "\n     }, 0);" +
    "\n" +
    "\n     console.log(2);" +
    "\n});" +
    "\n" +
    "\npromise.then((res) => {" +
    "\n    console.log(res);" +
    "\n});" +
    "\n" +
    "\nconsole.log(4);";

export const JSPromiseSeniorResult = "Output: " +
    "\n1" +
    "\n2" +
    "\n4" +
    "\ntimerStart" +
    "\ntimerEnd" +
    "\nsuccess";

