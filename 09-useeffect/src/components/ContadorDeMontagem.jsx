import {useEffect} from 'react'; //Importamos o Hook useEffect para usar no exercício.

function CarregarPagina() { //Função do componente ContadorDeMontagem.jsx, serve para inicializar a tela/componente.
  const mensagem = "Componente Carregado";

  useEffect(() => { //Usamos useEffect para executar um código somente após a tela renderizar.
       console.log("Componente Carregado"); //Esse é o código que estamos executando. OBS: NO console.log() nós vemos essa mensagem assim que a tela reinicia, mas é normal ver 2 vezes.
  }, []); //Note o [], isso é o caso 1, onde o código acima roda 1 vez só após a tela iniciar.

  return (
    <div>
        <p>{mensagem}</p> {/*Criamos essa tag p com o texto da const 'mensagem' só para ter um conteúdo visível na tela.*/}
    </div>
  )
}

export default CarregarPagina;
//Aqui treinamos apenas o caso 1, onde usamos o array [] para indicar que o código inserido no useEffect só será rodado 1 vez após a renderização da tela.