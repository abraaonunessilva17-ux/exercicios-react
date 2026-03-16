import {useState} from 'react';
import './App.css';

function App() {
  const [digitado, setDigitado] = useState(""); //Nosso estado, 'digitado' é o estado, setDigitado é a função que altera ele e useState mostra o estado inicial, que aqui começa com uma string vazia.

  function mostrarDigitoNoImput (event) { //Função que nos motrará o que digitamos no teclado no input, ela recebe um evento.
    setDigitado(event.target.value); //Usamos o 'setDigitado' e nele dissemos que o que irá para o estado 'digitado' será o 'valor/value' do 'event.target', ou será o valor digitado no input.
  }

  return (
    <div className="App">
      <h1>Input Controlado</h1> 

      <input placeholder="Digite seu nome" onChange={mostrarDigitoNoImput} value={digitado} type="text" /> {/*No input, para o onChange passamos a função que é ativada com esse evento. Em value passamos {digitado} que é o nosso estado, para que o que é inserido aqui se conecte com o setDigitado.*/}
      
      <p>Olá {digitado}</p> {/*No p passamos o estado {digitado}, pra que nos mostre nele o texto que é digitado. */}

    </div>
  );
}

export default App;

//Nesse exercício de Input controlado vimos como fazer o input funcionar conectando ele ao estado. 

//Usuário digita, onChange dispara, event.target.value pega o texto, setDigitado atualiza o estado, React renderiza novamente, value={digitado} atualiza o input, <p>{digitado}</p> mostra o texto.