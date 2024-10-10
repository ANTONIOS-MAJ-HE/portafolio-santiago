// src/components/Hero.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import style from './Hero.module.css';
import L from 'leaflet';
import customIconUrl from '../assets/icons/location.png';

// Icono personalizado para el marcador del mapa
const customIcon = new L.Icon({
  iconUrl: customIconUrl,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Hero = () => {
  const [isMapExpanded, setIsMapExpanded] = useState(false);

  const toggleMapSize = () => {
    setIsMapExpanded(!isMapExpanded);
  };

  return (
    <section className={style.hero}>
      <div className={style.contenidoHero}>
        <h2 className={style.h2Hero}>Diseño y Desarrollo de Software <span>Freelancer</span></h2>
        <div className={style.ubicacion} onClick={toggleMapSize}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFC107" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="11" r="3" />
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <p>Lima, Santa Anita</p>
        </div>
        <a className={style.boton} href="#">Contactar</a>
      </div>

      <div className={`${style.mapContainer} ${isMapExpanded ? style.expanded : ''}`} onDoubleClick={toggleMapSize}>
        <MapContainer center={[-12.0553, -76.9711]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-12.0553, -76.9711]} icon={customIcon}>
            <Popup>
              Estoy aquí: Lima, Santa Anita
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Hero;
