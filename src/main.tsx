// External libraries
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Style files
import './index.css';

// Components
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
