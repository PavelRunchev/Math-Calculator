import { useState, useEffect } from 'react';
import { get, ref } from 'firebase/database';
import database from '../../firebaseConfig';
import { MDBBtn, MDBCollapse } from 'mdb-react-ui-kit';

import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

import globalContainerStyle from '../../SASS-Modules/container.module.scss';
import globalStyle from '../../SASS-Modules/element.module.scss';

import CardModel from './cardModel';
import { PaginationExampleCodeData, cardModelCode } from '../../Services/codeData';
import PreTag from '../PreTag/preTag';

function PaginationPage() {
    const [gallery, setGallery] = useState<Array<any>>([]);
    const [currentImages, setCurrentImages] = useState<Array<any>>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages: number = gallery.length / 3;

    const [collapseOne, setCollapseOne] = useState<boolean>(false);
    const [collapseTwo, setCollapseTwo] = useState<boolean>(false);

    useEffect(() => {
        const galleryRef = ref(database, 'gallery');
        get(galleryRef).then((data) => {
            if(data.exists()) {
                const startIndex: number = (currentPage * 3) - 3;
                const lastIndex: number = startIndex + 3;
                const updateCurrentPage: Array<any> = data.val().slice(startIndex, lastIndex);
                setCurrentImages(updateCurrentPage);
    
                setGallery(data.val());
            }
        }).catch(err => console.log(err.message));
    }, [currentPage]);

    function changePages(e: any) {
        setCurrentPage(e);
        const startIndex: number = (e * 3) - 3;
        const lastIndex: number = (e * 3 - 3) + 3
        setCurrentImages(gallery.slice(startIndex, lastIndex));
    }

    const currentPaginationArray = currentImages.map(el => <CardModel key={el._id}  imgUrl={el}/>);
        
    return (
        <section className={globalContainerStyle.globalContainer}>
            <div className={`p-4 ${globalContainerStyle.globalMainContainer}`}>
                <div className={globalContainerStyle.globalTitleContainer}>
                    <div className={globalStyle.globalTitle}>
                        <h2 className={globalStyle.h2}>Pagination</h2>
                    </div>
                </div>

                <div className='w-100 d-flex flex-column flex-md-row justify-content-around'>
                    {currentImages.length > 0 ? currentPaginationArray : <p>No data image!</p>}
                </div>

                <ResponsivePagination 
                    current={currentPage} 
                    total={totalPages} 
                    onPageChange={changePages}
                />

                <h3 className='text-center mt-5'><b className={globalStyle.globalColorElement}>React</b> Responsive Pagination</h3>
                <p>An accessible responsive React pagination component which intelligently renders to the available width - for React 16, 17 or 18</p>
                <pre>npm install react-responsive-pagination</pre>
                <p>Implement example code with data images from Firebase Realtime Database.</p>
                <MDBBtn tag='a' onClick={() => setCollapseOne(!collapseOne)} className={`mb-2 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseOne}>
                    <PreTag content={PaginationExampleCodeData} platform={'JSX / TSX'}/>
                </MDBCollapse>
                <p>Implement example code in cardModel.tsx.</p>
                <MDBBtn tag='a' onClick={() => setCollapseTwo(!collapseTwo)} className={`mb-2 ${globalStyle.mainBtn}`}>Show Code</MDBBtn>
                <MDBCollapse open={collapseTwo}>
                    <PreTag content={cardModelCode} platform={'JSX / TSX'}/>
                </MDBCollapse>
            </div>
        </section>
    )
}

export default PaginationPage;