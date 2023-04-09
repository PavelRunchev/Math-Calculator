import React from 'react';

import Navigation from '../Navigation/navigation';
import Footer from '../Footer/footer';

import NumberConvertTable from './number-convert-table';

import { MDBIcon } from 'mdb-react-ui-kit';

class NumberConvertor extends React.Component {
    render () {
        return (
            <>
                <Navigation />
                <div className='container-main container-number-convertor'>
                    <h2 className="text-center">Number Convertor</h2>
                    <div className="text-center font-italic">Decimal to Binary, Decimal to Hexadecimal, Decimal to Octal</div>
                    <div className="text-center font-italic">Binary to Decimal, Binary to Hexadecimal, Binary to Octal</div>
                    <div className="text-center font-italic">Hexadecimal to Decimal, Hexadecimal to Binary, Hexadecimal to Octal</div>
                    <div className="text-center font-italic">Octal to Decimal, Octal to Binary, Octal to Hexadecimal</div>

                    <div className="container-form">
                        <form>
                            <h3 className="inner-form-h3">Calculator</h3>
                            <div className="container-inner-form">
                                <label htmlFor="input" className="text-left w-100 pl-3 label-input-number">Enter decimal number:</label>
                                <div className="input-group number-convertor-input-number">
                                    <input type="text" id="typeNumber" className="form-control input-default" />
                                    <div className="input-group-append">
                                        <span className="input-group-text span-input-number">10</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1" className="pl-3">From</label>
                                    <select className="form-control form-select form-select-from" id="exampleFormControlSelect1">
                                    <option value="decimal">Decimal</option>
                                    <option value="binary">Binary</option>
                                    <option value="hexadecimal">Hexadecimal</option>
                                    <option value="octal">Octal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1" className="pl-3">To</label>
                                    <select className="form-control form-select form-select-to" id="exampleFormControlSelect1">
                                    <option value="decimal">Decimal</option>
                                    <option value="binary">Binary</option>
                                    <option value="hexadecimal">Hexadecimal</option>
                                    <option value="octal">Octal</option>
                                    </select>
                                </div>
                                <label htmlFor="input" className="text-left w-100 pl-3 label-result">Result: <span className="span-label-result">Decimal number</span><span className="text-danger"></span></label>
                                <div className="input-group number-convertor-result">
                                    <button className="btn-convert btn-convert-currency">
                                        <span className="span-convert">Convert it</span>
                                        <MDBIcon fas icon="long-arrow-alt-right" className="long-arrow-alt-right"/>
                                    </button>
                                
                                    <input type="text" disabled readOnly placeholder="Result" className="form-control input-result" />
                                   
                                    <button className="btn-reset">Reset</button>
                                </div>

                                <div className="input-group my-3 container-textarea">
                                    <textarea className="form-control number-convertor-text-area-result"  placeholder="Result" disabled readOnly>

                                    </textarea>
                                    <div className="input-group-append">
                                        <span className="input-group-text number-convertor-text-area-number-span">10</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="container-form">
                        <NumberConvertTable />
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default NumberConvertor