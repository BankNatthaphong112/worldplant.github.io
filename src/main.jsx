/**
 * Application Entry Point
 *
 * Initializes the React app with:
 * - StrictMode for development warnings
 * - BrowserRouter for client-side routing
 * - App as the root component
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
