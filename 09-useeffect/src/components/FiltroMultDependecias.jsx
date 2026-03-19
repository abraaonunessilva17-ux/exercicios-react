import {useState, useEffect} from 'react'; //Importamos os hooks para o exercício.

function FiltrarProdutos () {
     const [digitado, setDigitado] = useState(""); //Estado para o que é digitado no input.
     const [categoria, setCategoria] = useState(""); //Estado para a categoria selecionada.
     const [lista, setLista] = useState([]); //Estado 'derivado' para guardar a lista filtrada. OBS: É derivada porque ela depende de resultado de (listaOficial + digitado + categoria), não é uma fonte original de dados.

     const listaOficial = [
        { id: 1, nome: "Teclado", categoria: "hardware" },
        { id: 2, nome: "Mouse", categoria: "hardware" },
        { id: 3, nome: "React Curso", categoria: "software" }
      ]; //Aqui temos a lista oficial que será renderizada logo abaixo.

      function mostrarDigitoNoInput (event) {
        setDigitado(event.target.value); //setDigitado que altera o estado 'digitado' recebe 'event.target.value' que quer dizer: o valor/value inserido no input/event.target é usado pra alterar o estado.
      }

      function selecionarCategoria (event) {
        setCategoria(event.target.value); //setCategoria que altera o estado 'categoria' recebe 'event.target.value' que quer dizer: o valor/value das options que podem ser 'hardware' ou 'software', se qualquer uma for escolhida no seletor/event.target esse valor alterrará o estado.
      }

      useEffect(() => { //useEffect é usado para ativar um código de acordo com dependências.
       const filtrada = listaOficial.filter((item) => { //Criamos 'filtrada' para ser uma cópia da lista oficial.
        const matchNome = item.nome.toLowerCase().includes(digitado.toLowerCase()); //Verifica se o nome digitado pertence a algum ítem existente.
        const matchCategoria = categoria === '' || item.categoria === categoria; //categoria === '' quer dizer: Se nenhuma categoria foi escolhida → mostre todas. E item.categoria === categoria quer dizer: Se escolheu → filtra pela categoria.
      
        return matchNome && matchCategoria;
      });
       setLista(filtrada); //setLista que altera o estado 'lista' está recebendo 'filtrada' que é a cópia da lista original porém filtrada. OBS: Os códigos de 'filtrada' acima e esse de 'setLista' é que são os códigos que serão executados assim que as dependências 'digitado' e 'categoria' abaixo forem alteradas.
      }, [digitado, categoria]); //digitado e categoria são as dependências ouvidas, se tiver mudanças nelas o código de 'filtrar a lista' se ativa.

     return (
        <div>
            <h1>Exercício 4-Filtro Multi Dependências</h1>

            <input type="text" placeholder="Digite um produto." value={digitado} onChange={mostrarDigitoNoInput} />

            <select value={categoria} onChange={selecionarCategoria}>
               <option value="">Selecione</option>
               <option value="hardware">Hardware</option>
               <option value="software">Software</option>
            </select>

            <ul>
               {lista.map((item) => {
                return <li key={item.id}>Nome: {item.nome} - Categoria: {item.categoria}</li>
               })}
            </ul>
        </div>
     )
}

export default FiltrarProdutos

//Nesse exercício usamos useEffect com multidependências e criamos estado temporário 'const [lista, setLista]' para guardar a lista filtrada. Mas fizemos isso para fins didáticos, pois na vida real não usamos o useEffect para coisas assim.

//Profissionalmente não precisaríamos de um estado temporário nem de useEffect para esse exercício, pelo princípio de 'se algo puder ser calculado, assim como essa lista filtrada foi, então não crie estados'.

//Veja a única diferênça que teríamos se tivéssemos feito da forma comum:
/*
NO TOPO NÃO TERÍAMOS: const [lista, setLista] = useState([]).

const listaFiltrada = listaOficial.filter((item) => {
    const matchNome = item.nome.toLowerCase().includes(digitado.toLowerCase());
    const matchCategoria = categoria === '' || item.categoria === categoria;

    return matchNome && matchCategoria;
  }); TERÍAMOS ISSO FORA DO USEEFFECT, E NEM O USUARÍAMOS. 

  {listaFiltrada.map((item) => (
          <li key={item.id}>
            Nome: {item.nome} - Categoria: {item.categoria}
          </li>
        ))} E AQUI RENDERIZARÍAMOS A 'listaFiltrada' DIRETO NA RENDER.
*/