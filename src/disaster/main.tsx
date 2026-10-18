import React from 'react';
import { createRoot } from 'react-dom/client';
import { DisasterShowcase } from './DisasterShowcase';
import './disaster-showcase.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DisasterShowcase />
  </React.StrictMode>,
);
