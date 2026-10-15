import React from 'react';
import { createRoot } from 'react-dom/client';
import { Portfolio } from './portfolio/Portfolio';
import './portfolio/portfolio.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
);
