import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { get, ref } from 'firebase/database';
import database from '../../firebaseConfig';
import Loading from '../Loading/Loading';

interface State {
    gallery?: Array<any>,
    isLoadingData?: boolean
}

class Carousel extends React.Component<State, any> {
    constructor(props: State) {
        super(props);

        this.state = {
            galleryArray: [],
            isLoadingData: true
        }
    }

    componentDidMount(): void {
        const galleryRef = ref(database, 'gallery');
        get(galleryRef).then((data) => {
            if(data.exists()) {
                this.setState({ galleryArray: data.val()});
                this.setState({ isLoadingData: false});
            }
        }).catch(err => console.log(err.message));
    }

    render() {
        const { isLoadingData, galleryArray } = this.state;
        return (
            <>
                {!isLoadingData ? <div className='d-flex justify-content-center my-3'>
                    <MDBCarousel className='w-100' showControls showIndicators>
                        <MDBCarouselItem itemId={1}>
                        <img src={galleryArray[0].imgUrl} className='d-block w-100' alt='...' />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={2}>
                        <img src={galleryArray[1].imgUrl} className='d-block w-100' alt='...' />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={3}>
                        <img src={galleryArray[2].imgUrl} className='d-block w-100' alt='...' />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={4}>
                        <img src={galleryArray[6].imgUrl} className='d-block w-100' alt='...' />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={5}>
                        <img src={galleryArray[7].imgUrl} className='d-block w-100' alt='...' />
                        </MDBCarouselItem>
                    </MDBCarousel>
                </div> : <Loading />}
            </>
        );
    }
}

export default Carousel;