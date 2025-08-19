import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import WhoAmI from './components/WhoAmI';
import Articles from './components/Articles';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Router>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/whoami' element={<WhoAmI />} />
            <Route path='/articles' element={<Articles />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
