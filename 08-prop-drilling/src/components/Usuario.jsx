import React from 'react';

export default props => {
     return (
        <div>
           <p>{props.message}</p> {/*Aqui é o último componente, o Usuario.jsx, e ele está recebendo a frase "Olá Abraão!" que saiu do App.jsx --> Layout --> Header --> Usuário.*/}
        </div>
     )
}