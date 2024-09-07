import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './Components/ErrorBoundary/errorFallback';

import Home from './Components/Home/home';
import About from './Components/About/about';
import Navigation from './Components/Navigation/navigation';
import Footer from './Components/Footer/footer';
import Cookie from './Components/Cookie/cookie';
import PageNotFound from './Components/PageNotFound/pageNotFound';
import Toastr from './Components/Toastr/toastr';

import GalleryPage from './Components/Gallery/galleryPage';
import CurrencyPage from './Components/Currency/currency';
import ReCaptchaPage from './Components/ReCaptchaPage/reCapthcaPage';
import PaginationPage from './Components/PaginationPage/paginationPage';
import DesignPatterns from 'Components/DesignPatterns/designPatterns';
import InterviewQuestions from 'Components/InterviewQuestions/interviewQuestions';

//import MDBMainPage from './Components/MDBootstrapPage/mdbMainPage';
import MDBPage from 'Components/MDBootstrapPage/mdbPage';
import ScrollTopToCurrentPage from './Components/ScrollTopToCurrentPage/scrollTopToCurrentPage';

function App() {

  return (
    <div className="App">

      <ErrorBoundary fallbackRender={ErrorFallback} >
        <Navigation />
          <Toastr />
          <main>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/home' element={<Home />}/>
              <Route path='/about' element={<About />}/>

              <Route path='/gallery' element={<GalleryPage />}/>
              <Route path='/reCaptcha-page' element={<ReCaptchaPage />}/>
              <Route path='/pagination-page' element={<PaginationPage />}/>
              <Route path='/material-design-bootstrap-5' element={<MDBPage />}/>
              <Route path='/scroll-top-to-current-page' element={<ScrollTopToCurrentPage />}/>
              <Route path='/design-patterns' element={<DesignPatterns />}/>
              <Route path='/intervie-questions' element={<InterviewQuestions />}/>

              <Route path='/currency-calculator-page' element={<CurrencyPage />}/>

              <Route path='*' element={<PageNotFound />}/>
            </Routes>
          </main>
        <Footer />
        <Cookie />
      </ErrorBoundary>

    </div>
  );
}

export default App;
