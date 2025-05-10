import React from 'react';
import './Footer.css';

function Footer({ contacto }) {
  const { celular, correo, ubicacion, redesSociales = {} } = contacto || {};
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="site-footer">
      <div className="footer-container container"> 
        <div className="footer-contact-info">
          <h4>Contacto</h4>
          {celular && (
            <p>
              <i className="bi bi-telephone-fill"></i>
              <a href={`tel:+57${celular.replace(/\D/g, '')}`}>{celular}</a>
            </p>
          )}
          {correo && (
            <p>
              <i className="bi bi-envelope-fill"></i>
              <a href={`mailto:${correo}`}>{correo}</a>
            </p>
          )}
          {ubicacion && (
            <p>
              <i className="bi bi-geo-alt-fill"></i>
              {ubicacion}
            </p>
          )}
        </div>

        {(redesSociales.instagram || redesSociales.facebook || redesSociales.whatsapp) && (
          <div className="footer-social-media">
            <h4>Sígueme</h4>
            <div className="social-icons">
              {redesSociales.instagram && (
                <a href={redesSociales.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              )}
              {redesSociales.facebook && (
                <a href={redesSociales.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
              )}
              {redesSociales.whatsapp && (
                <a href={redesSociales.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i className="bi bi-whatsapp"></i>
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="footer-copyright">
        <p>© {currentYear} Daniel Montealegre. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;