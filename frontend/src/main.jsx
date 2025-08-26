import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layouts/MainLayout.jsx';
import { Home } from './PageComponents/Home.jsx';
import { About } from './PageComponents/About.jsx';
import { Contact } from './PageComponents/Contact.jsx';
import { Projects } from './PageComponents/Projects.jsx';

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
  </StrictMode>
)
