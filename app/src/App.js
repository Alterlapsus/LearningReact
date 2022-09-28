import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './Components/PrimerComponente';
import { SegundoComponentes } from './Components/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
     <p>Esto es un repaso en react</p>
      <PrimerComponente />
      <br />
      <SegundoComponentes />
      <br />
      </header>

    </div>
  );
}

export default App;
