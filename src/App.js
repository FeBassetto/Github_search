import { ThemeProvider } from 'styled-components';
import './App.css';
import Routing from './routes';
import { GlobalStyle, theme } from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routing />
        <GlobalStyle/>
      </ThemeProvider>
    </div>
  );
}

export default App;
