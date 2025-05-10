import React from 'react';
import './SobreMi.css';

function SobreMi({ sobreMi }) {
  if (!sobreMi || !sobreMi.texto) {
    return (
      <section id="sobre-mi" className="sobre-mi-section">
        <div className="container">
          <h2>{sobreMi?.titulo || 'Sobre Mí'}</h2>
          <p>Información no disponible.</p>
        </div>
      </section>
    );
  }

  const { titulo, texto } = sobreMi;

  return (
    <section id="sobre-mi" className="sobre-mi-section">
      <div className="container">
        <h2>{titulo || 'Sobre Mí'}</h2>
        <p>{texto}</p>
      </div>
    </section>
  );
}

export default SobreMi;