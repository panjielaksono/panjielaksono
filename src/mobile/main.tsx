import React from 'react';
import { createRoot } from 'react-dom/client';
import { MobileShowcase } from './MobileShowcase';
import './mobile-showcase.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MobileShowcase kind={location.pathname.includes('mafits') ? 'mafits' : 'isilistrik'} />
  </React.StrictMode>,
);
