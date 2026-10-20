import React from 'react';
import { createRoot } from 'react-dom/client';
import { ClientShowcase } from './ClientShowcase';
import './client-showcase.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClientShowcase />
  </React.StrictMode>,
);
