import { Routes, Route } from 'react-router-dom'

// O primeiro a se fazer é importar seus componentes, nesse caso vamos utilizar as páginas.
// Essas são as páginas que vamos deixar aqui no app.routes, no caso são chamadas de interfaces.
import { New } from '../pages/New'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Profile } from '../pages/Profile'

// Agora vamos fazer a exportação de uma funçãode AppRoutes()
// Até a parte do return é padrão de qualquer função.
export function AppRoutes(){
   return(
      // Dentro do return vamos usar o Routes para colocarmos todas as rotas.
      <Routes>
          
         {/* Para cada rota nós utilizamos o Route, juntamente com a rota que iremos utilizar pra acessar aquela interface específica. */}
         {/* No caso para utilizarmos de maneira correta, fazemos o uso da seguinte padronização de estrutur dentro do Route usamos: */}
         {/* Qual o endereço da rota nesse caso o / */}
         {/* E logo a frente nós colocamos o elemento que queremos que entre ao colocarmos a rota nesse caso a home  */}
         <Route path="/" element={<Home />}/>
         <Route path="/new" element={<New />}/>
         <Route exact path="/profile" element={<Profile/>}/>

         {/* Nesse caso o details tem uma particularidade, porque ele precisa dos ids dos usuários para saber quais notas e quais detalhes puxar, por isso temos que puxar um parâmetro para que as informações linkem e apareça dependendo do usuário. */}
         {/* Por esse motivo passamos a rota /details com o parâmetro /:id na frente */}
         <Route exact path="/details/:id" element={<Details/>}/>
      </Routes>
   )
}