// Style files
import './App.css';

// Context
import { ThemeProvider } from './context/ThemeContext';

// Components
import Home from './pages/home';

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="home">
          <Home />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
