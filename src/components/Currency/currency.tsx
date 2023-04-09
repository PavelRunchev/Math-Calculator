import React, { Component } from "react";
import Loading from "../Loading/loading";
import toastr from "../../services/toastr";

import Navigation from "../Navigation/navigation";
import Footer from "../Footer/footer";

import { MDBIcon } from "mdb-react-ui-kit";

import USDflag from '../../public/flags/USD-flag.png';
import EUROflag from '../../public/flags/Euroflag.png';
import GBflag from '../../public/flags/GreatBritan-flag.png';
import RUSflag from '../../public/flags/Russian-flag.png';
import BULflag from '../../public/flags/Bulgarian-flag.png';
import TURKflag from '../../public/flags/Turkish-flag.png';
import JPNflag from '../../public/flags/Japan-flag.png';
import CHNflag from '../../public/flags/China-flag.png';

const api = "https://api.exchangerate-api.com/v4/latest/USD";

interface State {
    currencyObject: any;
    selectCurrency: Array<string>;
    isLoadingCurrency: boolean;
    currencyAmount: number;
    selectFromOption: string;
    selectToOption: string;
    result: string;
    extendResult: boolean;

    liveDollar: number;
    liveEURO: number;
    liveGBP: number;
    liveRUB: number;
    liveLev: number;
    liveLira: number;
    liveYena: number;
    liveYuan: number;
}

