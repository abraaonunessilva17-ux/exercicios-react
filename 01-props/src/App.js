import './App.css';
import Usuarios from './components/Usuarios'; //Importamos o componente Usuarios.jsx, pois precisaremos dele para passar os dados via prop.

function App() {
  return (
    <div>
      <Usuarios nome="Abraão" idade="25" profissao="Programador" />
    </div>
  )
}

export default App;
//Esse é o exercício de props, onde o meu objetivo é passar dados de um componente Pai para um filho. E nesse caso tenho o Pai que é App.js. E o filho é o Usuários.jsx que está dentro da pasta componentes.

//Note que aqui criei 3 props, uma (nome= "Abraão"), (idade="25") e outra (profissao="Programador"), essas props serão enviadas para Usuários.jsx.
