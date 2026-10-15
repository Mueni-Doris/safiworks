"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="brand-block">
          <strong>Safiworks Clean</strong>
          <p className="muted">Premium cleaning services — satisfaction guaranteed.</p>
        </div>
        <nav className="footer-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/book">Book</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Safiworks Clean. All rights reserved.</div>
    </footer>
  );
}
