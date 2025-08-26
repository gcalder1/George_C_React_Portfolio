import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './layouts/MainLayout.jsx';
import { Home } from './page-components/Home.jsx';
import { About } from './page-components/About.jsx';
import { Contact } from './page-components/Contact.jsx';
import { Projects } from './page-components/Projects.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
