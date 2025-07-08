import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShopContextProvider from './context/ShopContext'; // adjust path if needed
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // Required to apply Tailwind + fonts

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ShopContextProvider>
        <App />
    </ShopContextProvider>
      </BrowserRouter>
  </React.StrictMode>
);
