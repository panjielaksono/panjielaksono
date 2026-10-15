import React from 'react';
import { createRoot } from 'react-dom/client';
import { WarehouseDemo } from './WarehouseDemo';
import './warehouse-demo.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WarehouseDemo />
  </React.StrictMode>,
);
