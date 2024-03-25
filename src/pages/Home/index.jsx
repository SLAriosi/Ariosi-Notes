// Importando todos os Itens que iremos atualizar no styles.js.
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { FiPlus } from 'react-icons/fi';

// Importando o Header que já está criado dentro ca página Components
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
// import { Header } from '../../components/Header'
// import { Header } from '../../components/Header'
// import { Header } from '../../components/Header'
export function Home() {
   return (
      <Container>

         <Brand>

            <h1>Ariosi Notes</h1>

         </Brand>

         <Header/>

         <Menu>

            <li><ButtonText title={"Todos"} isActive /></li>
            <li><ButtonText title={"React"} isActive /></li>
            <li><ButtonText title={"NodeJs"} /></li>

         </Menu>

         <Search>



         </Search>

         <Content>



         </Content>

         <NewNote>

            <FiPlus />
            Criar Nota

         </NewNote>

      </Container>
   )
}