import React from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import WhyUs from '../components/WhyUs';
import Footer from '../components/Footer';
import './styles/Home.css';

export default function Home() {
  return (
    <main data-page="home">
      <div className="content">
        <Hero />
        <Destinations />
        <WhyUs />
        <Footer />
      </div>
    </main>
  );
}