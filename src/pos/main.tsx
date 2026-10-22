import React from 'react';
import { createRoot } from 'react-dom/client';
import { PosShowcase } from './PosShowcase';
import './pos-showcase.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PosShowcase />
  </React.StrictMode>,
);
