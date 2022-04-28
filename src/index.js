import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeModeProvider from './common/Context/ContextThemeMode';
import SearchUserProvider from './common/Context/SearchUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeModeProvider>
      <SearchUserProvider>
        <App />
      </SearchUserProvider>
    </ThemeModeProvider>
  </React.StrictMode>
);
