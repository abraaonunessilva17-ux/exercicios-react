//Nesse exercício estaremos treinando a manipulação de estado com 'useState' que é um Hook.
import {useState} from "react"; //Instalamos o Hook.

function Contador () {
    const [numero, setNumero] = useState(0); //Nosso estado, onde 'numero' é o estado principal, 'setNumero' é a função que altera ele e useState(0) representa o 'valor inicial' dele, que aqui é Zero.

    return (
        <div>
            <h1>Contador: {numero}</h1> {/*Aqui chamamos o estado 'numero' para ficar na h1, para que a tela mostre o 'estado'.*/}
            <button onClick={() => setNumero(numero + 1)}>Somar +</button> {/*no 'onClick' chamamos a 'setNumero()' para alterar o valor do estado, fazendo uma soma. */}

            <button onClick={() => setNumero(numero - 1)}>Subtrair -</button> {/*no 'onClick' chamamos a 'setNumero()' para alterar o valor do estado, fazendo uma subtração. */} 
        </div>
    )
}

export default Contador;
//Como vimos, usamos o estado com useState para fazer alterações no estado e com isso alterar a nossa página. 

//Com isso vimos: useState, atualização de estado, eventos (onClick), re-renderização.

//OBS: Poderíamos ter feio as funções de somar e subtrair antes do return também, observe abaixo.

/*
function Contador() {

  const [numero, setNumero] = useState(0); ESTADO DECLADO AQUI.

  function somar() {
    setContador(numero + 1);
  } FIZEMOS AQUI A FUNÇÃO SOMAR.

  function subtrair() {
    setContador(numero - 1);
  } FIZEMOS AQUI A FUNÇÃO SUBTRAIR.

  return (
    <div>
      <h1>{numero}</h1> PASSAMOS O ESTADO PARA A H1.

      <button onClick={somar}>+</button> INVOCAMOS A FUNÇÃO SOMAR DIRETO NO ONCLICK.
      
      <button onClick={subtrair}>-</button>
      INVOCAMOS A FUNÇÃO SUBTRAIR DIRETO NO ONCLICK.
    </div>
  );
}
*/