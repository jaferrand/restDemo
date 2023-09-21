
import React from 'react';
import './Home.css';

export const Home = () => {
  return (
    <div>
      {/* Banner con imagen representativa y logo */}
      <header className="banner">
        <img src="/public/imagen/logoPNG2.png" alt="Logo del restaurante" />
        <h1>GranDangolo</h1>
        <p>Bienvenidos a nuestro restaurante de comida italiana.</p>
      </header>

      {/* Sección de reseña de pastas frescas */}
      <section className="resena-pastas">
        <div className="resena-imagen">
          <img src="/imagen/camarones.jpg" alt="Pastas Frescas" />
        </div>
        <div className="resena-texto">
          <h2>Descubre Nuestras Pastas Frescas</h2>
          <p>En nuestro restaurante, preparamos las mejores pastas frescas siguiendo recetas tradicionales.</p>
        </div>
      </section>



      {/* Sección de foto interior y reseña italiana */}
      <section className="foto-interior">
        <h2>Disfruta del Auténtico Sabor Italiano</h2>
        <p>Nuestro restaurante te transportará a Italia con su ambiente y sabores auténticos.</p>
      </section>

      {/* Sección del mapa de ubicación */}
      <section className="mapa">
        <h2>Ubicación</h2>
        <div className="mapa-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7918.987216623316!2d-71.55406870974232!3d-33.01460923491705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1695183700558!5m2!1ses-419!2scl"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};



