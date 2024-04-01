// Para criar estados para armazenar essas informações, o email e a senha.
import { useState } from 'react'

// Importar o Container de dentro do styles aqui da página SignIn.
// Form também vai vir dessa mesma pasta styles, por isso importamos assim com vírgula.
import { Container, Form, Background } from './styles'

// Estamos importando esse Link que é um link padrão como os já utilizados, mas ele tem um padrão legal para aplicar navegação de ir para as rotas e tals
import { Link } from 'react-router-dom'

// Agora importamos o icon que iremos utilizar dentro do Input, importamos de dentro da biblioteca do react-icons, e temos que selecionar a biblioteca que iremos utilizar de icones também que nesse caso é a "fi", para descobrir a biblioteca do ícone que você deseja utilizar, entre no site do react icons.
import { FiMail, FiLock } from 'react-icons/fi'

import { useAuth } from "../../hooks/auth"

// Importando o Input pois iremos utilizar isso dentro do formulário (CLARAMENTE!! dskldsldksld).
import { Input } from '../../components/Input'

// Importando o button para utilizarmos como um componente de Botão para o formulário, para confirmar e entrar na aplicação
import { Button } from '../../components/Button'

// Dentro do estilo principal aqui do index.jsx, colocamos o form, vamos criar o form aí dentro desse componente.
export function SignIn() {

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const { signIn } = useAuth();

   function handleSignIn(){
      signIn({ email, password});
   }

   return (
      <Container>
         <Form>
            <h1>Ariosi Notes</h1>
            
            <p>Aplicação para salvar e gerenciar seus links úteis</p>

            <h2>Faça seu login</h2>

            <Input
               placeholder="E-mail"
               type="text"
               icon={FiMail}
               onChange={e => setEmail(e.target.value)}
               />

            <Input
               placeholder="Senha"
               type="password"
               icon={FiLock}
               onChange={e => setPassword(e.target.value)}
            />

            <Button title={"Entrar"} onClick={handleSignIn}/>

            {/* Agora nós utilizamos o Link, antes era o âncora (a) agora vamos colocar Link que facilida na navegação usando o padrão de Link to = /suaRotaAqui  */}
            <Link to="/register">
               Criar conta
            </Link>

         </Form>

         <Background/>
      </Container>
   )
}