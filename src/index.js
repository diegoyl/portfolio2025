import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './HomePage';
import Projects from './Projects';
import ProjectPage from './ProjectPage';
import About from './About';
import TestingPage from './TestingPage';

import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { AnimatePresence } from 'framer-motion';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App></App>
      // <Router>
      //   <Routes>
      //     <Route path="/"
      //         element={<HomePage title="Diego Yañez-Laguna"/>}
      //         errorElement={<div>oops! 404 Not Found</div>}
      //     />
      //     <Route path="/projects"
      //         element={<Projects title="Projects"/>}
      //         errorElement={<div>oops! 404 Not Found</div>}
      //     />
      //     <Route path="/:projectName"
      //         element={<ProjectPage />}
      //         errorElement={<div>oops! 404 Not Found</div>}
      //     />
      //     <Route path="/about"
      //         element={<About title="About"/>}
      //         errorElement={<div>oops! 404 Not Found</div>}
      //     />
      //     <Route path="/testing"
      //         element={<TestingPage title="TP"/>}
      //         errorElement={<div>oops! 404 Not Found</div>}
      //     />
      //   </Routes>
      // </Router>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
