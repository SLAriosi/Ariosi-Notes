// Importar o Container de dentro do styles aqui da página SignIn.
// Form também vai vir dessa mesma pasta styles, por isso importamos assim com vírgula.
import { Container, Form, Background } from './styles'

// Agora importamos o icon que iremos utilizar dentro do Input, importamos de dentro da biblioteca do react-icons, e temos que selecionar a biblioteca que iremos utilizar de icones também que nesse caso é a "fi", para descobrir a biblioteca do ícone que você deseja utilizar, entre no site do react icons.
import { FiMail, FiLogIn, FiLock } from 'react-icons/fi'

// Importando o Input pois iremos utilizar isso dentro do formulário (CLARAMENTE!! dskldsldksld).
import { Input } from '../../components/Input'

// Importando o button para utilizarmos como um componente de Botão para o formulário, para confirmar e entrar na aplicação
import { Button } from '../../components/Button'

// Dentro do estilo principal aqui do index.jsx, colocamos o form, vamos criar o form aí dentro desse componente.
export function SignIn() {
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
            />

            <Input
               placeholder="Senha"
               type="password"
               icon={FiLock}
            />

            <Button title={"Entrar"}/>

            <a href="#">
               Criar conta
            </a>

         </Form>

         <Background/>
      </Container>
   )
}