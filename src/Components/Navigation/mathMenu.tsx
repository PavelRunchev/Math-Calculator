import React from "react";

import mathMenuStyle from './mathMenu.module.scss';
import globalStyle from '../../SASS-Modules/element.module.scss';

import { NavLink } from 'react-router-dom';
import { MDBIcon, MDBNavbarNav, MDBNavbarItem } from 'mdb-react-ui-kit';

function MathMenu({clickMathManu}: any) {

    return (
        <div className={mathMenuStyle.mathMenuContainer}>
            <MDBIcon fas icon="xmark" size='2x' className={mathMenuStyle.mathCloseBtn} onClick={(e: any) => clickMathManu(e)}/>

            <div className={mathMenuStyle.mathMenuMainContainer}>

                <div className={mathMenuStyle.mathCalculatorContainer}>
                    <h4 className='pl-3'>Math Calculator</h4>
                    
                    <MDBNavbarNav className={mathMenuStyle.mathMenuList}>
                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='/currency-calculator-page' onClick={(e) => clickMathManu(e)}> Curency Calculator</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/>
                        </MDBNavbarItem>

                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='#' onClick={(e) => clickMathManu(e)}> Number Convertor</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/>
                        </MDBNavbarItem>

                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='#' onClick={(e) => clickMathManu(e)}>Factorial</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/> 
                        </MDBNavbarItem>

                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='#' onClick={(e) => clickMathManu(e)}> Fibonacci</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/>
                        </MDBNavbarItem>

                    </MDBNavbarNav>
                </div>

                <div className={mathMenuStyle.mathCalculatorContainer}>
                    <h4 className={globalStyle.globalTransparentColorElement}>Math Calculator</h4>

                    <MDBNavbarNav className={mathMenuStyle.mathMenuList}>
                    
                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='#' onClick={(e) => clickMathManu(e)}> Figure Calculator</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/>
                        </MDBNavbarItem>

                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='#' onClick={(e) => clickMathManu(e)}> Distance Calculator</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/>
                        </MDBNavbarItem>

                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='#' onClick={(e) => clickMathManu(e)}> Distance Points Calculator</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/>
                        </MDBNavbarItem>

                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='#' onClick={(e) => clickMathManu(e)}> Times Calculator</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/>
                        </MDBNavbarItem>

                    </MDBNavbarNav>
                </div>


                <div className={mathMenuStyle.mathFunctionContainer}>
                    <h4 className='pl-3'>Math Functions</h4>

                    <MDBNavbarNav className={mathMenuStyle.mathMenuList}>

                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='#' onClick={(e) => clickMathManu(e)}> Check Year is Leap</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/>
                        </MDBNavbarItem>

                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='#' onClick={(e) => clickMathManu(e)}>Exponential function</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/> 
                        </MDBNavbarItem>

                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='#' onClick={(e) => clickMathManu(e)}> Sine function</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/>
                        </MDBNavbarItem>

                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='#' onClick={(e) => clickMathManu(e)}> Cosine function</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/>
                        </MDBNavbarItem>

                    </MDBNavbarNav>
                </div>

                <div className={mathMenuStyle.mathFunctionContainer}>
                    <h4 className={globalStyle.globalTransparentColorElement}>Math Calculator</h4>

                    <MDBNavbarNav className={mathMenuStyle.mathMenuList}>

                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='#' onClick={(e) => clickMathManu(e)}> Tangent function</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/>
                        </MDBNavbarItem>

                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='#' onClick={(e) => clickMathManu(e)}> Cotangent function</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/>
                        </MDBNavbarItem>

                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='#' onClick={(e) => clickMathManu(e)}> Derivative function</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/>
                        </MDBNavbarItem>

                        <MDBNavbarItem className={mathMenuStyle.mathMenuItem}>
                            <NavLink className={`navbar-brand ${mathMenuStyle.mathMenuLink}`} to='#' onClick={(e) => clickMathManu(e)}> Quadratic Equation</NavLink>
                            <MDBIcon fas icon="caret-right" className={mathMenuStyle.mathMeniIcon}/>
                        </MDBNavbarItem>

                    </MDBNavbarNav>
                </div>
            </div>
        </div>
    )
}

export default MathMenu;