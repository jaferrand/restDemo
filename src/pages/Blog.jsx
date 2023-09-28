import React from 'react';
import './Blog.css';

export const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Nuestro Blog</h1>
      <div className="blog-post">
        <img
          src="img/blog3.jpg"
          alt="Plato de pasta"
          className="blog-post-image"
        />
        <div className="blog-post-content">
          <h2>Descubre los secretos de nuestras pastas frescas</h2>
          <p>
            En GranDangolo, nuestras pastas frescas son el corazón de nuestra
            cocina. En este artículo, te contaremos los secretos detrás de
            nuestras deliciosas pastas.
          </p>
          <a href="#blog" className="read-more-link">
            Leer más
          </a>
        </div>
      </div>
      <div className="blog-post">
        <img
          src="img/blog2.jpg"
          alt="Pizza italiana"
          className="blog-post-image"
        />
        <div className="blog-post-content">
          <h2>La auténtica pizza italiana</h2>
          <p>
            ¿Sabías que la pizza es originaria de Italia? Te invitamos a
            descubrir la verdadera pizza italiana y sus variaciones en nuestro
            restaurante.
          </p>
          <a href="#blog" className="read-more-link">
            Leer más
          </a>
        </div>
      </div>

      {/* Nueva sección: "El arte de hacer gnocchi" */}
      <div className="blog-post">
        <img
          src="img/blog5.jpg"
          alt="Gnocchi caseros"
          className="blog-post-image"
        />
        <div className="blog-post-content">
          <h2>El arte de hacer gnocchi</h2>
          <p>
            Los gnocchi son una deliciosa especialidad italiana. Aprende cómo
            hacer gnocchi caseros con nuestra receta exclusiva.
          </p>
          <a href="#blog" className="read-more-link">
            Leer más
          </a>
        </div>
      </div>

      {/* Nueva sección: "Los secretos de la auténtica lasaña" */}
      <div className="blog-post">
        <img
          src="img/blog4.jpg"
          alt="Lasaña italiana"
          className="blog-post-image"
        />
        <div className="blog-post-content">
          <h2>Los secretos de la auténtica lasaña</h2>
          <p>
            La lasaña es un plato emblemático de Italia. Descubre cómo preparar
            la lasaña perfecta siguiendo nuestra receta tradicional.
          </p>
          <a href="/blog/4" className="read-more-link">
            Leer más
          </a>
        </div>
      </div>
    </div>
  );
};


