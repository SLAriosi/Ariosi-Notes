// Importando o Container que está dentro do arquivo de styles aqui no Header (./Header/styles.js)
import { Container, Profile } from "./styles";

export function Header() {
   return (
      <Container>

         <Profile>
            <img
               src="https://github.com/SLAriosi.png"
               alt="Imagem de Perfil do SLAriosi"
            />

            <div>
               <span>Bem-Vindo</span>
               <strong>Lucas Ariosi </strong>
            </div>
         </Profile>

      </Container>
   )
}

// Para criar um componente que utilize imagens como para colocar imagem de usuários,