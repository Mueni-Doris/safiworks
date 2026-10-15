"use client";

import { useEffect, useState } from 'react';
import { getJson } from '@/lib/api';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getJson('/api/products').then(setProducts).catch(() => setProducts([]));
  }, []);

  return (
    <main style={{ maxWidth: 900, margin: '40px auto', padding: 24 }}>
      <h1>Cleaning products</h1>
      <p>Browse a curated selection of supplies used by our cleaning teams.</p>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {products.map((product) => (
          <article key={product.id} style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: 16 }}>
            <h3 style={{ marginTop: 0 }}>{product.name}</h3>
            <p style={{ marginBottom: 0, color: '#0f766e', fontWeight: 700 }}>{product.price || 'Available'}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
