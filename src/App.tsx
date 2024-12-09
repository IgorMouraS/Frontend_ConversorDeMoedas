import './App.css';

import { ProvedorTema } from './context/TemaContext';

import Home from './pages/home';

function App() {
  return (
    <>
      <ProvedorTema>
        <div className="home">
          <Home />
        </div>
      </ProvedorTema>
    </>
  );
}

export default App;
