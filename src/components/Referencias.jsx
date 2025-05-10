import React, { useState, useEffect } from 'react';
import './Referencias.css';
import personImage from '../assets/person.png';

const MOBILE_BREAKPOINT = 768;

function Referencias({ referencias }) {
  const { titulo, lista } = referencias;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!lista || !Array.isArray(lista) || lista.length === 0) {
    return (
      <section id="referencias" className="referencias-section">
        <div className="container">
          <h2>{titulo || "Referencias"}</h2>
          <p>No hay referencias para mostrar en este momento.</p>
        </div>
      </section>
    );
  }

  const totalReferencias = lista.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalReferencias) % totalReferencias);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalReferencias);
  };

  const renderReferenciaCard = (ref, indexForKey, isMobileCard = false) => (
    <div key={isMobileCard ? `mobile-${indexForKey}` : indexForKey} className="referencia-card">
      <div className="ref-card-imagen-container">
        <img src={personImage} alt={`Foto de ${ref.nombre || 'Referencia'}`} className="ref-person-image" />
      </div>
      <div className="ref-card-info">
        <h3 className="ref-nombre">{ref.nombre}</h3>
        {ref.cargo && <p className="ref-cargo">{ref.cargo}</p>}
        {ref.telefono && (
          <p className="ref-telefono">
            <i className="bi bi-telephone-fill"></i>
            <a href={`tel:${ref.telefono.replace(/\s|-|\(|\)/g, '')}`}>{ref.telefono}</a>
          </p>
        )}
      </div>
    </div>
  );

  return (
    <section id="referencias" className="referencias-section">
      <div className="container">
        <h2>{titulo}</h2>
        {isMobileView ? (
          <div className={`referencias-carousel-mobile-wrapper ${totalReferencias <= 1 ? 'single-item' : ''}`}>
            {totalReferencias > 1 && (
              <button
                className="referencia-carousel-boton prev"
                onClick={handlePrev}
                aria-label="Referencia anterior"
              >
                ❮
              </button>
            )}
            <div className="referencia-card-mobile-container">
              {renderReferenciaCard(lista[currentIndex], currentIndex, true)}
            </div>
            {totalReferencias > 1 && (
              <button
                className="referencia-carousel-boton next"
                onClick={handleNext}
                aria-label="Siguiente referencia"
              >
                ❯
              </button>
            )}
          </div>
        ) : (
          <div className="referencias-grid-container">
            <div className="referencias-grid">
              {lista.map((ref, index) => renderReferenciaCard(ref, index))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Referencias;