
import { MDBIcon } from 'mdb-react-ui-kit';
import toastrStyle from './toastr.module.scss';


function Toastr() {
    return (
        <div className={` ${toastrStyle.toastrContainer}`}>
            <div className={toastrStyle.toastrTitle}>
                <MDBIcon className={`ms-1 toastrIcon`} color='light' size='2x' />
            </div>
            <div className='toastr-body text-center'>

            </div>
        </div>
    )
}

export default Toastr;