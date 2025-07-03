import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from "../components/Header";
import './styles/Nosotros.css';
import { FaUsers, FaMapMarkedAlt, FaHandshake, FaLinkedin, FaGithub, FaBus, FaRocket } from 'react-icons/fa';
import Footer from '../components/Footer';

const team = [
  {
    name: "Carlos Calderón Rojas",
    role: "Fundador & CEO",
    experience: "11 años",
    bio: "Visionario del turismo accesible con pasión por las experiencias auténticas",
    photo: "https://scontent.fpei2-2.fna.fbcdn.net/v/t39.30808-6/470142599_888736366767042_441264858313248290_n.jpg",
    social: { linkedin: "#", github: "#" }
  },
  {
    name: "Equipo Dev 1",
    role: "Líder Tecnológico",
    experience: "8 años",
    bio: "Arquitecto principal de soluciones digitales innovadoras",
    photo: "https://picsum.photos/200/200?random=1",
    social: { linkedin: "#", github: "#" }
  },
  {
    name: "Equipo Dev 2",
    role: "Especialista UI/UX",
    experience: "5 años",
    bio: "Diseñador de experiencias de usuario memorables",
    photo: "https://picsum.photos/200/200?random=2",
    social: { linkedin: "#", github: "#" }
  },
  {
    name: "Equipo Dev 3",
    role: "Ingeniero Backend",
    experience: "4 años",
    bio: "Especialista en sistemas escalables y seguros",
    photo: "https://picsum.photos/200/200?random=3",
    social: { linkedin: "#", github: "#" }
  }
];

const TimelineEvent = ({ year, title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div 
      ref={ref}
      className="timeline-event"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="timeline-marker"></div>
      <h3>{year} - {title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const TeamCard = ({ member, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      className="team-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2 }}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="avatar-container">
            <img 
              src={member.photo} 
              alt={member.name}
              onError={(e) => {
                e.target.src = 'data:image/png;base64,iVBORw0KGgoAAAព0x0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
                e.target.alt = 'Imagen no disponible';
              }}
            />
            <div className="experience-badge">{member.experience}</div>
          </div>
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
        
        <div className="card-back">
          <div className="bio-content">
            <h4>{member.name}</h4>
            <p>{member.bio}</p>
            <div className="social-links">
              <a href={member.social.linkedin}><FaLinkedin /></a>
              <a href={member.social.github}><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Nosotros() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main>
      <div className="nosotros-container">
        <h1>Nosotros</h1>
        <Header />
        
        <section className="hero-nosotros">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-heading"
          >
            Más de una década creando<br />
            <span className="highlight">experiencias inolvidables</span>
          </motion.h1>
          
          <div className="hero-stats">
            <div className="stat-item">
              <FaBus className="stat-icon" />
              <div>
                <h3>15K+</h3>
                <p>Viajeros transportados</p>
              </div>
            </div>
            <div className="stat-item">
              <FaMapMarkedAlt className="stat-icon" />
              <div>
                <h3>50+</h3>
                <p>Destinos nacionales</p>
              </div>
            </div>
          </div>
        </section>

        <section className="historia-section">
          <h2>Nuestra Travesía</h2>
          <div className="timeline">
            <TimelineEvent
              year="2013"
              title="Humble Beginnings"
              description="Primer viaje familiar desde El Espinal hasta el Caribe"
            />
            <TimelineEvent
              year="2015"
              title="Formalización"
              description="Registro oficial como empresa turística"
            />
            <TimelineEvent
              year="2020"
              title="Expansión Nacional"
              description="Cobertura en 32 departamentos"
            />
            <TimelineEvent
              year="2024"
              title="Reconocimiento Nacional"
              description="Premio a la Innovación Turística"
            />
          </div>
        </section>

        <section className="equipo-section" ref={ref}>
          <h2>El Alma de Piquitours</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </section>

        <section className="philosophy-section">
          <h2>Nuestra Esencia</h2>
          <div className="philosophy-grid">
            <motion.div 
              className="philosophy-item"
              whileHover={{ scale: 1.05 }}
            >
              <FaHandshake className="philosophy-icon" />
              <h3>Confianza Transparente</h3>
              <p>Operamos con total transparencia en cada transacción</p>
            </motion.div>
            <motion.div 
              className="philosophy-item"
              whileHover={{ scale: 1.05 }}
            >
              <FaRocket className="philosophy-icon" />
              <h3>Innovación Constante</h3>
              <p>Sistemas de reservas y pagos de última generación</p>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}