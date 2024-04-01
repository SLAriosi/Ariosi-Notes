import { createContext, useContext } from "react";

export const AuthContext = createContext({});

// Nessa função nós recebemos o children que são tudo oque estiver dentro do AuthProvider, nesse caso lá no main.jsx são as rotas.
function AuthProvider({ children }) {
   return (
      <AuthContext.Provider value={{ name: "Ariosi", email: "ariosilucas@gmail.com"}}>
         { children }
      </AuthContext.Provider>
   )
}

function useAuth(){
   const context = useContext(AuthContext)

   return context;
}

export { AuthProvider, useAuth }
