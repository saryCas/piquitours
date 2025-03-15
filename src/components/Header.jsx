import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa'; // Importar iconos
import "./styles/Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleThemeChange = (e) => {
      setDarkMode(e.matches);
    };

    window.addEventListener("scroll", handleScroll);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo-container">
          <img className="logo" src="/logo.png" alt="Piquitours y Eventos (LOGO)." />
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/destinos">Destinos</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />} {/* Mostrar icono */}
        </button>
      </div>
    </header>
  );
}
