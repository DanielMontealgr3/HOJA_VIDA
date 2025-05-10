
import React, { useState, useEffect } from 'react';
import './Portafolio.css';

const ITEMS_PER_PAGE_DESKTOP = 3;
const ITEMS_PER_PAGE_TABLET = 2;
const ITEMS_PER_PAGE_MOBILE = 1;

function Portafolio({ portafolio }) {
  const { titulo, proyectos } = portafolio;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(ITEMS_PER_PAGE_DESKTOP);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && window.innerWidth > 480) {
        setItemsToShow(ITEMS_PER_PAGE_TABLET);
      } else if (window.innerWidth <= 480) {
        setItemsToShow(ITEMS_PER_PAGE_MOBILE);
      } else {
        setItemsToShow(ITEMS_PER_PAGE_DESKTOP);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  if (!titulo || !proyectos || proyectos.length === 0) {
    return (
      <section id="portafolio" className="portafolio-section">
        <div className="container">
          <h2>{titulo || "Mis Proyectos"}</h2>
          <p>No hay proyectos para mostrar en este momento.</p>
        </div>
      </section>
    );
  }

  const totalProyectos = proyectos.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalProyectos) % totalProyectos);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProyectos);
  };

  const getVisibleProyectos = () => {
    const visibles = [];
    if (totalProyectos === 0) return visibles;

    for (let i = 0; i < itemsToShow; i++) {
      if (totalProyectos <= itemsToShow && i >= totalProyectos) break; 
      const projectIndex = (currentIndex + i) % totalProyectos;
      visibles.push(proyectos[projectIndex]);
    }
    return visibles;
  };

  const visiblesProyectos = getVisibleProyectos();

  const canNavigate = totalProyectos > itemsToShow;


  return (
    <section id="portafolio" className="portafolio-section">
      <div className="container">
        <h2>{titulo}</h2>
        <div className="portafolio-carousel-wrapper">
          {canNavigate && (
            <button
              className="portafolio-carousel-boton prev"
              onClick={handlePrev}
              aria-label="Proyecto anterior"
            >
              ❮
            </button>
          )}
          <div className="portafolio-proyectos-vista">
            {visiblesProyectos.map((proyecto, index) => (
              <div key={proyecto.id + '-' + index} className="proyecto-card-wrapper">
                <div className="proyecto-card">
                  <div className="proyecto-card-imagen-container">
                    <img src={proyecto.imagenUrl} alt={`Imagen de ${proyecto.nombre}`} />
                  </div>
                  <div className="proyecto-card-contenido">
                    <h3>{proyecto.nombre}</h3>
                    <p className="proyecto-descripcion">{proyecto.descripcion}</p>
                    <div className="proyecto-botones">
                      {proyecto.urlGithub && (
                        <a href={proyecto.urlGithub} className="proyecto-boton github-boton" target="_blank" rel="noopener noreferrer">
                          <i className="bi bi-github"></i> Ver en GitHub
                        </a>
                      )}
                      {proyecto.urlNetlify && (
                        <a href={proyecto.urlNetlify} className="proyecto-boton netlify-boton" target="_blank" rel="noopener noreferrer">
                          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="netlify-logo-icon"><title>Netlify</title><path d="M6.231 1.174c-.25.434-.148.995.23 1.32l5.01 4.25H1.037c-.512 0-.94.361-.94.87v10.388c0 .508.428.87.94.87h10.434l-4.988 4.25c-.378.324-.48.886-.23 1.32.25.434.762.602 1.202.398l14.353-12.21c.33-.28.466-.738.324-1.144L7.433.776c-.44-.204-1.02-.076-1.202.398zM1.977 7.616h10.26L1.977 16.08V7.617z"/></svg>
                          Ver página
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {canNavigate && (
            <button
              className="portafolio-carousel-boton next"
              onClick={handleNext}
              aria-label="Siguiente proyecto"
            >
              ❯
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Portafolio;