import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () => {
  return (
    <footer className="bg-body-tertiary py-3 text-center">
      
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} GranDangolo</p>
          </Col>
        </Row>
      
    </footer>
  );
};
