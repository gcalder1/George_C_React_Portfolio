import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar.jsx';
import { Home } from './PageComponents/Home.jsx';
import { About } from './PageComponents/About.jsx';
import { Contact } from './PageComponents/Contact.jsx';
import { Projects } from './PageComponents/Projects.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/app" element={<App />}/> {/*This is my sample one*/}
          <Route path="/Home" element={<Home />}/>
          <Route path="/About"/>
          <Route path="/Projects"/>
          <Route path="/ContactMe"/>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
