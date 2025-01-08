// Style files
import './App.css';

// Context
import { ThemeProvider } from './context/Theme/Theme.context';

// Components
import Home from './pages/home/home.page';

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
