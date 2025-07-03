
import './App.css'
import Header from './components/Header'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Destinos from "./pages/Destinos";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  )
}

export default App

