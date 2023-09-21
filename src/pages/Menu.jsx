import React from 'react';
import './Menu.css';

export const Menu = () => {
  return (
    <div className="container">
      <h1>Nuestros Menús</h1>

      {/* Menú 1 */}
      <div className="menu-item">
        <h2 className='text-center'>Menú Clásico</h2>
        <img src="/public/imagen/menu1.jpg" alt="Menú 1" />
        <p>Entrada: Bruschetta italiana</p>
        <p>Plato Principal: Spaghetti Carbonara</p>
        <p>Postre: Tiramisú</p>
        <p className="price">Precio: $15,000 CLP</p>
      </div>

      {/* Menú 2 */}
      <div className="menu-item">
        <h2 className='text-center'>Menú Vegetariano</h2>
        <img src="/public/imagen/menu2.jpg" alt="Menú 2" />
        <p>Entrada: Caprese de tomate y mozzarella</p>
        <p>Plato Principal: Lasagna de vegetales</p>
        <p>Postre: Panna Cotta</p>
        <p className="price">Precio: $12,000 CLP</p>
      </div>

      {/* Menú 3 */}
      <div className="menu-item">
        <h2 className='text-center'>Menú de Mariscos</h2>
        <img src="/public/imagen/menu3.jpg" alt="Menú 3" />
        <p>Entrada: Calamares a la romana</p>
        <p>Plato Principal: Risotto de mariscos</p>
        <p>Postre: Gelato de limón</p>
        <p className="price">Precio: $18,000 CLP</p>
      </div>

      {/* Menú 4 */}
      <div className="menu-item">
        <h2 className='text-center'>Menú Ejecutivo</h2>
        <img src="/public/imagen/menu4.jpg" alt="Menú 4" />
        <p>Entrada: Ensalada César</p>
        <p>Plato Principal: Filete de salmón a la parrilla</p>
        <p>Postre: Cannoli relleno de chocolate</p>
        <p className="price">Precio: $17,000 CLP</p>
      </div>
    </div>
  );
};


