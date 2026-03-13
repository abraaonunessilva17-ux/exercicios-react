import React from 'react'; 

export default props => (
    <div>
        <h2>Card de estudo</h2>
        {props.children}
    </div>
)

//Note que o filho 'Card.jsx' tem seu conteúdo <h2>, mas que recebe o conteúdo do neto 'Item.jsx' via {props.children}. Mas isso só funcina porque no 'Pai' App.jsx nós organizamos o componente 'Item' dentro do 'Card'.