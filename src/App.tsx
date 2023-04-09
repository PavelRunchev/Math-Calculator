import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/home';
import About from './components/About/about';
import PageNotFound from './components/pageNotFound/pageNotFound';
import Cookie from './components/Cookie/cookie';
import ErrorBoundary from './components/Error/ErrorBoundary';
import Toastr from './components/Toastr/toastr';

//page components!!!
import Currency from './components/Currency/currency';
import NumberConvertor from './components/Number-Convertor/number-convertor';

import './App.scss';

function App() {
  return (
    <div className="container-fluid container-app">
              <ErrorBoundary>
                <Toastr />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/about' element={<About />}/>

                    <Route path='/currency' element={<Currency />}/>
                    <Route path='/number-convertor' element={<NumberConvertor />}/>
                   
                    <Route path="/error-boundary" element={<ErrorBoundary />}/>
                    <Route path="*" element={<PageNotFound />}/>
                </Routes>
                <Cookie />

              </ErrorBoundary> 
    </div>
  );
}

export default App;
