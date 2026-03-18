//O que é Prop Drilling? Prop drilling acontece quando você precisa passar dados por vários componentes até chegar no componente que realmente precisa deles.

//O problema é que os componentes do meio não usam o dado, mas são obrigados a repassar.

//OBS: Prop drilling é muito comum é apps grandes, não em projetos pequenos como os que você já fez em React.

//Imagine que você quer entregar uma mensagem para o João. Mas antes ela precisa passar por: Pedro, Maria, Lucas, Marcelo. Mesmo que ninguém deles precise da mensagem.

//Eles só fazem: "toma aqui, passa pro próximo", Isso é prop drilling.

//Estrutura típica:
/*
App
 └── A
      └── B
           └── C
                └── D

O estado está no App, mas quem precisa do dado é D, então você precisa fazer: App → A → B → C → D, mesmo que A, B e C não usem nada.
*/

//Vamos a um exemplo prático:
/*
NO COMPONENTE APP.JSX.

import A from "./A";

export default props => {
  const mensagem = "Olá do App"; MENSAGEM QUE SERÁ PASSADA DO APP PARA TODOS OS COMPONENTES ATÉ CHEGAR NO 'D'.

  return( 
  <A mensagem={mensagem} />;
)
}
---------------------------------
NO COMPONENTE A.JSX.

import B from "./B";

export default props => {
  return( 
  <B mensagem={props.mensagem} />;
)
}
---------------------------------
NO COMPONENTE B.JSX.

import C from "./C";

export default props => {
  return(
  <C mensagem={props.mensagem} />;
)
}
----------------------------------
NO COMPONENTE C.JSX.

import D from "./D";

export default props => {
  return( 
  <D mensagem={props.mensagem} />;
)
}
----------------------------------
NO COMPONENTE D.JSX. (ÚNICO QUE USA).

export default props => {
  return(
   <h1>{props.mensagem}</h1>;
)
}
*/

//Como podemos ver, isso tudo é muito bagunçado e dependendo do projeto fica muito ruim mexer com isso. Por isso React criou ferramentas para evitar prop drilling: Context API, Zustand, Redux.

//Essas ferramentas permitem que qualquer componente pegue o dado direto, sem passar pelos intermediários. Mas não veremos isso agora.

//DICA ESMERALDA: Prop drilling não deve ser feito de propósito! Ele é algo que acontece e que você deve saber lidar! E outra coisa, ele só pode acontecer em 'componentes aninhados' no App.jsx. 

//OBS: Componentes aninhados = componentes que no App.jsx foram colocados um dentro do outro em uma hierarquia. Observe abaixo.

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