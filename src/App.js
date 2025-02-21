import './App.css';
import React, {useState, useEffect} from 'react';
import {Routes, Route, useLocation} from "react-router-dom"
import HomePage from './HomePage';
import Projects from './Projects';
import ProjectPage from './ProjectPage';
import About from './About';
import {AnimatePresence} from 'framer-motion';
import TestingPage from './TestingPage';



//   <Link to={to} onClick={delayAndGo}>


function App({page}) {


  return (
    <>
        {/* <AnimatePresence>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/:projectName" element={<ProjectPage />} />
                <Route path="/about" element={ <About /> } />
                <Route path="/testing" element={ <TestingPage /> } />
            </Routes>
        </AnimatePresence> */}
    </>
  );
}

export default App;
