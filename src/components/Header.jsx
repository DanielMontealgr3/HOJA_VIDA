import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const headerRef = useRef(null);

  const sectionIds = ['inicio', 'sobre-mi', 'educacion', 'conocimientos', 'referencias', 'portafolio'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      let currentSection = '';
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
      const scrollPosition = window.scrollY + headerHeight + 50;

      for (const id of sectionIds) {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
          if (sectionElement.offsetTop <= scrollPosition &&
              sectionElement.offsetTop + sectionElement.offsetHeight > scrollPosition) {
            currentSection = id;
            break;
          }
        }
      }

      if (!currentSection && window.scrollY === 0) {
        currentSection = 'inicio';
      } else if (!currentSection && window.scrollY + window.innerHeight >= document.body.offsetHeight - 20) {
        currentSection = sectionIds[sectionIds.length -1];
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <header id="header" ref={headerRef} className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content-wrapper">
        <div className="header-container">
          <div className="logo">
            <a href="#inicio">Daniel M. Vera</a>
          </div>
          <nav className="main-nav">
            <ul>
              {sectionIds.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={activeSection === id ? 'active' : ''}
                  >
                    {id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;