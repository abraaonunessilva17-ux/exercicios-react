import React from 'react';

export default props => {

    function inserirTextoNoInput (event) { 
        props.setDigitado(event.target.value); 
    } //Note que usamos a função 'setDgitado' que foi fornecida pelo App.jsx/Pai por meio do 'props'.

    return (
    <div>
       <input type="text" placeholder="Insira um nome" value={props.digitado} onChange={inserirTextoNoInput} /> {/*Note que recebemos o estado 'digitado' que foi fornecido pelo App.jsx/Pai por meio do 'props'. */}

       <button onClick={props.funcao}>Salvar</button> {/*no button em onClick usamos 'props' para pegar a função { salvarTextoDigitado} que vem de App.jsx.  */}
    </div>
    )
}