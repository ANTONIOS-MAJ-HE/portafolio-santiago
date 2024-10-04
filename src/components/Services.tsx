// src/components/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <main className="contenedor sombra">
      <h2>Mis Servicios</h2>
      <div className="servicios">
        <section className="servicio">
          <h3>Diseño Web</h3>
          <div className="iconos">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-palette" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4.5 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
              <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
              <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
              <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
            </svg>
          </div>
          <p>Pellentesque odio ex, bibendum quis convallis scelerisque.</p>
        </section>

        <section className="servicio">
          <h3>Aplicaciones Web</h3>
          <div className="iconos">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-android" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <line x1="4" y1="10" x2="4" y2="16" />
              <line x1="20" y1="10" x2="20" y2="16" />
              <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
              <line x1="8" y1="3" x2="9" y2="5" />
              <line x1="16" y1="3" x2="15" y2="5" />
              <line x1="9" y1="18" x2="9" y2="21" />
              <line x1="15" y1="18" x2="15" y2="21" />
            </svg>
          </div>
          <p>Pellentesque odio ex, bibendum quis convallis scelerisque.</p>
        </section>
      </div>
    </main>
  );
};

export default Services;
