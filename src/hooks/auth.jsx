import { createContext, useContext, useState } from "react";

//Como precisamos passar a informação do signIn lá na linha +-12 para o back-end então nós importamos a nossa API
import { api } from "../services/api"

export const AuthContext = createContext({});

// Nessa função nós recebemos o children que são tudo oque estiver dentro do AuthProvider, nesse caso lá no main.jsx são as rotas.
function AuthProvider({ children }) {
   const [data, setData] = useState({})

   // Criamos uma função assíncrona para autenticação. E passamos o email e o password dentro de {} porque aí pode ser específicado em qualquer ordem, se estivesse sem os {} a pessoa deveria informar esses 2 atributos na mesma ordem que a mostrada.
   async function signIn({ email, password }) {
      try {
         const response = await api.post("/sessions", { email, password })
         const { user, token } = response.data

         api.defaults.headers.authorization = `Bearer ${token}`
         setData({user, token})
         
      } catch (error) {
         if (error.response) {
            alert(error.response.data.message)
         } else {
            alert("Não foi possível entrar.")
         }
      }
   }

   return (
      <AuthContext.Provider value={{ signIn, user: data.user }}>
         {children}
      </AuthContext.Provider>
   )
}

function useAuth() {
   const context = useContext(AuthContext)

   return context;
}

export { AuthProvider, useAuth }
