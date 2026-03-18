import React from 'react'; 
import Header from './Header'; //Importamos o componente Header aqui pois ele será filho do Layout que é filho do App.jsx.

export default props => {
  return (
    <div>
        <Header message={props.message}/> {/*Importamos o Header aqui, e pela prop 'message' nós estamos recebendo o texto "Olá Abraão!" vindo do App.jsx para o Layout.jsx. E ao mesmo tempo o estamos passando para o componente Header.*/}
    </div>
  )
}

