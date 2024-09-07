import React, { useRef } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBScrollspy, MDBScrollspyLink, MDBScrollspySubList } from 'mdb-react-ui-kit';

import globalStyle from '../../SASS-Modules/element.module.scss';
import globalContainerStyle from '../../SASS-Modules/container.module.scss';
import mdbMainPageStyle from './mdbMainPage.module.scss';
function MDBMainPage() {
    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);
    const section4 = useRef(null);
    const sectionA = useRef(null);
    const sectionB = useRef(null);

    const containerRef = useRef(null);
    const subsections = [sectionA, sectionB];

    return (
        <section className={globalContainerStyle.globalContainer}>
            
        <MDBContainer className={`p-4 ${globalContainerStyle.globalMainContainer}`}>
            <div className={globalContainerStyle.globalTitleContainer}>
                    <div className={globalStyle.globalTitle}>
                        <h2 className={globalStyle.h2}>Material Design Bootstrap</h2>
                    </div>
            </div>
            <MDBRow className={mdbMainPageStyle.row}>
                <MDBCol md='10'>
                    <div id='element' ref={containerRef} className='scrollspy-example' 
                        style={{position: 'relative', height: '700px', overflow: 'scroll'}}
                    >
                        <section ref={section1} id='section-1'>
                            <h3>Section 1</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            </section>
                        <section ref={section2} id='section-2'>
                            <h3>Section 2</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                        </section>
                        <section ref={section3} id='section-3'>
                            <h3>Section 3</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            <section ref={sectionA} id='subsection-a'>
                                <h3>Subsection A</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                                </p>
                            </section>
                            <section ref={sectionB} id='subsection-b'>
                                <h3>Subsection B</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                                </p>
                            </section>
                        </section>
                            <section ref={section4} id='section-4'>
                            <h3>Section 4</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                                quaerat accusamus numquam.
                            </p>
                        </section>
                    </div>
                </MDBCol>

                <MDBCol md='2' style={{ position: 'sticky', right: "0px" }}>
                    <MDBScrollspy container={containerRef}>
                        <MDBScrollspyLink targetRef={section1}>Section 1</MDBScrollspyLink>
                        <MDBScrollspyLink targetRef={section2}>Section 2</MDBScrollspyLink>
                        <MDBScrollspyLink subsections={subsections} targetRef={section3}>
                        Section 3
                        </MDBScrollspyLink>
                        <MDBScrollspySubList className='ps-3'>
                        <MDBScrollspyLink targetRef={sectionA}>Subsection A</MDBScrollspyLink>
                        <MDBScrollspyLink targetRef={sectionB}>Subsection B</MDBScrollspyLink>
                        </MDBScrollspySubList>
                        <MDBScrollspyLink targetRef={section4}>Section 4</MDBScrollspyLink>
                    </MDBScrollspy>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
            
        </section>
    )
}

export default MDBMainPage;