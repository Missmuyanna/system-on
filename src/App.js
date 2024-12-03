//importar el use estates de react para el tiempo
import { useState, useEffect } from 'react';
// Importamos el archivo de estilos css para aplicarle diseño a los componentes HTML.
import './App.css';

import ReactDOM from 'react-dom/client';
import React from 'react';
// importar de formulario de forms
import ContactoForm from './ContactoForm';
//version de celuco
import './celu.css';


// La ruta de mi foto  que está en la carpeta public
const MiFoto = `${process.env.PUBLIC_URL}/images/mifoto.jpg`;
//fondo seccion sobre mi
const backgroundVideoSobreMi = `${process.env.PUBLIC_URL}/videos/fondito.mp4`;
//fondo seccion portfolio
const backgroundVideoPortfolio = `${process.env.PUBLIC_URL}/videos/portfolio.mp4`;
//fondo seccion contacto
const backgroundVideoContacto = `${process.env.PUBLIC_URL}/videos/contacto.mp4`;


//funcion de carga del sppiner
function LoadingSpinner() {
  return (
    <div className="lds-hourglass"></div>
  );
}

// Definimos el componente principal de la aplicación, llamado "App".
function App() {
  // Estado para controlar si la página está cargando
  const [loading, setLoading] = useState(true);

  // Usamos useEffect para simular que la página carga y luego quitar el spinner
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  // Cambiamos el estado a false después de 3 segundos
    }, 3000);
    return () => clearTimeout(timer); // Limpiar el temporizador
  }, []);
  // Aquí retornamos  HTML que se va a renderizar en la página.
  return (
    <div>
      {loading ? (
        // Mostrar spinner mientras loading es true
        <LoadingSpinner />
      ) : (
        // Mostrar el contenido cuando la carga termine (loading es false)
        <div style={{ 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',   
          margin: 0
        }}>
        {/* MI FOTO PERSONAL */}             
          <div className="mi-foto-container">
            <img src={MiFoto} alt="Mi foto" className="mi-foto" />
          </div>

           <div className="App">
            <header className="header">
              <div className="logo">
              <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="logo-img" />
          </div>
          {/* Parte horizontal de navegación */}
        <nav className="nav">
          <ul>
            <li><a href="#inicio">INICIO</a></li>
            <li><a href="#sobre-mi">SOBRE MÍ</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#contacto">CONTACTO</a></li>
          </ul>
        </nav>
      </header>
      {/* Sección de Inicio */}
      <section id="inicio" className="section inicio">
        {/* Video de fondo */}
        <video autoPlay loop muted playsInline className="video-background">
          <source src={`${process.env.PUBLIC_URL}/videos/teddy.mp4`} type="video/mp4" />
        </video>
        {/* TEXTO DE INICIO */}
        <h2 className="nombre-header">Fabianna Julio</h2>
        <h2 className="bienvenida-header">Bienvenidos a mi página</h2>
      </section>

      {/* Sección Sobre Mí */}
      <section id="sobre-mi" className="section sobre-mi">
        <video
          autoPlay
          loop
          muted
          className="background-video-sobremi"
        >
          <source src={backgroundVideoSobreMi} type="video/mp4" />
        </video>
        <div className="text-background">
         {/* TEXTO DE SOBRE MI*/} 
          <h2>Sobre Mí</h2>
          <p>Información sobre mí...</p>
        </div>
      </section>

      {/* Sección Portfolio */}
      <section id="portfolio" className="section portfolio">
      <video
          autoPlay
          loop
          muted
          className="background-video-portfolio"
        >
          <source src={backgroundVideoPortfolio} type="video/mp4" />
        </video>
        <div className="text-background-portfolio">
          {/* TEXTO DE PORTFOLIO*/}
        <h2>Mi Portfolio</h2>
        <p>Proyectos realizados...</p>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="section contacto">
      <video
          autoPlay
          loop
          muted
          className="background-video-contacto"
        >
          <source src={backgroundVideoContacto} type="video/mp4" />
        </video>
        <div className="text-background-contacto">
            {/* TEXTO DE CONTACTO */}
          <h2>Dejame tus datos</h2>
          <p>Me pondré en contacto contigo lo antes posible</p>
          <ContactoForm />
        </div>
      </section>
    </div>          
        </div>
      )}
    </div>
  );
}

// Exportamos el componente App para que pueda ser utilizado en otros archivos de la aplicación.
export default App;

