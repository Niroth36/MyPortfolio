import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import WhoAmI from './components/WhoAmI';
import Articles from './components/Articles';
import Sidebar from './components/Sidebar';
import LinuxArticles from './components/LinuxArticles';
import LinuxBootProcess from './components/LinuxBootProcess';
import LinuxVimCommands from './components/LinuxVimCommands';
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
            <Route path='/linux' element={<LinuxArticles />} />
            <Route path='/articles/linux/boot-process' element={<LinuxBootProcess />} />
            <Route path='/articles/linux/vim-commands' element={<LinuxVimCommands />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
