import React from 'react';

export default props => (
    <div>
        <p>Olá {props.nome}</p>
        <p>Nome: {props.nome}, idade: {props.idade}, profissão: {props.profissao}</p>
    </div>
)

//Esse é o exercício de props, onde o meu objetivo é passar dados de um componente Pai para um filho. E nesse caso tenho o Pai que é App.js. E o filho é o Usuários.jsx que está dentro da pasta componentes.

//Note que aqui criei uma tag 'p' com a string 'Olá', e depois usei {props.nome}. Esse props.nome está pegando do Pai o texto 'Abraão' que está no App.js, e que foi feito assim <Usuarios nome="Abraão" />, e como isso mostra na tela: Olá Abraão.

//Fora essa prop em App.js, criei outras duas: (idade="25") e outra (profissao="Programador"), foram passadas para Usuários.jsx.

//E com essas 3 props recebidas do Pai, criei mais uma tag 'p' aqui em Usuarios.jsx da seguinte forma: <p> Nome: {props.nome}, idade: {props.idade}, profissão: {props.profissao} </p>. E com isso formei a frase: Nome: Abraão, idade: 25, profissão: Programador.