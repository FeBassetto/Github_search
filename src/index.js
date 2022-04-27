import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeModeProvider from './common/Context/ContextThemeMode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeModeProvider>
      <App />
    </ThemeModeProvider>
  </React.StrictMode>
);
