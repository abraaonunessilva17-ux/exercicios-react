import './App.css';
import {useState} from "react"; 
import InputNomes from './components/InputNomes'; //Importamos o componente InputNomes, pois ele é filho do App.jsx.
import ListaNomes from './components/ListaNomes'; //Importamos o componente ListaNomes, pois ele é filho do App.jsx.

function App() {
  const [digitado, setDigitado] = useState(""); //Estado que será passado para o componente InputNome.jsx.
  const [lista, setLista] = useState([]); //Estado que será passado para o compoenente ListaNomes.jsx.

  function salvarTextoDigitado () { //Função que salva o que é digitado. Essa função será mandada via props para o componente 'InputNomes.jsx'.
    setLista([...lista, digitado]); //Usamos a função 'setLista' para inserir o que foi digitado no estado lista, para isso fizemos a cópia da lista, e inserimos o texto 'digitado' no final dela.
    setDigitado(""); //Limpa o campo input.
  }

  return (
    <div className="App">
      <h1>State Lifting Up "Estado Levantado"</h1>
      <InputNomes digitado={digitado} setDigitado={setDigitado} funcao={salvarTextoDigitado}/> {/*Passamos para InputNomes via 'prop' o estado 'digitado' e a função 'setDigitado'. */}
      <ListaNomes lista={lista} /> {/*Passamos para ListaNomes via 'prop' o estado 'lista' e a função 'setLista' não passamos pq não vamos usar. */}
    </div>
  );
}

export default App;
//Aqui o App.jsx é o Pai dos outros componentes 'InputNomes.jsx' e 'ListaNomes.jsx', portanto centralizamos todos os estados pricipais aqui. Note que incluímos o estado da 'lista' aqui, e até o do input que chamamos de 'digitado'.

//Como percebemos, passamos desse componente para o componente InputNomes via 'props' o estado {digitado} e a função {setDigitado}, e da mesma forma passamos para ListaNomes via 'props' o estado {lista}.

//Também criamos uma função que 'salva' o que foi digitado no input e manda para o estado 'lista', que é a {salvarTextoDigitado}, essa função também é passada via 'props' para o 'InputNomes.jsx', pois é ela que faz o botão de 'salvar' funcionar.

//Para entender mais como ficou nos outros dois componentes, navegue entre eles..

//E com isso treinamos o conceito de State Lifting Up que diz: State Lifting Up (Elevar o estado) é quando você move o 'state' de um componente 'filho' para um componente 'pai' para que vários componentes possam compartilhar e sincronizar esse mesmo estado.

//Em outras palavras: Em vez de cada componente ter seu próprio estado isolado, você centraliza o estado no 'ancestral comum'.

//Fluxo: input envia nome --> App atualiza --> Lista mostra.