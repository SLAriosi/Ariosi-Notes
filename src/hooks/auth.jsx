import { createContext, useContext, useState, useEffect } from "react";

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

         // Aqui passamos que o usuário será guardado dentro do LocalStorage, dentro da máquina do usuário, então passamos o nome da aplicação, é um padrão que adotamos, e depois passamos o item que queremos puxar, como o localStorage só consegue armazenar objetos de texto / Strings, então temos que alterar o tipo de item que é o usuário, já que ele é um objeto podemos usar a própria função do JSON a .stringify() para transformar esse objeto que é o usuário em uma string.
         // Usamos o JSON.stringify para transformar alguma variável do tipo objeto em um arquivo String feito em formato Json. Nesse caso ela só converte o tipo da variável.
         localStorage.setItem("@ariosinotes:user", JSON.stringify(user))

         // Também setamos para guardar o token na máquina do Usuário, usando a mesma estrutura, e como o token já é uma string, não precisamos usar o JSON.stringify
         localStorage.setItem("@ariosinotes:token", token)

         api.defaults.headers.common['Authorization'] = `Bearer ${token}`
         setData({user, token})
         
      } catch (error) {
         if (error.response) {
            alert(error.response.data.message)
         } else {
            alert("Não foi possível entrar.")
         }
      }
   }

   // Função para deslogar da aplicação!!
   // Unica coisa que precisa ser feito é remover do localStorage o token e o Usuário;
   function signOut(params) {

      // Para remover as informações do localStorage, usamos o .removeItem()
      localStorage.removeItem("@ariosinotes:user")
      localStorage.removeItem("@ariosinotes:token")

      // E depois de removermos esses itens nós apenas setamos os dados como Vazios novamente fazendo:
      setData({})
   }

   async function updateProfile({ user }){
      try {

         await api.put("/users", user)
         localStorage.setItem("@ariosinotes:user", JSON.stringify(user))

         // Para atualizar o setData nós passamos aqui com o setData(user, e o token que receberá o token que já existe no LocalHost)
         setData({ user, token: data.token })
         alert("Perfil atualizado!")
         
      } catch (error) {
         if (error.response) {
            alert(error.response.data.message)
         } else {
            alert("Não foi possível atualizar o perfil.")
         }
      }
   }

   // Como funciona o Use Effect, Ele tem 2 partes a primeira parte é a função que eu quero que ele execute, ele sempre vai executar após o carregamento do componente, e na segunda parte é um vetor que você pode colocar um estado, e caso esse estado mude, o useEffect executa novamente
   useEffect(() => {
      
      // Agora vamos pegar o valor que queremos para quando abrir a página ela abrir. Para obter essas informações usamos o .getItem, e passamos exatamente a mesma tag que usamos para guardar a informação
      const token = localStorage.getItem("@ariosinotes:token")
      const user = localStorage.getItem("@ariosinotes:user")

      // Agora para ter certeza de que temos ambos o usuário e o token salvos na LocalStorage, para que aí sim mudemos a rota de início, usamos a validação abaixo.
      if (token && user) {

         // Essa linha insere o Token dentro do Cabeçalho (headers)
         api.defaults.headers.common['Authorization'] = `Bearer ${token}`

         // Por final setamos os dados que queremos, e como o usuário é um objeto, temos que usar o JSON.parse que transforma de volta o usuário que antes transformamos em um formato String para o tipo JSON.
         setData({
            token,
            user: JSON.parse(user)
         })
      }

   }, [])

   return (
      <AuthContext.Provider value={{ signIn, user: data.user, signOut, updateProfile }}>
         {children}
      </AuthContext.Provider>
   )
}

function useAuth() {
   const context = useContext(AuthContext)

   return context;
}

export { AuthProvider, useAuth }
