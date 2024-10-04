// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import ProfileCard from './components/ProfileCard'; 
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './assets/css/global.css';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Services />
      <ProfileCard />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
