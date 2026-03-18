import React from 'react';
import Usuario from './Usuario'; //Importamos o componente Usuario.jsx aqui, pois ele será filho de Header.jsx. 

export default props => {
    return(
        <div>
            <Usuario message={props.message} /> {/*Importamos o Usuario aqui, e pela prop 'message' nós estamos recebendo o texto "Olá Abraão!" vindo do App.jsx para o Layout.jsx depois para Header.jsx e agora para Usuario.jsx. E ao mesmo tempo o estamos passando para o componente Usuario.*/}
        </div>
    )
}