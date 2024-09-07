
import React, { useState } from 'react';

import globalContainerStyle from '../../SASS-Modules/container.module.scss';
import toastr  from '../../Services/toastr';

import {
  MDBPopover, 
  MDBPopoverBody, 
  MDBPopoverHeader,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCarousel, 
  MDBCarouselItem,
  MDBTooltip,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBSwitch,
//   MDBIcon,
//   MDBTable, MDBTableHead, MDBTableBody
} from 'mdb-react-ui-kit';

export default function Home() {
    const [isError, setThrowError] = useState<boolean>(false);

    function throwErrorBtn(e: any) {
        setThrowError(true);
    }

    if(isError) {
        throw Error('Demo Error Boundary');
    }


    function showToastrInfo(e: any) {
        toastr('You have message', 'info');
    }

    function showToastrSuccess(e: any) {
        toastr('Logged successfully', 'success');
    }

    function showToastrWarning(e: any) {
        toastr('Denied access!', 'warning');
    }

    function showToastrDark(e: any) {
        toastr('Information!', 'dark');
    }


    return (
        <div className='home'>
                 <h1>Hello React 18</h1>

                <div className='mb-5'>
                    <MDBBtn className='me-1' color='info' onClick={showToastrInfo}>Info</MDBBtn>
                    <MDBBtn className='me-1' color='success' onClick={showToastrSuccess}>Success</MDBBtn>
                    <MDBBtn className='me-1' color='warning' onClick={showToastrWarning}>Warning</MDBBtn>
                    <MDBBtn className='me-1' color='danger' onClick={throwErrorBtn}>Error</MDBBtn>
                    <MDBBtn className='me-1' color='secondary'>Secondary</MDBBtn>
                    <MDBBtn className='me-1' color='light'>Light</MDBBtn>
                    <MDBBtn className='me-1' color='dark' onClick={showToastrDark}>Dark</MDBBtn>
                </div>

                <MDBPopover size='lg' color='danger' btnChildren='Click to toggle popover'>
                    <MDBPopoverHeader>Popover title</MDBPopoverHeader>
                    <MDBPopoverBody>And here's some amazing content. It's very engaging. Right?</MDBPopoverBody>
                </MDBPopover>

                <div className='mt-5'>
                <h3>Icons</h3>
                {/* <div className='d-flex justify-content-evenly'>
                    <MDBIcon className='ms1' fas icon="camera-retro" color='danger'  size='4x'/>
                    <MDBIcon className='ms1' fab icon="docker" color='success'  size='9x'/>
                    <MDBIcon className='ms1' far icon="copy" color='info'  size='3x'/>
                    <MDBIcon className='ms1' fas icon="angle-left" color='dark'  size='5x'/>
                    <MDBIcon className='ms-1' icon='camera' color='dark' size='5x' />
                </div> */}
                
                </div>

                <div className='d-flex justify-content-center my-3'>
                    <MDBCard className='w-25'>
                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </div>

                <div className='d-flex justify-content-center my-3'>
                <MDBCarousel className='w-50'>
                    <MDBCarouselItem itemId={1}>
                    <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={2}>
                    <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={3}>
                    <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
                    </MDBCarouselItem>
                </MDBCarousel>
                </div>


                <p className='mb-0'>
                Hover the link to see the
                <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Hi! I'm a tooltip!">
                    tooltip
                </MDBTooltip>
                </p>


                <div className='w-50 d-flex justify-content-center my-5'>

                    <MDBRow tag='form' className=' gy-2 gx-3 align-items-center'>
                    <MDBCol size='auto'>
                        <MDBInput id='form13Example1' label='Label' />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBCheckbox id='form13Example2' label='Checked' defaultChecked />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBInput id='form13Example3' label='Label' />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBSwitch id='form13Example4' label='Checked switch checkbox input' defaultChecked />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBBtn type='submit'>Submit</MDBBtn>
                    </MDBCol>
                    </MDBRow>

                </div>

                {/* <div className='d-flex justify-content-center my-3'>
                    <MDBTable>
                    <MDBTableHead light>
                        <tr>
                        <th scope='col'></th>
                        <th scope='col'>Product Detail Views</th>
                        <th scope='col'>Unique Purchases</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Product Revenue</th>
                        <th scope='col'>Avg. Price</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                        <th scope='col'>Value</th>
                        <td>18,492</td>
                        <td>228</td>
                        <td>350</td>
                        <td>$4,787.64</td>
                        <td>$13.68</td>
                        </tr>
                        <tr>
                        <th scope='col'>Percentage change</th>
                        <td className='text-danger'>
                            <MDBIcon className='me-1' fas icon='caret-down' />
                            -48.8%
                        </td>
                        <td className='text-success'>
                            <MDBIcon className='me-1' fas icon='caret-up' />
                            14.0%
                        </td>
                        <td className='text-success'>
                            <MDBIcon className='me-1' fas icon='caret-up' />
                            46.4%
                        </td>
                        <td className='text-success'>
                            <MDBIcon className='me-1' fas icon='caret-up' />
                            29.6%
                        </td>
                        <td className='text-danger'>
                            <MDBIcon className='me-1' fas icon='caret-down' />
                            -11.5%
                        </td>
                        </tr>
                        <tr>
                        <th scope='col'>Absolute change</th>
                        <td className='text-danger'>
                            <MDBIcon className='me-1' fas icon='caret-down' />
                            -17,654
                        </td>
                        <td className='text-success'>
                            <MDBIcon className='me-1' fas icon='caret-up' />
                            28
                        </td>
                        <td className='text-success'>
                            <MDBIcon className='me-1' fas icon='caret-up' />
                            111
                        </td>
                        <td className='text-success'>
                            <MDBIcon className='me-1' fas icon='caret-up' />
                            $1,092.72
                        </td>
                        <td className='text-danger'>
                            <MDBIcon className='me-1' fas icon='caret-down' />
                            $-1.78
                        </td>
                        </tr>
                    </MDBTableBody>
                    </MDBTable>
                </div>

                <div>
                <MDBTable bordered borderColor="primary" >
                <MDBTableHead>
                    <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>First</th>
                    <th scope='col'>Last</th>
                    <th scope='col'>Handle</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                    <th scope='row'>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope='row'>2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope='row'>3</th>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </MDBTableBody>
                </MDBTable>


                <MDBTable striped hover>
                <MDBTableHead>
                    <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>First</th>
                    <th scope='col'>Last</th>
                    <th scope='col'>Handle</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                    <th scope='row'>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope='row'>2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope='row'>3</th>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </MDBTableBody>
                </MDBTable>
                </div> */}

                <div className={globalContainerStyle.containerscroll}>
                <div className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque animi autem cum acceptenda perferendis iusto doloribus voluptate, quo exercitationem. Aliquid, provident non magnam quia repudiandae molestias dicta sed tenetur soluta quas minus eaque. Praesentium est commodi tempora laborum voluptatem, quis vitae aut perferendis facere expedita, dolores nisi ipsam necessitatibus soluta, natus itaque numquam illo animi eveniet non iure cum. Deserunt corrupti eaque vel modi debitis rerum libero deleniti facilis dolorum sequi! Nobis eum fugiat ipsa quaerat iste repellendus laboriosam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque animi autem cum acceptenda perferendis iusto doloribus voluptate, quo exercitationem. Aliquid, provident non magnam quia repudiandae molestias dicta sed tenetur soluta quas minus eaque. Praesentium est commodi tempora laborum voluptatem, quis vitae aut perferendis facere expedita, dolores nisi ipsam necessitatibus soluta, natus itaque numquam illo animi eveniet non iure cum. Deserunt corrupti eaque vel modi debitis rerum libero deleniti facilis dolorum sequi! Nobis eum fugiat ipsa quaerat iste repellendus laboriosam.</div>
                </div>
        </div>
    )
}