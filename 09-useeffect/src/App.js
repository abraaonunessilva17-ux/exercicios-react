import './App.css';
import ContadorDeMontagem from './components/ContadorDeMontagem'; //Importamos o componente CoontadoDeMontagem.jsx, pois ele será inserido logo abaixo.
import Timer from './components/Timer'; //Importamos o componente Timer.jsx, pois ele será inserido logo abaixo.

function App() {
  return (
    <div className="App">
      <h1>useEffect exercícios</h1>
      <ContadorDeMontagem /> 
      <Timer />
    </div>
  );
}

export default App;

//Aqui é o App.jsx que recebe os outros componentes em que cada um será um treino único de useEffect. Para entender melhor, abra os arquivos de cada componente.