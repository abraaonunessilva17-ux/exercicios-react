//Nessa aula vamos ver brevemente sobre State Lifting Up. 

//State Lifting Up (Elevar o estado) é quando você move o 'state' de um componente 'filho' para um componente 'pai' para que vários componentes possam compartilhar e sincronizar esse mesmo estado.

//Em outras palavras: Em vez de cada componente ter seu próprio estado isolado, você centraliza o estado no 'ancestral comum'.

//Quando usar isso?
//Use quando dois ou mais componentes precisam dos mesmos dados. Quando um componente precisa 'alterar algo' e outro precisa 'ler esse valor'. Quando você quer evitar estados duplicados(bug clássico).

//Problema comum (sem lifting)

//Imagina isso:

/*jsx
function Input() {
  const [texto, setTexto] = useState("");

  return (
    <input
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
    />
  );
}

function Display() {
  return <p>Texto aqui</p>;
}
*/

//Problema: O Display não tem acesso ao texto. Cada componente vive no seu mundo.


//Solução com State Lifting Up.
//Agora vamos subir o estado para o componente pai.

/*
Estrutura:

App (state aqui)
 ├── Input (altera o state)
 └── Display (consome o state)
 */

//Exemplo completo.

/* 
jsx
import { useState } from "react";

function App() {
  const [texto, setTexto] = useState("");

  return (
    <div>
      <Input texto={texto} setTexto={setTexto} /> IMPORTAMOS O INPUT NO APP.JSX.

      <Display texto={texto} /> IMPORTAMOS O DISPLAY NO APP.JSX.
    </div>
  );
}

function Input({ texto, setTexto }) { COMPONENTE INPUT.
  return (
    <input
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
    />
  );
}

function Display({ texto }) { COMPONENTE DISPLAY.
  return <p>Você digitou: {texto}</p>;
}

export default App;
*/

//O que aconteceu aqui?
//O estado (texto) ficou no 'App' (pai), O Input recebe a função setTexto → 'ele altera o estado', O Display recebe o texto → 'ele lê o estado'.

//Agora os dois estão sincronizados automaticamente.

//DICA ESMERALDA: Se dois componentes precisam do mesmo estado, ele deve subir para o ancestral comum mais próximo.


//Erro comum de iniciante é criar vários states iguais: jsx
//const [texto, setTexto] = useState("") //Em vários componentes. Isso gera inconsistência e bugs.

//Visão mais profissional. State Lifting é a base de: Comunicação entre componentes, Controle de formulários, Arquitetura limpa no React.