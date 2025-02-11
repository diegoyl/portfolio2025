import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import Projects from './Projects';
import ProjectPage from './ProjectPage';
import About from './About';
import TestingPage from './TestingPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage title="Diego Yañez-Laguna"/>,
//     errorElement: <div>404 Not Found</div>
//   },
//   {
//     path: '/projects',
//     element: <Projects title="Projects"/>
//   },
//   {
//     path: '/:projectName',
//     element: <ProjectPage title=':projectName'/>
//   },
//   {
//     path: '/about',
//     element: <About title="About"/>
//   }
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/"
              element={<HomePage title="Diego Yañez-Laguna"/>}
              errorElement={<div>404 Not Found</div>}
          />
          <Route path="/projects"
              element={<Projects title="Projects"/>}
              errorElement={<div>404 Not Found</div>}
          />
          <Route path="/:projectName"
              element={<ProjectPage />}
              errorElement={<div>404 Not Found</div>}
          />
          <Route path="/about"
              element={<About title="About"/>}
              errorElement={<div>404 Not Found</div>}
          />
          <Route path="/testing"
              element={<TestingPage title="TP"/>}
              errorElement={<div>404 Not Found</div>}
          />
        </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
