import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css'
import App from './components/App';

// import App from './og-components/App';
// import GlobalStyles from './og-components/GlobalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>

  </StrictMode>
);
