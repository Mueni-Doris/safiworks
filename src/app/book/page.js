"use client";

import { useState } from 'react';
import { postJson } from '@/lib/api';

const initialState = {
  fullName: '',
  email: '',
  phoneNumber: '',
  physicalAddress: '',
  serviceAreaId: '2f3f3b44-0f9c-4b5c-8ee2-0c9ff840d873',
  preferredDate: '2026-08-15',
  preferredTimeSlot: '09:00',
  specialInstructions: '',
  packageId: 'f6e97678-e8e7-49aa-8ff5-bce2f94eae15',
  propertyType: 'Apartment',
  numberOfRooms: 2,
  addOns: 'None',
  estimatedPrice: 120,
};

export default function BookPage() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Submitting...');

    try {
      await postJson('/api/bookings', {
        ...form,
        numberOfRooms: Number(form.numberOfRooms),
        estimatedPrice: Number(form.estimatedPrice),
      });
      setStatus('Booking request submitted successfully.');
      setForm(initialState);
    } catch (error) {
      setStatus(error.message || 'Submission failed.');
    }
  };

  return (
    <main style={{ maxWidth: 720, margin: '40px auto', padding: 24 }}>
      <h1>Book a cleaning visit</h1>
      <p>Use this simple booking experience to request a service for your space.</p>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
        <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Your name" style={{ padding: 10, borderRadius: 8, border: '1px solid #cbd5e1' }} />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" style={{ padding: 10, borderRadius: 8, border: '1px solid #cbd5e1' }} />
        <input name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="Phone" style={{ padding: 10, borderRadius: 8, border: '1px solid #cbd5e1' }} />
        <input name="physicalAddress" value={form.physicalAddress} onChange={handleChange} placeholder="Address" style={{ padding: 10, borderRadius: 8, border: '1px solid #cbd5e1' }} />
        <input name="preferredDate" value={form.preferredDate} onChange={handleChange} type="date" style={{ padding: 10, borderRadius: 8, border: '1px solid #cbd5e1' }} />
        <input name="preferredTimeSlot" value={form.preferredTimeSlot} onChange={handleChange} type="time" style={{ padding: 10, borderRadius: 8, border: '1px solid #cbd5e1' }} />
        <textarea name="specialInstructions" value={form.specialInstructions} onChange={handleChange} placeholder="Tell us about your space and preferred date" rows={5} style={{ padding: 10, borderRadius: 8, border: '1px solid #cbd5e1' }} />
        <button type="submit" style={{ padding: '10px 14px', width: 'fit-content', border: 'none', borderRadius: 999, background: '#0f766e', color: 'white' }}>Request booking</button>
      </form>
      {status ? <p style={{ marginTop: 12, color: '#0f766e' }}>{status}</p> : null}
    </main>
  );
}
