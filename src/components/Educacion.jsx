import React, { useState, useEffect } from 'react';
import './Educacion.css';

const MOBILE_BREAKPOINT = 768;

function Educacion({ educacion }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      if (mobile !== isMobileView) {
        setIsMobileView(mobile);
        setCurrentIndex(0);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileView]);

  if (!educacion || !educacion.items || !Array.isArray(educacion.items)) {
    return (
      <section id="educacion" className="educacion-section">
        <div className="container">
          <h2>{educacion?.titulo || 'Educación'}</h2>
          <p>No se encontraron datos de educación o están en formato incorrecto.</p>
        </div>
      </section>
    );
  }

  const { titulo, items } = educacion;
  const totalItems = items.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const renderEducacionCard = (item, indexForKey) => {
    let certificadoHref = '';
    if (item.urlCertificado) {
      if (item.urlCertificado.startsWith('http://') || item.urlCertificado.startsWith('https://')) {
        certificadoHref = item.urlCertificado;
      } else {
        const publicUrl = process.env.PUBLIC_URL || '';
        certificadoHref = publicUrl + item.urlCertificado;
      }
    }

    return (
      <div key={indexForKey} className="educacion-card">
        <div className="card-imagen-container">
          {item.imagenUrl && (
            <img src={item.imagenUrl} alt={`Logo ${item.nombreInstitucion || 'Institución'}`} />
          )}
        </div>
        <div className="card-contenido">
          {item.nombreInstitucion && <h3>{item.nombreInstitucion}</h3>}
          {item.fecha && <p className="educacion-fecha">{item.fecha}</p>}
          <div className="estudio-info-wrapper">
            {item.tipoEstudio && <p className="tipo-estudio">{item.tipoEstudio}</p>}
            {item.tituloEstudio && <p className="titulo-estudio">{item.tituloEstudio}</p>}
          </div>
          {item.enCurso ? (
            <p className="estudio-en-curso">
              <i className="bi bi-hourglass-split"></i> Estudio en curso
            </p>
          ) : (
            item.urlCertificado && (
              <a
                href={certificadoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="enlace-certificado-card"
              >
                <i className="bi bi-file-earmark-text-fill"></i>
                Ver Certificado
              </a>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="educacion" className="educacion-section">
      <div className="container">
        <h2>{titulo}</h2>
        {isMobileView && totalItems > 0 ? (
          <div className={`educacion-carousel-mobile-wrapper ${totalItems <= 1 ? 'single-item' : ''}`}>
            {totalItems > 1 && (
              <button
                className="educacion-carousel-boton prev"
                onClick={handlePrev}
                aria-label="Educación anterior"
              >
                ❮
              </button>
            )}
            <div className="educacion-card-mobile-container">
              {renderEducacionCard(items[currentIndex], `mobile-${currentIndex}`)}
            </div>
            {totalItems > 1 && (
              <button
                className="educacion-carousel-boton next"
                onClick={handleNext}
                aria-label="Siguiente educación"
              >
                ❯
              </button>
            )}
          </div>
        ) : (
          totalItems > 0 && (
            <div className="educacion-grid-container">
              <div className="educacion-grid">
                {items.map((item, index) => renderEducacionCard(item, index))}
              </div>
            </div>
          )
        )}
        {totalItems === 0 && <p>No hay elementos de educación para mostrar.</p>}
      </div>
    </section>
  );
}

export default Educacion;