
import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';
import globalContainerStyle from '../../SASS-Modules/container.module.scss';
import ImageModel from '../Image/image.model';

export default function CardModel({ imgUrl }: any) {
  return (
    <MDBCard className={`my-5 ${globalContainerStyle.globalCard}`}>
      <div className='w-100'>
        <ImageModel img={imgUrl} className="h-75"/>
      </div>
      <MDBCardBody>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}