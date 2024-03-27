import { Routes, Route } from 'react-router-dom'

// O primeiro a se fazer é importar seus componentes, nesse caso vamos utilizar as páginas.
// Essas são as páginas que vamos deixar aqui no app.routes, no caso são chamadas de interfaces.
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

// Agora vamos fazer a exportação de uma funçãode AuthRoutes() que são as de Registro e Login
// Até a parte do return é padrão de qualquer função.
export function AuthRoutes(){
   return(
      // Dentro do return vamos usar o Routes para colocarmos todas as rotas.
      <Routes>

         <Route path="/" element={<SignIn />}/>
         <Route path="/register" element={<SignUp />}/>

      </Routes>
   )
}