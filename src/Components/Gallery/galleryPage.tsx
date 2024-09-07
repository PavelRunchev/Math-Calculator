import { useState, useEffect } from 'react';
import { get, ref } from 'firebase/database';
import database from '../../firebaseConfig';
import { MDBBtn, MDBCollapse } from 'mdb-react-ui-kit';

import globalStyle from '../../SASS-Modules/element.module.scss';
import globalContainerStyle from '../../SASS-Modules/container.module.scss';

import ImageModel from '../Image/image.model';
import PreTag from '../PreTag/preTag';
import { 
    firebaseConfigFileData,
    firebaseReadDatabaseData,
    implementLazyLoadImageComponentData, 
    InstalllazyLoadImageComponentData 
} from '../../Services/codeData';

export default function GalleryPage() {
    const [gallery, setGallery] = useState<Array<any>>([]);

    const [collapseOn1, setCollapseOn1] = useState<boolean>(false);
    const [collapseOn2, setCollapseOn2] = useState<boolean>(false);
    const [collapseOn3, setCollapseOn3] = useState<boolean>(false);
    const [collapseOn4, setCollapseOn4] = useState<boolean>(false);

    useEffect(() => {
        const galleryRef = ref(database, 'gallery');
        get(galleryRef).then((data) => {
            if(data.exists()) {
                setGallery(data.val());
            }
        }).catch(err => console.log(err.message));

    }, []);

    return (
        <section className={globalContainerStyle.globalContainer}>
            <div className={`p-4 ${globalContainerStyle.globalMainContainer}`}>
                <div className={globalContainerStyle.globalTitleContainer}>
                    <div className={globalStyle.globalTitle}>
                        <h2 className={globalStyle.h2}>Lazy Load Image</h2>
                    </div>
                </div>

                <div className={globalContainerStyle.globalInnerContainer}>
                    {gallery.map(el => <div key={el._id} className='my-4'><ImageModel img={el}/></div>)}
                </div>

                <div className={globalContainerStyle.instructionContainer}>
                    <h4>Configure the real-time database in your project</h4>
                    <p>1. Install firebase using npm.</p>
                    <pre>npm install firebase</pre>
                    <p className='my-2'>2. Initialize the firebase and create a firebase app object.</p>
                    <MDBBtn tag='a' onClick={() => setCollapseOn1(!collapseOn1)} className={globalStyle.mainBtn}>Show Code</MDBBtn>
                    <MDBCollapse open={collapseOn1}>
                        <PreTag content={firebaseConfigFileData} platform={'JSX / TSX'}/>
                    </MDBCollapse>
                    <p className='my-2'>3. Read data on the firebase database.</p>
                    <MDBBtn tag='a' onClick={() => setCollapseOn2(!collapseOn2)} className={globalStyle.mainBtn}>Show Code</MDBBtn>
                    <MDBCollapse open={collapseOn2}>
                        <PreTag content={firebaseReadDatabaseData} platform={'JSX / TSX'}/>
                    </MDBCollapse>
                    <h4 className='my-3'>Install React Lazy Load Image Component</h4>
                    <p>The first thing we need to do is install the React lazy load image component and @types library using NPM.</p>
                    <MDBBtn tag='a' onClick={() => setCollapseOn3(!collapseOn3)} className={globalStyle.mainBtn}>Show Code</MDBBtn>
                    <MDBCollapse open={collapseOn3}>
                        <PreTag content={InstalllazyLoadImageComponentData} platform={'JSX / TSX'}/>
                    </MDBCollapse>
                    <p className='my-2'>Import the component and implement lazy load image.</p>
                    <MDBBtn tag='a' onClick={() => setCollapseOn4(!collapseOn4)} className={globalStyle.mainBtn}>Show Code</MDBBtn>
                    <MDBCollapse open={collapseOn4}>
                        <PreTag content={implementLazyLoadImageComponentData} platform={'JSX / TSX'}/>
                    </MDBCollapse>
                </div>
            </div>
        </section>
    )
}