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
            />

            <Input
               placeholder="E-mail"
               type="text"
               icon={FiMail}
            />

            <Input
               placeholder="Senha"
               type="password"
               icon={FiLock}
            />

            <Button title={"Cadastrar"} />

            <Link to="/">
               Voltar para o login
            </Link>

         </Form>


      </Container>
   )
}