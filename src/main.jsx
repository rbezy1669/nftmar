import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
    <App />
  </TonConnectUIProvider>
);