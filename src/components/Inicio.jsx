import React from 'react';
import './Inicio.css';

function Inicio({ personalInfo, contacto }) {
  if (!personalInfo || !contacto) {
    return <section id="inicio" className="inicio-section"><p>Cargando información...</p></section>;
  }

  const { nombre, titulo, subtitulo, foto, perfilesImportantes } = personalInfo;
  const { celular, correo, ubicacion } = contacto;

  const getButtonText = (perfilNombre) => {
    if (perfilNombre === "GitHub") return "Ver en GitHub";
    if (perfilNombre === "Hoja de Vida") return "Hoja de Vida";
    return perfilNombre;
  };

  return (
    <section id="inicio" className="inicio-section">
      <div className="inicio-content container">
        <div className="inicio-texto">
          <h1>{nombre || 'Daniel Montealegre'}</h1>
          <p className="titulo">{titulo || 'Tu Título Profesional'}</p>
          <p className="subtitulo">{subtitulo || 'Un subtítulo descriptivo'}</p>

          <div className="inicio-contacto-rapido">
            {celular && (
              <div className="contacto-item">
                <i className="bi bi-whatsapp"></i>
                <a href={`https://wa.me/57${celular.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">{celular}</a>
              </div>
            )}
            {correo && (
              <div className="contacto-item">
                <i className="bi bi-envelope-at-fill"></i>
                <a href={`mailto:${correo}`}>{correo}</a>
              </div>
            )}
            {ubicacion && (
              <div className="contacto-item">
                <i className="bi bi-geo-alt-fill"></i>
                <span>{ubicacion}</span>
              </div>
            )}
          </div>

          {perfilesImportantes && perfilesImportantes.length > 0 && (
            <div className="inicio-perfiles-importantes">
              {perfilesImportantes.map((perfil, index) => (
                <a
                  key={index}
                  href={perfil.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inicio-perfil-boton"
                  aria-label={perfil.altText}
                >
                  <i className={`${perfil.iconoClase} inicio-perfil-icono-boton`} aria-hidden="true"></i>
                  <span>{getButtonText(perfil.nombre)}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="inicio-foto-container">
          {foto && (
            <div className="inicio-foto" tabIndex={0}>
              <img src={foto} alt={`Foto de ${nombre}`} className="mi-foto" />
            </div>
          )}
          {!foto && (
              <div className="inicio-foto-placeholder">
                  Foto
              </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Inicio;