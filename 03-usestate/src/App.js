import './App.css';
import Contador from './components/Contador'; //Importamos o componente Contador.jsx.
import Toggle from './components/Toggle'; //Importamos o componente Toggle.jsx.

function App() {
  return (
    <div className="App">
      <Contador />
      <Toggle />
    </div>
  );
}

export default App;
//Aqui no App.jsx que é o componente principal do Exercício eu apenas importei o Contador.jsx que é onde acontece o exercício.