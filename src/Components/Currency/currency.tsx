import React, { useState, useEffect, useRef } from 'react';

import currencyStyle from './currency.module.scss';
import globalStyle from '../../SASS-Modules/element.module.scss';
import globalContainerStyle from '../../SASS-Modules/container.module.scss';

import { MDBInput, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import Loading from '../Loading/Loading';
import toastr from '../../Services/toastr';

import LiveCurrency from './liveCurrency';
import { CheckIsInteger, CheckIsNumber } from '../../Services/checkFunctions';



function CurrencyPage() {
    const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
    const [isErrorAmount, setIsErrorAmount] = useState<boolean>(false);
    const [liveCurrencyData, setLiveCurrencyData] = useState<object>({});
    const [selectData, setSelectData] = useState<Array<string>>([]);
    const [currensyData, setCurrencyData] = useState<any>({});


    const [amountCurrency, setAmountCurrency] = useState<number>(0);
    const [selectFromOption, setSelectFromOption] = useState<string>('USD');
    const [selectToOption, setSelectToOption] = useState<string>('USD');

    const [result, setResult] = useState<number>(0);
    const ref = useRef<HTMLInputElement>(null);
   
    useEffect(() => {
        fetch("https://api.exchangerate-api.com/v4/latest/USD")
            .then(res => res.json())
            .then(data => {
                const getAllCurrencies: Array<string> = Object.keys(data.rates);
                setSelectData(getAllCurrencies);
                setCurrencyData(data.rates);

                setLiveCurrencyData({
                    liveDollar: data.rates['USD'] / data.rates['USD'],
                    liveEURO: data.rates['EUR'] / data.rates['USD'],
                    liveGBP: data.rates['GBP'] / data.rates['USD'],
                    liveRUB: data.rates['RUB'] / data.rates['USD'],
                    liveLev: data.rates['BGN'] / data.rates['USD'],
                    liveLira: data.rates['TRY'] / data.rates['USD'],
                    liveYena: data.rates['JPY'] / data.rates['USD'],
                    liveYuan: data.rates['CNY'] / data.rates['USD'],
                });

                setIsLoadingData(false);
            }).catch(err => console.log(err));
    }, [isLoadingData]);

    function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        const inputValue = e.target.value;
        if(CheckIsInteger(inputValue)) {
            setIsErrorAmount(false);
            setAmountCurrency(Number(inputValue));
        } else if(inputValue === '') {
            setIsErrorAmount(false);
        } else {
            setIsErrorAmount(true);
        }
    }

    function convertEvent(e: any) {
        e.preventDefault();
        if(CheckIsNumber(amountCurrency.toString())) {
            const currencyFrom = currensyData[selectFromOption];
            const currencyTo = currensyData[selectToOption];
            const result = (currencyTo / currencyFrom) * amountCurrency;
            setResult(result);
            if(ref.current) {
                ref.current.value = result.toFixed(3);
            }
        } else {
            toastr('Amount is not a number!', 'danger');
        }
    }

    function selectFromChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelectFromOption(e.target.value);
    }

    function selectToChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelectToOption(e.target.value);
    }

    const form = 
        <form className={globalContainerStyle.globalFormContainer}>
            <h3 className={`text-center ${currencyStyle.titleForm}`}>Calculator</h3>
            <h5 className={`text-danger text-center mb-0 pt-3 ${isErrorAmount ? globalStyle.show : globalStyle.hide}`}>Amount is not a number!</h5>
            <div className={`pt-0 ${globalContainerStyle.globalInnerContainer}`}>
                    <div>Amount must be <b className={globalStyle.globalColorElement}> integer</b>!</div>
                    <MDBCol size='auto'>
                        <MDBInput id='form13Example3' label='Amount' onChange={inputChangeHandler}/>
                    </MDBCol>

                    <div className="w-100 d-flex flex-row justify-content-around my-4">
                        <div className="form-group w-25">
                            <label htmlFor="exampleFormControlSelect15" className="pl-3">From</label>
                            <select   
                                className={`form-control form-select ${globalStyle.formSelect}`} 
                                id="exampleFormControlSelect15"
                                onChange={selectFromChangeHandler}
                            >
                                {selectData.map((name, i) => {
                                    return <option key={i} value={name}>{name}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group w-25">
                            <label htmlFor="exampleFormControlSelect16" className="pl-3">To</label>
                            <select   
                                className={`form-control form-select ${globalStyle.formSelect}`} 
                                id="exampleFormControlSelect16"
                                onChange={selectToChangeHandler}
                            >
                                {selectData.map((name, i) => {
                                    return <option key={i} value={name}>{name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                
                    <div className="input-group my-3">
                        <MDBInput ref={ref} label="Result: " id="formControlDisabled" type="text" className={currencyStyle.inputResult} disabled />
                        <MDBBtn   className={globalStyle.mainBtn}  onClick={(e) => convertEvent(e)}>Convert it</MDBBtn>
                    </div>
                    <div className="currensy-result">{result}</div>
                  
                    
                </div>

                <LiveCurrency {...liveCurrencyData}/>
        </form>

    return (
        <section className={globalContainerStyle.globalContainer}>
            <h2 className='text-center'>Currency Convertor</h2>
            <div className="text-center fst-italic">Live currency the exchange rate is taken up to the third decimal point, there may be a difference after the second decimal pont! Values are approximate!</div>
            
            
            {!isLoadingData ? form : <Loading />}
            
        </section>
    )
}

export default CurrencyPage;