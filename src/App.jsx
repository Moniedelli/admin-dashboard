import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import './assets/scss/app.scss';
import Dashboard from '../pages/Dashboard';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import SidebarContainer from './components/Layout/SidebarContainer';
import { MenuContext } from './context/menu';
import { useContext } from 'react';
import Users from '../pages/Users';

function App() {
  library.add(fas);
  const [count, setCount] = useState(0);
  const [{ menuClass }] = useContext(MenuContext);

  return (
    <>
      <Router>
        <div className={menuClass}>
          <Header />
          <SidebarContainer />
          <div className="main-content">
            <div className="page-content">
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/users' element={<Dashboard />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App;
