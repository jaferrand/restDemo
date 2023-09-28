import React from 'react';
import './Menu.css';
import data from '../../data.json';
import { Card } from 'react-bootstrap';

export const Menu = () => {
  return (
    <div className="container">
      <h1>Nuestros Menús</h1>
      {data.menus.map(menu => (
        <Card key={menu.id} style={{ width: '30rem' }}>
          <Card.Img variant="top" src={menu.imagen} />
          <Card.Body>
            <Card.Title>{menu.nombrePlato}</Card.Title>
            <Card.Text>plato pricipal: {menu.platoPrincipal}</Card.Text>
            <Card.Text>{menu.entrada}</Card.Text>
            <Card.Text>{menu.postre}</Card.Text>
            <Card.Text>{menu.precio}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
