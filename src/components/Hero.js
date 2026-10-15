"use client";

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Professional Cleaning • Trusted Teams</p>
          <h1 className="hero-title">A cleaner home. A clearer day.</h1>
          <p className="hero-sub">Premium, reliable cleaning services tailored to your life. Book a trusted team in minutes.</p>

          <div className="hero-ctas">
            <Link href="/book" className="btn primary">Book a Visit</Link>
            <Link href="/contact" className="btn ghost">Get a Quote</Link>
          </div>

          <div className="trust-row">
            <div className="stat">
              <strong>4.9</strong>
              <span>Average rating</span>
            </div>
            <div className="stat">
              <strong>10k+</strong>
              <span>Homes served</span>
            </div>
            <div className="stat">
              <strong>24h</strong>
              <span>Support response</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden>
          <div className="card mock">
            <svg viewBox="0 0 400 280" className="illustration">
              <defs>
                <linearGradient id="bg" x1="0" x2="1">
                  <stop offset="0" stopColor="#ecfeff" />
                  <stop offset="1" stopColor="#f0fdfa" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="400" height="280" rx="20" fill="url(#bg)" />
              <circle cx="80" cy="90" r="32" fill="#7dd3fc" opacity="0.95" />
              <rect x="140" y="60" width="200" height="28" rx="8" fill="#a7f3d0" />
              <rect x="140" y="100" width="160" height="14" rx="6" fill="#bbf7d0" />
              <rect x="24" y="170" width="120" height="80" rx="10" fill="#dbeafe" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
