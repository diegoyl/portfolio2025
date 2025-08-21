import './App.css';
import React, {useState, useEffect} from 'react';
import HomePage from './HomePage';
import Work from './Work';
import ProjectPage from './ProjectPage';
import About from './About';
import Ocean from './Ocean';
import {AnimatePresence} from 'framer-motion';
import TestingPage from './TestingPage';
import ExternalRedirectPage from './ExternalRedirectPage';

import {useLocation} from "react-router-dom"
import {  HashRouter as Router, Routes, Route } from "react-router-dom";



function App({page}) {


  return (
    <>
      <Router>
          <Routes>
              <Route index element={<HomePage />} />
              <Route path="/work" element={<Work />} />
              <Route path="/projects" element={<Work />} />
              <Route path="/projects-design" element={<Work />} />
              <Route path="/projects-coding" element={<Work />} />
              <Route path="/projects-engineering" element={<Work />} />
              <Route path="/:projectName" element={<ProjectPage />} />
              <Route path="/about" element={ <About /> } />
              <Route path="/testing" element={ <TestingPage /> } />
              <Route path="/ocean" element={ <Ocean /> } />
              
              {/* REDIRECTS */}
              <Route path="/beatfarm-web" element={ <ExternalRedirectPage /> } />
              <Route path="/tactical-type" element={ <ExternalRedirectPage /> } />
              <Route path="/birth-certificate" element={ <ExternalRedirectPage /> } />
              <Route path="/htmaa" element={ <ExternalRedirectPage /> } />
              <Route path="/golf" element={ <ExternalRedirectPage /> } />
              <Route path="/splash-course" element={ <ExternalRedirectPage /> } />
          </Routes>
      </ Router>
    
    </>
  );
}

export default App;