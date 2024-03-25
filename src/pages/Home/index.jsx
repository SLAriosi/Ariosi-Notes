// Importando todos os Itens que iremos atualizar no styles.js.
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { FiPlus, FiSearch } from 'react-icons/fi';

// Importando o Header que já está criado dentro ca página Components
import { Header } from '../../components/Header'


import { Note } from '../../components/Note'

import { Input } from '../../components/Input'

import { Section } from '../../components/Section'

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

         <Header />

         <Menu>

            <li><ButtonText title={"Todos"}  /></li>
            <li><ButtonText title={"React"} isActive /></li>
            <li><ButtonText title={"NodeJs"} isActive /></li>

         </Menu>

         <Search>

            <Input placeholder="Pesquisar pelo título" icon={FiSearch} />

         </Search>

         <Content>

            <Section title="Minhas notas">
               <Note data={{
                  title: 'React',
                  tags: [
                     { id: '1', name: 'React' },
                     { id: '2', name: 'Node' }
                  ]
               }}
               />
            </Section>

         </Content>

         <NewNote>

            <FiPlus />
            Criar Nota

         </NewNote>

      </Container>
   )
}