// Importando o Container que está dentro do arquivo de styles aqui no Header (./Header/styles.js)
import { Container, Profile, Logout } from "./styles";

// Importamos isso para possibilitar o deslogamento da conta do usuário clicando no botão de Deslogar.
import { useAuth } from "../../hooks/auth";

// Importando os icones da biblioteca que baixamos de Ícones usando o "npm install react-icons --save"
// Para utilizar você deve passar o nome correto do ícone que voce deseja dentro dessas chaves { }, para saber o nome do ícone que você deseja, utilize o site react-icons.github.io.
// E também para utilizar você tem que passar a biblioteca correta, elas vem com o nome abreviado, mas pra adicionar a biblioteca correta você tem apenas que entrar no site acima e procurar o ícone que você deseja utilizar
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
   const { signOut } = useAuth()

   return (
      <Container>

         <Profile to= "/profile">
            <img
               src="https://github.com/SLAriosi.png"
               alt="Imagem de Perfil do SLAriosi"
            />

            <div>
               <span>Bem-Vindo</span>
               <strong>Lucas Ariosi </strong>
            </div>
         </Profile>

         <Logout onClick={signOut}>
            <RiShutDownLine/>
         </Logout>

      </Container>
   )
}
// Preciso passar o Ícone dentro do componente dessa forma aí, com o nome correto dentro de um fragment.
// Para criar um componente que utilize imagens como para colocar imagem de usuários,