import React from 'react';

export default props => (
    <p>Produto: Cubomágico</p>
)

//Todo o conteúdo de Item é passado para o 'filho' Card.jsx, isso porque no Pai 'App.jsx' foi importado o Item dentro de Card. E Card o recebe como {prop.children}.