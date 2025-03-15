import React from 'react';
import './styles/Destinations.css';

export default function Destinations() {
  return (
    <section className="destinations">
      <h2>Destinos Destacados</h2>
      <div className="destination-card">
        <h3>Destino 1</h3>
        <p>Descripción del destino 1.</p>
      </div>
      <div className="destination-card">
        <h3>Destino 2</h3>
        <p>Descripción del destino 2.</p>
      </div>
      <div className="destination-card">
        <h3>Destino 3</h3>
        <p>Descripción del destino 3.</p>
      </div>
    </section>
  );
}
