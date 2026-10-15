"use client";

import { useEffect, useState } from 'react';
import { getJson } from '@/lib/api';

function ServiceCard({ s }) {
  return (
    <article className="service-card">
      <div className="visual">
        <svg viewBox="0 0 64 64" className="icon">
          <rect x="6" y="10" width="52" height="44" rx="8" fill="#fff" stroke="#e6f6f2" />
          <circle cx="20" cy="32" r="8" fill="#7dd3fc" />
        </svg>
      </div>
      <div className="meta">
        <h4>{s.name || s.title || 'Premium Service'}</h4>
        <p className="desc">{s.description || s.summary || 'Experienced team, eco-friendly products.'}</p>
      </div>
      <div className="price">{s.price ? `$${s.price}` : ''}</div>
    </article>
  );
}

export default function ServicesGrid() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getJson('/api/packages').then((data) => setServices(data)).catch(() => {
      setServices([
        { id: 1, name: 'Home Refresh', description: 'Routine cleaning for busy households.', price: '120' },
        { id: 2, name: 'Deep Clean', description: 'Thorough deep cleaning and disinfection.', price: '220' },
        { id: 3, name: 'Office Shine', description: 'Reliable service for professional spaces.', price: '180' },
      ]);
    });
  }, []);

  return (
    <section className="services">
      <div className="services-grid">
        {services.map((s) => (
          <ServiceCard key={s.id || s.title} s={s} />
        ))}
      </div>
    </section>
  );
}
