import {useState, useEffect} from 'react';

function RequisicaoAjax () {
const [usuarios, setUsuarios] = useState([]); //Estado para guardar os usuários que vierem do Ajax.
const [loading, setLoading] = useState(true); //Estado para dizer se a requisição foi feita então 'false', se está sendo feita então 'true'.

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users') //Requisição get para esse endereço.
  .then((res) => res.json())
  .then((data) => {
    setUsuarios(data); //Usamos setUsuarios() para receber os dados (data) da requisição, agora (data) está sendo inserido no estado 'usuários'.
    setLoading(false); //Usamos manualmente setLoading(false) para informar que a requisição Ajax já acabou.
  })
}, []);

if(loading) { //Condição que diz: se 'loading' for 'true', ou seja, se a requisição não encerrou.
   return <p>Carregando...</p> //Então crie uma tag 'p' que diz: Carregando...
} //OBS: Usamos essa condição fora do 'return'.. E temos uma regra pra isso --> Se a codição define a tela iteira então usamos 'if' fora do 'return', se é só parte dela então usamos ternário dentro do return.

return (
    <div>
       <ul>
        {usuarios.map((item) => { //Fizemos um map no estado usuarios, criando uma tag li para cada ítem.
           return <li key={item.id}>{item.name}</li>
        })}
       </ul>
    </div>
)

}

export default RequisicaoAjax;
