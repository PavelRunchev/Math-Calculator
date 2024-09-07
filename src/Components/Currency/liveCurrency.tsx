import React from "react";

import currencyStyle from './currency.module.scss';

import USDflag from '../../public/flags/USD-flag.png';
import EUROflag from '../../public/flags/Euroflag.png';
import GBflag from '../../public/flags/GreatBritan-flag.png';
import RUSflag from '../../public/flags/Russian-flag.png';
import BULflag from '../../public/flags/Bulgarian-flag.png';
import TURKflag from '../../public/flags/Turkish-flag.png';
import JPNflag from '../../public/flags/Japan-flag.png';
import CHNflag from '../../public/flags/China-flag.png';

function LiveCurrency(props: any) {
    return (
        <div className={`pl-3 pr-2 py-3 ${currencyStyle.currencyLiveContainer}`}>
                <div className="font-italic">Live cyrrency 
                    <img src={USDflag} className={currencyStyle.flagCurrencyImage} alt="flag"/>
                    <b>USD [US Dollar]</b> - <span className="usd-live-currency">{props.liveDollar}</span> $.
                </div>
                <div className="font-italic">Live cyrrency 
                        <img src={EUROflag} className={currencyStyle.flagCurrencyImage} alt="flag"/>
                        <b>EUR [EURO]</b> - <span className="euro-live-currency">{props.liveEURO}</span> &euro;.
                </div>
                <div className="font-italic">Live cyrrency 
                        <img src={GBflag} className={currencyStyle.flagCurrencyImage} alt="flag"/>
                        <b>GBP [Great British Pound]</b> - <span className="pound-live-currency">{props.liveGBP}</span> &pound;.
                </div>
                <div className="font-italic">Live cyrrency 
                        <img src={RUSflag} className={currencyStyle.flagCurrencyImage} alt="flag"/>
                        <b>RUB [Russian Ruble]</b> - <span className="ruble-live-currency">{props.liveRUB}</span> &#8381;.
                </div>
                <div className="font-italic">Live cyrrency 
                        <img src={BULflag} className={currencyStyle.flagCurrencyImage} alt="flag"/>
                        <b>BGN [Bulgarian Lev]</b> - <span className="lev-live-currency">{props.liveLev}</span> lv.
                </div>
                <div className="font-italic">Live cyrrency 
                        <img src={TURKflag} className={currencyStyle.flagCurrencyImage} alt="flag"/>
                        <b>TRY [Turkish Lira]</b> - <span className="turkey-lira-live-currency">{props.liveLira}</span> &#8378;.
                </div>
                <div className="font-italic">Live cyrrency 
                        <img src={JPNflag} className={currencyStyle.flagCurrencyImage} alt="flag"/>
                        <b>JPY [Japan Yena]</b> - <span className="yena-live-currency">{props.liveYena}</span> &yen;.
                </div>
                <div className="font-italic">Live cyrrency 
                        <img src={CHNflag} className={currencyStyle.flagCurrencyImage} alt="flag"/>
                        <b>CNY [China Yuan]</b> - <span className="yuan-live-currency">{props.liveYuan}</span> &#20803;.
                </div>
        </div>
    )
}

export default LiveCurrency;