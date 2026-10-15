"use client";

import Link from 'next/link';

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#g)" />
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#7dd3fc" />
                <stop offset="1" stopColor="#0f766e" />
              </linearGradient>
            </defs>
          </svg>
          <span className="brand">Safiworks Clean</span>
        </Link>

        <nav className="nav-links">
          <Link href="/products">Products</Link>
          <Link href="/book">Book</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/book" className="cta">Book Now</Link>
        </nav>
      </div>
    </header>
  );
}
