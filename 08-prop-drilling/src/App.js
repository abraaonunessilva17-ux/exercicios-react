import './App.css';
import Layout from './components/Layout'; //Importamos o componente Layout.jsx, pois ele será filho do App.jsx.

function App() {
  const message= "Olá Abraão!"; //Mensagem que será passada do App.jsx que é o componete Pai de todos os outros. E que só será usado pelo último 'Usuário.jsx'.

  return (
    <div className="App">
      <h1>Prop Drilling</h1>
      <Layout message={message} /> {/*Importamos o componente Layout aqui, e pela prop 'message' passamos a const message com o texto "Olá Abraão!" para esse componente Layout. */}
    </div>
  );
}

export default App;

//Nesse exercício treinamos o Prop Drilling, que nada mais é do que passar um dado do Pai/App.jsx para o último componente em 'cadeia', fizemos isso passado de App --> Layout --> Header --> Usuario.

//E como sabemos, todos os componentes entre o Pai e o último que recebe esse dado, eles não usam o mesmo, apenas o transportam.

//OBS: Nesse exercício se você acompanhar todos os componentes vai notar que cada um importa o seu sucessor.. Mas isso foi feito assim apenas para esse exercício, pois na vida real eles sempre vão aparecer em sistemas aninhados conforme abaixo:

/*
<App>
  <Layout>
    <Header>
      <Avatar />
    </Header>
  </Layout>
</App>

Acima temos um exemplo de componentes aninhados, nem todos os componente aninhados vão ter prop drilling, mas ele só vai acontecer em um sistema assim. 

E para sabermos se usaremos prop drilling ou não vai depender se o componente 'Avatar' que é o último vai precisar de algum 'dado' que estava no App.jsx que é o Pai.
*/
