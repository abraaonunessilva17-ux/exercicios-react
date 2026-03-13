import react from 'react';
import './App.css';
import Card from './components/Card'; //Importamos o componente Card, poi usaremos ele aqui no App.js.
import Item from './components/Item'; //Importamos o componente Item, poi usaremos ele aqui no App.js.

function App() {
  return (
    <div className="App">
      <Card>
        <Item />
      </Card>
    </div>
  );
}

export default App;
//O objetivo desse exercício de 'children' é entender o que ele é e como ele funciona.

//O children é uma forma de 'prop', ou seja, serve para mandar conteúdos de um componente para outro! Mas no caso do children ele não só manda o conteúdo, ele manda tudo o que tem no 'componente' para um outro componente.

//Veja esse exemplo, temos o componente Pai, que é App.js, e aqui nós importamos o componente 'filho' Card.jsx e o 'neto' Item.jsx. E veja o que fizemos: 
/* 
function App() {
  return (
    <div className="App">
      <Card >
        <Item />
      </Card>
    </div>
  );
} Note que inserimos o 'filho' Card aqui, e que dentro dele inserimos o 'neto' Item, fazendo assim, todo o componente Item.jsx, ou seja, tudo o que tiver nele é passado para o 'filho' Card!
*/

//Dentro do componente Card.jsx temos assim:
/*
export default props => (
    <div>
        <h2>Card de estudo</h2>
        {props.children}
    </div>
) Note que criamos o conteúdo próprio do Card, que é a tag <h2>.. Mas abaixo dela inserimos {prop.children} e é justamente aqui que estamos recebendo todo o compoente 'neto' Item. 
*/

//E veja como está o Item.jsx:
/*
export default props => (
    <p>Produto: Cubomágico</p>
) Note que aqui criamos o conteúdo do Item.jsx, é esse mesmo texto que é passado para o 'filho' Card, e quem passa ele para lá é o Pai App.jsx!
*/

//OBS: Children serve para passar também: texto, HTML, componentes, arrays, funções. Mas nesse caso, esses outros tipos deveriam ser passados em Item.. e assim virariam o conteúdo que seria passado para Card.
