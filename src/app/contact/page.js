"use client";

import { useState } from 'react';
import { postJson } from '@/lib/api';

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');

    try {
      await postJson('/api/contact-requests', form);
      setStatus('Thanks! Your request has been received.');
      setForm(initialState);
    } catch (error) {
      setStatus(error.message || 'Submission failed.');
    }
  };

  return (
    <main style={{ maxWidth: 720, margin: '40px auto', padding: 24 }}>
      <h1>Contact Safiworks Clean</h1>
      <p>Reach us for estimates, questions, or scheduling support.</p>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" style={{ padding: 10, borderRadius: 8, border: '1px solid #cbd5e1' }} />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" style={{ padding: 10, borderRadius: 8, border: '1px solid #cbd5e1' }} />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" style={{ padding: 10, borderRadius: 8, border: '1px solid #cbd5e1' }} />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help?" rows={5} style={{ padding: 10, borderRadius: 8, border: '1px solid #cbd5e1' }} />
        <button type="submit" style={{ padding: '10px 14px', width: 'fit-content', border: 'none', borderRadius: 999, background: '#0f766e', color: 'white' }}>Send request</button>
      </form>
      {status ? <p style={{ marginTop: 12, color: '#0f766e' }}>{status}</p> : null}
    </main>
  );
}