class Currency extends Component<any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            currencyObject: {},
            selectCurrency: [],
            isLoadingCurrency: false,
            currencyAmount: 0,
            selectFromOption: 'USD',
            selectToOption: 'USD',
            result: 'Result',
            extendResult: false,

            liveDollar: 0,
            liveEURO: 0,
            liveGBP: 0,
            liveRUB: 0,
            liveLev: 0,
            liveLira: 0,
            liveYena: 0,
            liveYuan: 0
        }
    }

    componentDidMount(): void {
        fetch(`${api}`)
            .then(res => res.json())
            .then(data => {
                const getAllCurrencyKeys: Array<string> = Object.keys(data.rates);
                
                this.setState({ 
                    currencyObject: data.rates,
                    selectCurrency: getAllCurrencyKeys,
                    isLoadingCurrency: true,
                    liveDollar: data.rates['USD'] / data.rates['USD'],
                    liveEURO: data.rates['EUR'] / data.rates['USD'],
                    liveGBP: data.rates['GBP'] / data.rates['USD'],
                    liveRUB: data.rates['RUB'] / data.rates['USD'],
                    liveLev: data.rates['BGN'] / data.rates['USD'],
                    liveLira: data.rates['TRY'] / data.rates['USD'],
                    liveYena: data.rates['JPY'] / data.rates['USD'],
                    liveYuan: data.rates['CNY'] / data.rates['USD'],
                });
            })
            .catch(err => {
                console.log(err.message);
                toastr("Invalid Currency Data", "error");
            });
    }

    private inputChangeHandler = (ev: any): void => {
        this.setState({ currencyAmount: Number(ev.target.value) });
    }

    private selectFromChangeHandler = (ev: any): void => {
        this.setState({ selectFromOption: ev.target.value });
    }

    private selectToChangeHandler = (ev: any): void => {
        this.setState({ selectToOption: ev.target.value });
    }

    private convert = (ev: any): void => {
        ev.preventDefault();
        const { currencyObject, currencyAmount, selectFromOption, selectToOption} = this.state;
        const fromCurrency = currencyObject[selectFromOption];
        const toCurrency = currencyObject[selectToOption];
        const result = (toCurrency / fromCurrency) * currencyAmount;
        this.setState({ 
            result: result.toFixed(3),
            extendResult: true
        });
    }


    render () {
        const { currencyObject, currencyAmount, selectFromOption, selectToOption, liveDollar, liveEURO, liveGBP, liveRUB, liveLev, liveLira, liveYena, liveYuan, extendResult, result } = this.state;
        const r = 1 / currencyObject[selectToOption];

        const extResult = 
        <div className="extend-result">
            <div>{currencyAmount} {selectFromOption} = {result} {selectToOption}</div>
            <div>1 {selectFromOption} = {currencyObject[selectToOption]} {selectToOption}</div>
            <div>1 {selectToOption} = {r.toFixed(3)} {selectFromOption}</div>
        </div>

        const form =  <div className="container-form">
            <form>
                <h3 className="inner-form-h3">Calculator</h3>

                <div className="container-inner-form">
                    <label htmlFor="input" className="text-left w-100 pl-3 label-amount">Amount</label>
                    <div className="input-group">
                        <input onChange={this.inputChangeHandler} type="number" className="form-control input-amount-currency" />
                    </div>

                    <div className="w-100 d-flex flex-row justify-content-around my-4">
                        <div className="form-group w-25">
                            <label htmlFor="exampleFormControlSelect15" className="pl-3">From</label>
                            <select onChange={this.selectFromChangeHandler}  className="form-control form-select form-select-from-currency" id="exampleFormControlSelect15">
                                {this.state.selectCurrency.map((name,i) => {
                                    return <option key={i} value={name}>{name}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group w-25">
                            <label htmlFor="exampleFormControlSelect16" className="pl-3">To</label>
                            <select onChange={this.selectToChangeHandler}  className="form-control form-select form-select-to-currency" id="exampleFormControlSelect16">
                                {this.state.selectCurrency.map((name,i) => {
                                    return <option key={i} value={name}>{name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                
                    <div className="input-group my-3">

                        <button onClick={this.convert} className="btn-convert btn-convert-currency">
                            <span className="span-convert">Convert it</span>
                            <MDBIcon fas icon="long-arrow-alt-right" className="long-arrow-alt-right"/>
                            
                        </button>
                    
                        <input type="text" disabled readOnly placeholder={this.state.result} className="form-control input-result-currency" />
                        
                    </div>
                    <div className="currensy-result"></div>
                    {extendResult ? extResult : null}
                    
                </div>
            </form>

            <div className="container-live-currency pl-3 pr-2 py-3">
                <div className="font-italic">Live cyrrency 
                    <img src={USDflag} className="img-flag-currency" alt="flag"/>
                    <b>USD [US Dollar]</b> - <span className="usd-live-currency">{liveDollar}</span> $.
                </div>
                    <div className="font-italic">Live cyrrency 
                        <img src={EUROflag} className="img-flag-currency" alt="flag"/>
                        <b>EUR [EURO]</b> - <span className="euro-live-currency">{liveEURO}</span> &euro;.
                    </div>
                    <div className="font-italic">Live cyrrency 
                        <img src={GBflag} className="img-flag-currency" alt="flag"/>
                        <b>GBP [Great British Pound]</b> - <span className="pound-live-currency">{liveGBP}</span> &pound;.
                    </div>
                    <div className="font-italic">Live cyrrency 
                        <img src={RUSflag} className="img-flag-currency" alt="flag"/>
                        <b>RUB [Russian Ruble]</b> - <span className="ruble-live-currency">{liveRUB}</span> &#8381;.
                    </div>
                    <div className="font-italic">Live cyrrency 
                        <img src={BULflag} className="img-flag-currency" alt="flag"/>
                        <b>BGN [Bulgarian Lev]</b> - <span className="lev-live-currency">{liveLev}</span> lv.
                    </div>
                    <div className="font-italic">Live cyrrency 
                        <img src={TURKflag} className="img-flag-currency" alt="flag"/>
                        <b>TRY [Turkish Lira]</b> - <span className="turkey-lira-live-currency">{liveLira}</span> &#8378;.
                    </div>
                    <div className="font-italic">Live cyrrency 
                        <img src={JPNflag} className="img-flag-currency" alt="flag"/>
                        <b>JPY [Japan Yena]</b> - <span className="yena-live-currency">{liveYena}</span> &yen;.
                    </div>
                    <div className="font-italic">Live cyrrency 
                        <img src={CHNflag} className="img-flag-currency" alt="flag"/>
                        <b>CNY [China Yuan]</b> - <span className="yuan-live-currency">{liveYuan}</span> &#20803;.
                    </div>
            </div>
        </div>;


        return (
            <>
                <Navigation />
                    <div className="container-main container-currency">

                        <h2 className="text-center">Currency Convertor</h2>
                        <div className="text-center font-italic">Live currency the exchange rate is taken up to the third decimal point, there may be a difference after the second decimal pont! Values are approximate!</div>

                        {!this.state.isLoadingCurrency ? <Loading /> : form}
                       
                    </div>
                <Footer />
            </>
        )
    }
}

export default Currency;