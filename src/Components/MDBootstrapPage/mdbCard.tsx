
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRipple } from 'mdb-react-ui-kit';
import cardStyle from './mdbCard.module.scss';

function Card({ imageUrl }: any) {
    return (
        <MDBCard className={cardStyle.cardElement}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={imageUrl} fluid alt='...' />
                <Link to='#'>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </Link>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
                <MDBBtn>Button</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    )
}

export default Card;