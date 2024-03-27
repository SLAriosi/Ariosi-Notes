// Importando todos os Itens que iremos atualizar no styles.js.
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { FiPlus, FiSearch } from 'react-icons/fi';

// Importando o Header que já está criado dentro ca página Components
import { Header } from '../../components/Header'

// Importando as notas, elas existem dentro de uma "Section" e lá é onde passamos os parâmetros corretos para cada nota e oque queremos colocar nelas.
// Passamos o id e o nome que queremos das às tags, como parâmetros e objetos dentro delas (dentro da SECTION).
import { Note } from '../../components/Note'


import { Input } from '../../components/Input'

//Importamos a Seção pois as "Note" estão dentro de uma seção 
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
               
               {/* Conseguimos usar o to para linkarmos esse botão com a rota New porque dentro do styles.js aqui da página Home, nós setamos ele como um styled(Link) explicações sobre o link abaixo. */}
               {/* O link é importado do react-router-dom e utilizado como um padronizador, que facilita a navegação (ele deixa mais fácil na hora de mudar a rota do navegador "a URL com o /nomequevocequiser") */}
         <NewNote to="/New">

            <FiPlus />
            Criar Nota

         </NewNote>

      </Container>
   )
}