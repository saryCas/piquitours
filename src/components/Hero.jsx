// Hero.jsx
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import './styles/Hero.css'
const TEXTS = [
  "Viajes inolvidables en Colombia",
  "Experiencias únicas en Colombia",
  "Aventuras personalizadas",
  "Turismo sostenible y responsable"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % TEXTS.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const destination = document.querySelector('.destinations-section');
    if (destination) {
      destination.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span>Explora el Mundo</span><br />
          con Piquitours
        </h1>
        
        <div className="animated-text-container">
          {TEXTS.map((text, index) => (
            <div 
              key={text}
              className={`animated-text ${index === currentIndex ? 'active' : ''}`}
              aria-hidden={index !== currentIndex}
            >
              {text}
            </div>
          ))}
        </div>

        <button 
          className="button-continue"
          onClick={handleScroll}
          aria-label="Explorar destinos"
        >
          Descubre tu próxima aventura
          <span className="arrow-down">↓</span>
        </button>
      </div>

      <div className="redes-sociales">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
          <span>Facebook</span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
          <span>Instagram</span>
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
          <FaWhatsapp />
          <span>Contáctanos</span>
        </a>
        <a href="https://piquitours.com" target="_blank" rel="noreferrer">
          <TbWorld />
          <span>Nuestra Web</span>
        </a>
      </div>
    </section>
  );
}