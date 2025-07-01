import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiStar } from 'react-icons/fi';
import './styles/Destinations.css';

const DestinationCard = ({ destination, index }) => {
  return (
    <motion.div
      className="destination-card"
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 90
      }}
    >
      {/* Efectos de brillo dinámicos */}
      {[...Array(2)].map((_, i) => (
        <div 
          key={i}
          className="glow-effect"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${0.5 + Math.random() * 0.5})`
          }}
        />
      ))}

      <div className="image-container">
        <img 
          src={destination.image} 
          alt={destination.title}
          loading="lazy"
        />
        
        <div className="rating-badge">
           ⭐
          <span>{destination.rating}</span>
        </div>
      </div>

      <div className="content-container">
        <div className="card-header">
          <h3>{destination.title}</h3>
          <motion.div 
            className="price-tag"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            ${destination.price.toLocaleString()}
          </motion.div>
        </div>

        <p id='card-description-01'>{destination.description}</p>

        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Conoce mas
          <FiArrowUpRight style={{ fontSize: '1.4rem' }} />
        </motion.button>
      </div>

      {/* Partículas flotantes */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={i}
          className="floating-particle"
          style={{
            width: `${Math.random() * 60 + 20}px`,
            height: `${Math.random() * 60 + 20}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 3}s`,
            animationDuration: `${8 + Math.random() * 8}s`
          }}
        />
      ))}
    </motion.div>
  );
};

const Destinations = () => {
  const destinations = [
    {
      title: "Expedición Amazonas",
      description: "Aventura de 7 días en la selva con alojamiento premium y guías expertos",
      image: "p7.jpg",
      rating: 4.9,
      price: 0
    },
    {
      title: "Tesoro Tayrona",
      description: "Caminata épica de 5 días hacia la ciudad perdida, incluye camping de lujo",
      image: "https://cdn-ilcfjhh.nitrocdn.com/AMsOVcaxJEBiDUJmLghgteLoXmGyZJhB/assets/images/optimized/rev-4df4e7f/cartagena-tours.co/wp-content/uploads/2022/11/carthagene%C2%A9leandro-loureiro.jpg",
      rating: 4.8,
      price: 0
    },
    {
      title: "Paraíso Caribe",
      description: "Tour de 10 días por las playas más espectaculares del Caribe colombiano",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f",
      rating: 5.0,
      price: 0
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f",
      rating: 5.0,
      price: 0
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f",
      rating: 5.0,
      price: 0
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
      image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f",
      rating: 5.0,
      price: 0
    }
  ];

  return (
    <section className="destinations-section" id="destinos">
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            destination={destination}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
