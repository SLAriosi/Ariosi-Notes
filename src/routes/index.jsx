import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/auth' // Importando o hook para acessar usuário

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

// Deixamos assim para que possamos exibir tanto as Rotas com o usuario logado (AppRoutes) quanto o usuário deslogado (AuthRoutes)
// Iremos fazer uma validação de if para que caso esteja logado aparecer as rotas de AppRoutes, e a dos AuthRoutes para caso o usuário esteja deslogado.
export function Routes() {

   // Agora acessamos o user dentro do useAuth(), vamos usar o user para fazer uma condição na linha 16 +-
   const { user } = useAuth();

   return (
      <BrowserRouter>
      
         {/* Caso tenha um usuário quro que seja renderizado o AppRoutes, caso não, renderizasse o AuthRoutes. */}
         { user ? <AppRoutes/> : <AuthRoutes/>} 
      </BrowserRouter>
   )
}