// Criando uma estrutura pra estado das coisas.
import { useState } from "react";

import { api } from "../../services/api"

// Importar o Container de dentro do styles aqui da página SignIn.
// Form também vai vir dessa mesma pasta styles, por isso importamos assim com vírgula.
import { Container, Form, Background } from './styles'

// Agora importamos o icon que iremos utilizar dentro do Input, importamos de dentro da biblioteca do react-icons, e temos que selecionar a biblioteca que iremos utilizar de icones também que nesse caso é a "fi", para descobrir a biblioteca do ícone que você deseja utilizar, entre no site do react icons.
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

// Importando o link do react-router-dom que é um Link padronizado para facilitar a navegação de telas. usando Link to= /rota
import { Link } from 'react-router-dom'

// Importando o Input pois iremos utilizar isso dentro do formulário (CLARAMENTE!! dskldsldksld).
import { Input } from '../../components/Input'

// Importando o button para utilizarmos como um componente de Botão para o formulário, para confirmar e entrar na aplicação
import { Button } from '../../components/Button'

// Dentro do estilo principal aqui do index.jsx, colocamos o form, vamos criar o form aí dentro desse componente.
export function SignUp() {

   // Dentro dos parênteses no State nós podemos criar um estado padrão para quando iniciar. nesse caso está useState("")
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   // Criamos essa função para lidar com o cadastro de usuário, com essa função veremos se está recebendo esses estados.
   function handleSignUp() {
      // Primeiro queremos ter certeza que o usuário preencheu nome email e senha pra aí sim continuar com o cadastro
      if (!name || !email || !password) {
        return alert("Preencha todos os campos")
      }

      api.post("/users", {name, email, password})
      .then(() => {
         alert("Usuário cadastrado com Sucesso!!")
      })
      .catch(error => {
         if (error.response){
            alert(error.response.data.message);
         }else {
            alert("Não foi possível Realizar o cadastro")
         }
      })
   }

   return (
      <Container>
         <Background />

         <Form>
            <h1>Ariosi Notes</h1>

            <p>Aplicação para salvar e gerenciar seus links úteis</p>

            <h2>Crie sua conta</h2>

            <Input
               placeholder="Nome"
               type="text"
               icon={FiUser}
               onChange={e => setName(e.target.value)} //Toda vez que muda o estado desse input essa função onChange dispara, esse e. é a abreviação de event.
               />

            <Input
               placeholder="E-mail"
               type="text"
               icon={FiMail}
               onChange={e => setEmail(e.target.value)} //Toda vez que muda o estado desse input essa função onChange dispara, esse e. é a abreviação de event.
               />

            <Input
               placeholder="Senha"
               type="password"
               icon={FiLock}
               onChange={e => setPassword(e.target.value)} //Toda vez que muda o estado desse input essa função onChange dispara, esse e. é a abreviação de event.
            />

            <Button title="Cadastrar" onClick={handleSignUp} />

            <Link to="/">
               Voltar para o login
            </Link>

         </Form>


      </Container>
   )
}