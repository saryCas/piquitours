
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import './styles/Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/+573208126905', '_blank');
  };

  return (
    <footer className="footer">
      <div className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp className="arrow-icon" />
      </div>

      <div className="floating-whatsapp" onClick={openWhatsApp}>
        <FaWhatsapp className="whatsapp-icon" />
      </div>
      
      <div className="footer-content">
        <div className="footer-section">
          <img 
            src="/logo_entero.png" 
            alt="Piquitours Logo" 
            className="footer-logo"
          />
          <p>Expertos en experiencias turísticas auténticas en El Espinal, Tolima</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><a href="/destinos">Destinos Turísticos</a></li>
            <li><a href="/paquetes">Paquetes Especiales</a></li>
            <li><a href="/nosotros">Sobre Nosotros</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon"><FaFacebook /></a>
            <a href="https://instagram.com" className="social-icon"><FaInstagram /></a>
            <a href="https://twitter.com" className="social-icon"><FaTwitter /></a>
            <a href="https://whatsapp.com" className="social-icon"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">Suscribirse</button>
          </form>
          <p className="newsletter-text">Recibe ofertas exclusivas y novedades</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Piquitours & Eventos. Todos los derechos reservados.</p>
        <p>El Espinal, Tolima - Colombia | NIT: xxxxx | RNT: xxxxx</p>
      </div>
    </footer>
  );
}
