import React from 'react';

export default props => {
    const usuarios = ["Ana", "Carlos", "Maria"]; //usuários guarda um array de usuários.
    return (
    <div>
        <h1>Lista - Map</h1>
       <ul>
       {usuarios.map((usuario, index) => {
        return <li key={index}>{usuario}</li>
       })} {/*Fizemos o 'map' em usuarios, e passamos nele 'usuario' e 'index'.*/} {/*note que fizemos o map depois da tag (ul),e que no return interno não pode haver 'quebras' de linha.*/} {/*Usamos o map para criar uma tag li para cada usuario.*/}
       </ul>

    </div>
    )
}

//Nesse exercício fizemos uma renderização de uma lista de usuários que veio de um array. Note que não usamos nenhum evento ou função para fazer isso. 

//Usamos o map para criar li's para todos os usuários. OBS: Exportamos esse componente para o App.js.