import './App.css';
import React, {useState, useEffect} from 'react';
import HomePage from './HomePage';
import Projects from './Projects';
import ProjectPage from './ProjectPage';
import About from './About';
import {AnimatePresence} from 'framer-motion';
import TestingPage from './TestingPage';

import {useLocation} from "react-router-dom"
import {  HashRouter as Router, Routes, Route } from "react-router-dom";



function App({page}) {


  return (
    <>
      <Router>
          <Routes>
              <Route index element={<HomePage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects-design" element={<Projects />} />
              <Route path="/projects-coding" element={<Projects />} />
              <Route path="/projects-engineering" element={<Projects />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/:projectName" element={<ProjectPage />} />
              <Route path="/about" element={ <About /> } />
              <Route path="/testing" element={ <TestingPage /> } />
          </Routes>
      </ Router>
    
    </>
  );
}

export default App;
