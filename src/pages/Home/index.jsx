// Importando todos os Itens que iremos atualizar no styles.js.
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

// Importando o Header que já está criado dentro ca página Components
import { Header } from '../../components/Header'
export function Home() {
   return (
      <Container>

         <Brand>

            <h1>Ariosi Notes</h1>

         </Brand>

         <Header/>

         <Menu>



         </Menu>

         <Search>



         </Search>

         <Content>



         </Content>

         <NewNote>



         </NewNote>

      </Container>
   )
}