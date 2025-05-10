import React, { useState } from 'react';
import './Conocimientos.css';

function Conocimientos({ conocimientos }) {
  const { titulo, lista } = conocimientos;
  const [indiceCentral, setIndiceCentral] = useState(0);

  if (!lista || !Array.isArray(lista) || lista.length === 0) {
    return (
      <section id="conocimientos" className="conocimientos-section">
        <div className="container">
          <h2>{titulo || 'conocimientos'}</h2>
          <p>No se encontraron datos de conocimientos o están en formato incorrecto.</p>
        </div>
      </section>
    );
  }

  const totalItems = lista.length;

  const cambiarItemCentral = (nuevoIndice) => {
    const indiceNormalizado = (nuevoIndice % totalItems + totalItems) % totalItems;
    setIndiceCentral(indiceNormalizado);
  };

  const obtenerItemsParaRenderizar = () => {
    if (totalItems === 0) return [];
    return lista.map((item, index) => ({ ...item, originalIndex: index }));
  };

  const itemsParaRenderizar = obtenerItemsParaRenderizar();
  const conocimientoActivo = lista[indiceCentral];

  return (
    <section id="conocimientos" className="conocimientos-section">
      <div className="container">
        <h2>{titulo}</h2>

        <div className="conocimientos-carrusel-circular-wrapper">
          <button
            className="carrusel-circular-boton prev"
            onClick={() => cambiarItemCentral(indiceCentral - 1)}
            aria-label="conocimiento anterior"
            disabled={totalItems <= 1}
          >
            ❮
          </button>

          <div className="carrusel-circular-vista">
            {itemsParaRenderizar.map((conocimiento) => {
              const esActivo = conocimiento.originalIndex === indiceCentral;

              let esAdyacente = false;
              if (totalItems > 1) {
                const diff = indiceCentral - conocimiento.originalIndex;
                if (Math.abs(diff) === 1) {
                  esAdyacente = true;
                } else if (totalItems > 2 && (diff === -(totalItems - 1) || diff === (totalItems - 1))) {
                  esAdyacente = true;
                }
              }

              let claseItem = 'carrusel-circular-item';
              let estiloItem = {};

              if (esActivo) {
                claseItem += ' activo';
                estiloItem = {
                  transform: 'scale(1) translateX(0) translateZ(30px)',
                  opacity: 1,
                  zIndex: 10,
                };
              } else if (esAdyacente) {
                claseItem += ' adyacente';
                let offsetHorizontal = '75%';
                if (totalItems > 2) {
                    const distanciaRelativa = (indiceCentral - conocimiento.originalIndex + totalItems) % totalItems;
                    if (distanciaRelativa === 1) {
                        offsetHorizontal = '75%';
                    } else if (distanciaRelativa === totalItems - 1) {
                        offsetHorizontal = '-75%';
                    }
                } else if (totalItems === 2) {
                    offsetHorizontal = (conocimiento.originalIndex < indiceCentral) ? '-75%' : '75%';
                }

                estiloItem = {
                  transform: `scale(0.75) translateX(${offsetHorizontal}) translateZ(10px)`,
                  opacity: 0.65,
                  zIndex: 5,
                };
              } else {
                let offsetHorizontalLejano = '150%';
                const distanciaRelativa = (indiceCentral - conocimiento.originalIndex + totalItems) % totalItems;
                if (distanciaRelativa > totalItems / 2) {
                    offsetHorizontalLejano = '-150%';
                }

                estiloItem = {
                  transform: `scale(0.5) translateX(${offsetHorizontalLejano}) translateZ(-5px)`,
                  opacity: 0.45,
                  zIndex: 1,
                };
              }

              return (
                <div
                  key={conocimiento.id || conocimiento.originalIndex}
                  className={claseItem}
                  style={estiloItem}
                  onClick={() => cambiarItemCentral(conocimiento.originalIndex)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && cambiarItemCentral(conocimiento.originalIndex)}
                >
                  <div className="logo-container-circular">
                    {conocimiento.logo ? (
                      <img src={conocimiento.logo} alt={conocimiento.nombre} className="conocimiento-logo-circular" />
                    ) : (
                      <div className="logo-placeholder-circular">{conocimiento.nombre ? conocimiento.nombre.substring(0,1) : '?'}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className="carrusel-circular-boton next"
            onClick={() => cambiarItemCentral(indiceCentral + 1)}
            aria-label="Siguiente conocimiento"
            disabled={totalItems <= 1}
          >
            ❯
          </button>
        </div>

        {conocimientoActivo && (
          <div className="conocimiento-descripcion-activa-circular">
            <h3>{conocimientoActivo.nombre}</h3>
            <p>{conocimientoActivo.descripcion}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Conocimientos;