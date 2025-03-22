import React from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import WhyUs from '../components/WhyUs';
import Footer from '../components/Footer';
// import './components/styles/Home.css'; // Importar el archivo CSS
import './styles/Home.css'

export default function Home() {
  return (
    <main>
      <div className="content">
        <Hero />
        <Destinations />
        <WhyUs />
        <Footer />
      </div>
    </main>
  );
}