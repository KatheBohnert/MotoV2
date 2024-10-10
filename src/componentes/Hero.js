import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '../Assets/Hero.jpeg'; // Importa la imagen

const Hero = () => {
  return (
    <div id='home'
      className="hero"
      style={{ 
        backgroundImage: `url(${heroImage})`, // Usa la referencia importada
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw', // Ancho completo
        height: '100vw', // Altura igual al ancho para hacer un cuadrado
        maxHeight: '100vh', // Limita la altura máxima
        padding: '0', // Sin padding para mantener la forma cuadrada
        color: 'white',
        textAlign: 'center',
        display: 'flex', // Establecer flexbox para centrar
        alignItems: 'center', // Centrar verticalmente
        justifyContent: 'center' // Centrar horizontalmente
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1 className="hero-title">1ero LASI</h1>
            <h2 className="hero-subtitle">Proyecto Moto</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;