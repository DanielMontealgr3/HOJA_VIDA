import React from 'react';
import './App.css';

import Header from './components/Header';
import Inicio from './components/Inicio'; 
import SobreMi from './components/SobreMi';
import Educacion from './components/Educacion';
import Conocimientos from './components/conocimientos';
import Referencias from './components/Referencias';
import Portafolio from './components/Portafolio';
import Footer from './components/Footer';

import { cvData } from './data/cvData';

function App() {
  return (
    <>
      <Header />
      <main>
       
        <Inicio
          personalInfo={cvData.personalInfo}
          contacto={cvData.contacto} 
        />
        <SobreMi sobreMi={cvData.sobreMi} />
        <Educacion educacion={cvData.educacion} />
        <Conocimientos conocimientos={cvData.conocimientos} />
        <Referencias referencias={cvData.referencias} />
        <Portafolio portafolio={cvData.portafolio} />
      </main>
      <Footer contacto={cvData.contacto} />
    </>
  );
}

export default App;