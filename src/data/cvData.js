
import fotoDePerfil from '../assets/perfil.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/js.png';
import phpLogo from '../assets/php.png';
import pythonLogo from '../assets/python.png';
import sqlLogo from '../assets/sql.png';
import reactLogo from '../assets/react.png';
import laravelLogo from '../assets/laravel.png';
import bootstrapLogo from '../assets/boot.png';
import senaLogo from '../assets/sena.jpg';
import mirandaLogo from '../assets/miranda.jpeg';
import saludLogo from '../assets/salud.png';
import bocatoImagen from '../assets/bocato.png';
import licenciasImagen from '../assets/licencias.png';
import parqueaderoImagen from '../assets/parqueadero.png';
import freefireImagen from '../assets/freefire.png';

export const cvData = {
  personalInfo: {
    nombre: "Daniel Fernando Montealegre Vera",
    titulo: "Aprendiz SENA",
    subtitulo: "Análisis y Desarrollo de Software",
    foto: fotoDePerfil,
    perfilesImportantes: [
      {
        nombre: "GitHub",
        url: "https://github.com/DanielMontealgr3",
        iconoClase: "bi bi-github",
        altText: "Perfil de GitHub"
      },
      {
        nombre: "LinkedIn",
        url: "https://www.linkedin.com/in/daniel-montealegre-vera-5795632b3",
        iconoClase: "bi bi-linkedin",
        altText: "Perfil de LinkedIn"
      },
      {
        nombre: "Currículum",
        url: "https://drive.google.com/file/d/1N1aPRKi_CBG8uVP-plg5-2SN1gKKmHTO/view?usp=drive_link",
        iconoClase: "bi bi-file-earmark-person",
        altText: "Mi Hoja de Vida"
      }
    ]
  },
  sobreMi: {
    titulo: "Sobre Mí",
    texto: "Soy un joven colombiano de 19 años, residente en Ibagué, entusiasta y altamente motivado por el aprendizaje continuo. Me caracterizo por ser una persona sociable, amable y con una notable facilidad para adaptarme a nuevos entornos y equipos. Mi actitud profesional es 'chévere': positiva, proactiva y siempre dispuesto a colaborar y aprender de los demás, buscando crecer no solo en lo laboral sino también como persona.    Como aprendiz del SENA en Análisis y Desarrollo de Software, he cultivado una buena base en lógica de programación y poseo conocimientos básicos en tecnologías como Python, PHP, SQL, HTML, CSS, Bootstrap, y he tenido una introducción a Laravel y React. Mi objetivo es integrarme a una empresa donde pueda aplicar estos fundamentos, por modestos que sean, seguir aprendiendo intensamente y aportar mi energía y dedicación. Me interesa especialmente el desarrollo completo (full-stack), desde el diseño frontend hasta la implementación backend, y busco una oportunidad para crecer profesionalmente y contribuir de manera eficiente."
  },
  educacion: {
    titulo: "Mi Formación Académica",
    items: [
      {
        fecha: "2025",
        tipoEstudio: "Tecnólogo",
        tituloEstudio: "Análisis y Desarrollo de Software (ADSO)",
        nombreInstitucion: "SENA - CIC",
        imagenUrl: senaLogo,
        enCurso: true,
      },
      {
        fecha: "2023",
        tipoEstudio: "Técnico",
        tituloEstudio: "Técnico en sistemas",
        nombreInstitucion: "SENA - CIC",
        imagenUrl: senaLogo,
        urlCertificado: "https://drive.google.com/file/d/1WEFCGl785ea1Fd855s8y0CH2b7geNWcr/view?usp=sharing"
      },
      {
        fecha: "2023",
        tipoEstudio: "Bachiller",
        tituloEstudio: "Bachiller Académico",
        nombreInstitucion: "I.E. Francisco Miranda",
        imagenUrl: mirandaLogo,
        urlCertificado: "https://drive.google.com/file/d/1O2pXMJBN1EamvF7NuB7mIgLNqH2AY2CW/view?usp=sharing"
      },
    ],
  },
  conocimientos: {
    titulo: "Mis conocimientos Técnicos",
    lista: [
      { id: 'html', nombre: "HTML5", logo: htmlLogo, descripcion: "Utilizo HTML5 para estructurar el contenido de mis sitios web, lo que me permite organizar la información de manera clara y semántica, facilitando la base para cualquier desarrollo." },
      { id: 'css', nombre: "CSS", logo: cssLogo, descripcion: "Con CSS doy estilo y diseño visual a mis proyectos web. Me resulta una herramienta versátil y amigable para crear interfaces atractivas y adaptables a diferentes dispositivos." },
      { id: 'javascript', nombre: "JavaScript", logo: jsLogo, descripcion: "Implemento JavaScript para añadir interactividad y dinamismo a las páginas web. Lo utilizo para validaciones de formularios, mejorar la experiencia del usuario y gestionar eventos en tiempo real." },
      { id: 'bootstrap', nombre: "Bootstrap", logo: bootstrapLogo, descripcion: "Bootstrap es un framework que me gusta utilizar porque agiliza significativamente el proceso de diseño y desarrollo front-end, gracias a su amplio conjunto de componentes predefinidos y su sistema de rejilla responsivo." },
      { id: 'php', nombre: "PHP", logo: phpLogo, descripcion: "Utilizo PHP en el lado del servidor para procesar datos, interactuar con bases de datos (como consultar y verificar información) y generar contenido dinámico para los sitios web." },
      { id: 'python', nombre: "Python", logo: pythonLogo, descripcion: "Conozco la sintaxis y estructura de Python. Si bien no es mi lenguaje principal actualmente, lo he aplicado en tareas básicas y comprendo sus principios fundamentales de programación." },
      { id: 'sql', nombre: "SQL (MySQL)", logo: sqlLogo, descripcion: "Manejo SQL, principalmente con MySQL, para diseñar, consultar y administrar bases de datos relacionales. Me destaco en la creación de estructuras de datos lógicas y eficientes." },
      { id: 'react', nombre: "React", logo: reactLogo, descripcion: "Aunque mi experiencia práctica es inicial, comprendo la lógica de React y su enfoque basado en componentes para construir interfaces de usuario interactivas y dinámicas para aplicaciones web." },
      { id: 'laravel', nombre: "Laravel", logo: laravelLogo, descripcion: "He trabajado de forma introductoria con Laravel. Comprendo su arquitectura MVC y cómo este framework PHP agiliza el desarrollo de aplicaciones web robustas, incluyendo la gestión de bases de datos." },
    ]
  },
  referencias: {
    titulo: "Referencias",
    lista: [
      { nombre: "Cesar Esquivel", cargo: "Instructor SENA", telefono: "(321) 317-3993" },
      { nombre: "Milena Casas", cargo: "Instructora SENA", telefono: "(314) 370-9249" },
      { nombre: "Kristen Vera", cargo: "Familiar", telefono: "(311) 457-2379" }
    ]
  },
  portafolio: {
    titulo: "Conoce mis trabajos realizados en formación",
    proyectos: [
      {
        id: "proyecto-salud",
        nombre: "Proyecto Salud conectada",
        descripcion: "Proyecto formativo que integra diversas áreas de la salud en un sistema unificado para optimizar la gestión y efectividad de los servicios.",
        imagenUrl: saludLogo,
        urlGithub: "https://github.com/DanielMontealgr3/SALUD_CONNET.git",
      },
      {
        id: "bocato-landing",
        nombre: "Bocato - Comida Rápida",
        descripcion: "Práctica de desarrollo de una página web para un negocio de comida rápida, enfocada en la presentación de menú y contacto.",
        imagenUrl: bocatoImagen,
        urlGithub: "https://github.com/DanielMontealgr3/Prueba_web",
        urlNetlify: "https://bocadoveloz.netlify.app/"
      },
      {
        id: "licencias",
        nombre: "Comunienta - virtual shop",
        descripcion: "Practica que nos ayudo a definir licencias de software y saber como funcionan en dado caso de llegar a crear un sitio con licencias.",
        imagenUrl: licenciasImagen,
        urlGithub: "https://github.com/DanielMontealgr3/DANIEL_MONTEALEGRE_LICENCIAS",
      },
      {
        id: "parqueadero",
        nombre: "Parqueadero ",
        descripcion: "Ejercicio práctico de la base de datos de un parqueadero el cual ubica el cliente y mediante AJAX ubica los demás datos en tiempo real.",
        imagenUrl: parqueaderoImagen,
        urlGithub: "https://github.com/DanielMontealgr3/EJERCICIO_PARQ.git",
      },
      {
        id: "freefire",
        nombre: "Freefire-Logica ",
        descripcion: "Ejercicio práctico basado en el juego FreeFire el cual nos ayudó a mejorar nuestra lógica para estar consultando en tiempo real cualquier movimiento en la base de datos.",
        imagenUrl: freefireImagen,
        urlGithub: "https://github.com/DanielMontealgr3/FREEFIRE.git",
      },
    ]
  },
  contacto: {
    titulo: "Contáctame",
    nombreCompleto: "Daniel Fernando Montealegre Vera",
    estudio: "Análisis y Desarrollo de Software",
    celular: "313 593 6601",
    correo: "danielmontealegre408@gmail.com",
    ubicacion: "Ibagué - Tolima",
    redesSociales: {
      instagram: "https://www.instagram.com/daniel_montealegr3?igsh=dWE1aHZidTB5aTJu",
      facebook: "https://www.facebook.com/share/197mEvwhTH/",
      whatsapp: "https://wa.me/573135936601"
    }
  }
};