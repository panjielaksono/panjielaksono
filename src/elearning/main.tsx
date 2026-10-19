import React from 'react';
import { createRoot } from 'react-dom/client';
import { ELearningShowcase } from './ELearningShowcase';
import './e-learning-showcase.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ELearningShowcase />
  </React.StrictMode>,
);
