import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Routing from './routes';
import { darkMode, GlobalStyle, lightMode } from './theme';
import { ThemeContext, ThemeModeProvider } from './common/Context/ContextThemeMode';

function App() {

  const ThemeMode = useContext(ThemeContext)

  return (
    <div className="App">
      <ThemeProvider theme={ThemeMode.lightMode? lightMode: darkMode}>
        <Routing />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
