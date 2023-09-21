
import React from 'react';
import './About.css';

export const About = () => {
  return (
    <div>
      {/* Banner con imagen representativa y título */}
      <header className="banner">
        <h1>Nuestra Historia</h1>
      </header>

      {/* Sección de historia con abuela */}
      <section className="historia">
        <div className="historia-imagen">
          <img src="/src/assets/img/about1.jpg" alt="Abuela del restaurante" />
        </div>
        <div className="historia-texto">
          <h2>La Abuela que Inspiró Nuestro Restaurante</h2>
          <p>GranDangolo es más que un restaurante; es un tributo a nuestra amada abuela, quien nos transmitió la pasión por la cocina italiana. Con recetas familiares transmitidas de generación en generación, hemos creado un lugar donde puedes experimentar el sabor auténtico de Italia.</p>
        </div>
      </section>

      {/* Otra sección de historia */}
      <section className="historia2">
        <div className="historia2-imagen">
          <img src="/src/assets/img/about2.jpg" alt="Interior del restaurante" />
        </div>
        <div className="historia2-texto">
          <h2>Un Rincón de Italia en Cada Plato</h2>
          <p>Nuestro compromiso es ofrecer la mejor experiencia culinaria italiana. Cada plato se elabora con ingredientes frescos y auténticos. Desde nuestros noquis caseros hasta nuestras deliciosas pastas, queremos llevarte en un viaje gastronómico a Italia en cada bocado.</p>
        </div>
      </section>
    </div>
  );
};



