import {useState} from 'react';


function AdicionarUsuario () {
    const [usuarios, setUsuarios] = useState([]); //Estado, usuários é o estado. O setUsuarios é a função que altera o estado, e useState([]) mostra o estado inicial que no nosso exemplo é um array vazio.
    const [digitado, setDigitado] = useState(""); //Estado, digitado é o estado. O setDigitado é a função que altera o estado, e useState("") mostra o estado inicial que no nosso exemplo é uma string vazia, que representa que ainda não mandamos nenhum usuário.

    function mostrarDigitoNoInput (event) { 
         setDigitado(event.target.value); //setDigitado recebe o 'valor/value' do elemento que o dispara 'event.target' que é o input. Ou seja o que é digitado vai para o estado 'digitado'.
    }

    function mandarDigitoParaEstadoUsuarios () { //Função do botão que salva o usuário.
        setUsuarios([...usuarios, digitado]) //setUsuários que é a função que altera o estado 'usuarios' está recebendo os 'textos' que estavam no estado 'digitado'.
        //Sobre ([...usuarios, digitado]) significa: crie um NOVO array, copie todos os usuários que já existem, adicione o novo usuário no final.
        setDigitado("") /*Limpa o campo de input.*/
    }
    
    return (
        <div>
            <input placeholder="Insira um usuário" value={digitado} type="text" onChange={mostrarDigitoNoInput} /> {/*No input 'value' é o que digitamos, que é o estado 'digitado'.*/} {/*No onChange passamos a função {mostrarDigitoNoInput}*/}

            <button onClick={mandarDigitoParaEstadoUsuarios}>Enviar</button> {/*No button em onClick passamos a função {mandarDigitoParaEstadoUsuario}*/}
            
            <ul>
              {usuarios.map((usuario, index) => {
                return <li key={index}>{usuario}
                </li>
             {/*Na tag ul passamos o 'map' para criar uma tag li para cada usuário, puxamos o 'key' pelo index, e puxamos o estado {usuario} na tag li para mostrar o nome do usuário na lista. */}
              })}
           </ul>
        </div>
    )
}

export default AdicionarUsuario;
