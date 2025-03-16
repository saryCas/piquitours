import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './styles/WhyUs.css';

export default function WhyUs() {
  const [activeTab, setActiveTab] = useState('experiencia');
  
  const tabs = [
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'servicios', label: 'lorem ipsum' },
    { id: 'tecnologia', label: 'lorem ipsum' }
  ];

  return (
    <section className="why-us" id='why-us-x'>
      <div className="why-us-container">
        <motion.div 
          className="why-us-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>Vive la Diferencia Piquitours</h2>
          
          <div className="why-us-tabs" id='whi-us-tabs-x'>
            {tabs.map(tab => (
              <div
                key={tab.id}
                id={`why-us-tab ${activeTab === tab.id ? 'active' : ''}`}
                className={`why-us-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </div>
            ))}
          </div>

          {activeTab === 'experiencia' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p className="feature-text">
                {/* Con más de 15 años creando experiencias inolvidables, nuestro equipo de expertos 
                locales combina conocimiento profundo con pasión por el turismo sostenible. 
                Cada itinerario es cuidadosamente diseñado para ofrecer autenticidad y lujo. */}
                 Con más de x años creando experiencias inolvidables... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum minima ipsam sunt, rem suscipit officia maxime maiores debitis dicta magni quam temporibus nam perspiciatis libero veniam quo placeat molestias ea.
              </p>
              
              <div className="feature-grid">
                <div className="feature-card">
                  <div className="feature-icon">
                    <img src="https://www.navafas.com/wp-content/uploads/2022/08/Envio-seguro-seguridad-garantizada.png" alt="Experiencia" />
                  </div>
                  <h3>Reconocimientos Nacionales</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum accusamus asperiores ipsa? Tenetur incidunt facere vered</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Contenido de otros tabs */}

        </motion.div>

        <motion.div 
          className="why-us-visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="why-us-badge floating-element">
            <span>+15 Años</span>
            <span>de Experiencia</span>
          </div>
          <img 
            src="https://media.tacdn.com/media/attractions-splice-spp-674x446/12/31/a9/19.jpg" 
            alt="Equipo Piquitours" 
            className="why-us-image"
          />
        </motion.div>
      </div>

      {/* Sección adicional */}
      <div className="feature-grid">
        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
        >
          <div className="feature-icon">
            <img src="https://www.navafas.com/wp-content/uploads/2022/08/Envio-seguro-seguridad-garantizada.png" alt="Seguridad" />
          </div>
          <h3>Seguridad Garantizada</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem reiciendis nobis unde eum impedit quo consequuntur! Laborum fugiat deleniti ut delectus maxime, reprehenderit ullam necessitatibus! Cumque, aliquid. Adipisci, molestias.</p>
        </motion.div>

        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
        >
          <div className="feature-icon">
            <img src="https://okdiario.com/img/viajes/2016/12/28/10-experiencias-unicas-asequibles-para-todos-los-bolsillos-1.jpg" alt="Exclusividad" />
          </div>
          <h3>Experiencias Únicas</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aspernatur laborum doloribus nobis repellendus omnis, quidem numquam. Provident facilis eligendi, eius commodi, odio, quibusdam omnis quam nisi ex voluptates hic.</p>
        </motion.div>

        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
        >
          <div className="feature-icon">
            <img src="https://u360campus.com/wp-content/uploads/2022/05/Featured_05192022-1-770x400.jpg" alt="Tecnología" />
          </div>
          <h3>Lorem ipsum dolor sit</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti aperiam adipisci eaque architecto dolore aut natus ut! Ea facilis aperiam veritatis unde fuga, optio blanditiis quibusdam officia ad delectus?</p>
        </motion.div>
      </div>
    </section>
  );
}