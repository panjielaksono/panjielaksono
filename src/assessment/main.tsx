import React from 'react';
import { createRoot } from 'react-dom/client';
import { AssessmentShowcase } from './AssessmentShowcase';
import './assessment-showcase.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AssessmentShowcase />
  </React.StrictMode>,
);
