import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

// Deixamos assim para que possamos exibir tanto as Rotas com o usuario logado (AppRoutes) quanto o usuário deslogado (AuthRoutes)
// Iremos fazer uma validação de if para que caso esteja logado aparecer as rotas de AppRoutes, e a dos AuthRoutes para caso o usuário esteja deslogado.
export function Routes() {
   return (
      <BrowserRouter>
         <AuthRoutes/>
      </BrowserRouter>
   )
}