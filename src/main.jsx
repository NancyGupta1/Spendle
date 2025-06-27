import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TransactionProvider } from './context/TransactionContext';
import { ThemeProvider } from './context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.scss';
import './styles/components.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </ThemeProvider>
);
