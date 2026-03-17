import React from 'react';

export default props => {
    return (
    <div>
        <ul>
            {props.lista.map((item, index) => {
                return <li key={index}>{item}</li>
            })} {/*Aqui dentro da ul do componente ListaNomes.jsx usamos a 'props' para podermos usar o estado 'lista' que vem de App.jsx. E fizemos um 'map' para que cada ítem/usuário seja representado por uma tag li! */}
        </ul>
    </div>
    )
}