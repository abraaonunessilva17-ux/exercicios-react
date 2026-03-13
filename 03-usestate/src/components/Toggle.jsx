import {useState} from 'react'; //Instalamos o Hook.

function Toggle () {
    const [message, setMessage] = useState("Olá Mundo!"); //Nosso estado, onde 'message' é o estado principal, 'setMessage' é a função que altera ele e useState("Olá Mundo!") representa o 'valor inicial' dele, que aqui é uma String com valor "Olá Mundo!".
    const [toggle, setToggle] = useState(false); //Nosso estado, onde 'toggle' é o estado que mostra/esconde, 'setToggle' é a função que altera ele e useState(false) representa o 'valor inicial' dele, que aqui é um valor 'false', que indica que começa desativado.
    
    function mostrarEsconder () {
         /*setMessage("Abraão é Lindo!")*/ //Aqui é para alterar a mensagem "Olá Mundo!" do [message] para "Abraão é Lindo", mas comentamos isso.
         setToggle(!toggle); //Usamos a setToggle() para alternar o valor do estado 'toggle', já que o valor é 'false' e só tem duas opções sendo a outra 'true', alternamos usando a negação lógica !, que inverte o valor.
    }

    return (
        <div>
        <hr/>
        <h1>Toggle</h1>

        <button onClick={mostrarEsconder}>{toggle ? "Fechar mensagem" : "Mostrar mensagem"}</button> {/*No onClick invocamos a função 'mostrarEsconder' que altera o toggle. Que alterna o seu valor de false para true e vice e versa.*/} {/*OBS: Note que usamos uma condição ternária para mostar 'Fechar mensagem' se toggle for 'true', e 'Mostrar mensagem' se toogle for false. */}

        {toggle && <p>{message}</p>} {/*Aqui temos uma condicional que diz: Se toggle for true -> mostra mensagem "Olá Mundo!" do estado [message] e cria uma tag 'p' para mostrar isso. Se for false, fecha a mensagem*/}
        </div>
    )
}

export default Toggle;

//Nesse exercício usamos o useState 2x, criando dois estados, um para guardar nossa frase que seria mostrada ao clicar no botão, e outra para abrir o 'toggle', alternando seu valor de 'false' que seria o valor inicial para 'true' assim que este fosse aberto.

//Na prática, clicando no botão que invoca a função de 'alternar' o estado do toggle de false para true, nós mostramos a mensagem "Olá Mundo!" que estava no estado [message]. E quando clicamos de volta ela some. OBS: Não era necessário um estado para guardar a mensagem, poderíamos ter criado a mesma na hora usando uma tag 'p'.
