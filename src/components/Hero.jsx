import React, { useEffect } from 'react';
import './styles/Hero.css';

export default function Hero() {
  useEffect(() => {
    const textElement = document.querySelector('.animated-text');
    const text = "Viajes inolvidables en Colombia y más allá...";
    let index = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 80;

    function type() {
      if (isDeleting) {
        textElement.textContent = text.substring(0, index--);
        if (index < 0) {
          isDeleting = false;
        }
      } else {
        textElement.textContent = text.substring(0, index++);
        if (index === text.length) {
          isDeleting = true;
        }
      }
      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    type();
  }, []);

  return (
    <section className="hero">
      <h1>Explora los Mejores Destinos con Piquitours</h1>
      <h2 className="animated-text"></h2>
    </section>
  );
}
