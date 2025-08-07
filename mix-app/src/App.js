import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Goodbye from './Goodbye';

function App() {
  return (
    <div className="App">
    <Hello></Hello>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
        <Goodbye></Goodbye>
    </div>
  );
}

export default App;
