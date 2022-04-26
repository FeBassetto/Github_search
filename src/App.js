import { ThemeProvider } from 'styled-components';
import './App.css';
import Routing from './routes';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routing />
      </ThemeProvider>
    </div>
  );
}

export default App;
