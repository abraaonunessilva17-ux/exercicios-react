import {useState} from 'react';
import './App.css';

function App() {
  const [logado, setLogado] = useState(false); //Estado, logado é o estado. setLogado é a função que altera o estado, e useState(false) é o valor inicial do estado, que está como false porque assumimos que o usuário começe como não logado.

  function alternarLogado () { //Função que alterna entre dois valores booleanos 'true' ou 'false'.
    setLogado(!logado); //setLogado que altera o estado 'logado' aqui está sendo usado para 'alternar' entre 'false' e 'true'.
  }

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <h2>Login Fake</h2>

      <button onClick={alternarLogado}>{logado ? "Sair" : "Entrar"}</button> {/*No button o onClick invoca a função que alterna o 'estado' de 'false' para 'true' e vice e versa.*/} {/*Usamos uma condicional ternária no botão, que diz: Se não estiver logado, botão mostra 'Entrar', se estiver logado, botão mostra 'sair'.*/}

      {logado && <p>Bem Vindo!</p>} {/*Outra condição que diz, se estiver logado mostre o texto "Bem Vindo!"*/}
      
    </div>
  );
}

export default App;

//Nese exercício treinamos uma renderização condicional de um botão e de uma tag 'p'.

//O fluxo é assim: click no botão --> dispara evento --> ativa função que troca estado --> renderiza a tela conforme o estado. OBS: Se estado é 'false' botão mostra 'entrar', ao clicar nele, no fim ele mostrará 'sair', e assim por diante.
