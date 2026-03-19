import {useState, useEffect} from 'react'; //Importamos os hooks para o exercício.

function BuscaDinamica () {
   const [digitado, setDigitado] = useState(""); //Estado para guardar o que é digitado.
   
   function mostrarEscritaNoInput (event) {
        setDigitado(event.target.value); //A função 'setDigitado' que altera o estado 'digitado' recebe event.target.value, ou seja: O valor/value do input/event.target é armazenado em 'digitado'.
   }
   
   useEffect(() => { //useEffect é usado para carregar um código assim que a tela renderizar.
    console.log(digitado); //Usamos console para nos mostrar o estado 'digitado' sendo alterado a cada click de tecla.
   }, [digitado]); //Usamos o caso 2 do useEffect, onde temos [dependência], onde dependência é [digitado] que sigifica: Cada vez que o estado 'digitado' mudar, rode o useEffect.

   return (
    <div>
        <h1>Exercício 3-Busca Dinâmica</h1>
        <h2>Usaremos o caso 2 do useEffect</h2>
        <input placeholder="Digite algo.." type="text" value={digitado} onChange={mostrarEscritaNoInput} />

        <p>Você digitou: {digitado}</p>
    </div>
   )

}

export default BuscaDinamica;