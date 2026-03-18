import {useState, useEffect} from 'react'; //Importamos os Hooks para usar na tarefa.

function Contador () {
   const [tempo, setTempo] = useState(0); //Estado que criamos para guardar os números do setInterval.

   useEffect(() => { //usamos useEffect para carregar os códigos abaixo assim que a página recarregar.
    console.log("rodou");
     const id = setInterval(() => { //const id guarda a identificação do timer, pra usar no 'clearInterval(id)'.
         setTempo((prev) => prev + 1); //O que isso faz: pega o valor anterior do estado e soma +1. (prev) é o valor anterior do estado. E isso é atualizado no 'setTempo'.
     }, 1000); //1000 milissegundos equivale a um segundo. Ou seja, vamos criar um timer infinito que soma mais um a cada segundo.

     return () => { //return faz parte do 'useEffect'. Funciona assim: componente vai sair da tela/recarregar tela → React chama o return, o return → executa o clearInterval(id)
     clearInterval(id); //Isso para o contador assim que a página recarrega.
     };
   }, []); //Usamos [] para indicar que o contador só vai ser gerado uma vez e não várias outras como um bug silencioso.

   return (
    <div>
        <h1>Exercício 2-Timer com SetInterval</h1>
        <p>{tempo}</p>
        <p>O timer inicia sempre que a tela recarrega, e reinicia sempre que a tela é recarregada.</p>
    </div>
   )
}

export default Contador;

/*
Nessa aula estudamos os principais pontos:

Executar algo ao montar: useEffect(() => {}, [])roda uma vez.

Criar efeitos contínuos (MUITO importante): Diferente do anterior, aqui você criou algo que continua rodando sozinho (setInterval).

Limpar efeitos (isso é o coração do exercício): Esse é o ponto mais importante --> “tudo que fica rodando precisa ser parado”. 
Você aprendeu a iniciar algo (timer) e parar quando o componente desmonta.
*/

