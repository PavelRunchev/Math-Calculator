import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Navigation from './components/Navigation/navigation';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import About from './components/About/about';

import './App.scss';

function App() {
  return (
    <div className="container-fluid container-app">
         <Navigation />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />}/>
          </Routes>

          <Footer />
    
      
    </div>
  );
}

export default App;
