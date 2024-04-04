// Utilizamos o useState para que possamos criar um estado dentro da função da Home.
// E o useEffect é uma funçao que é executada de forma automática quando nossa interface é renderizada
import { useState, useEffect } from 'react';

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
import { api } from '../../services/api';

export function Home() {
   const [tags, setTags] = useState([]);

   // Vamos criar esse estado para guardarmos a tag selecionada.
   const [tagsSelected, setTagsSelected] = useState([]);


   // Criaremos esse estado para guardarmos o conteúdo do input de pesquisa da home.
   const [search, setSearch] = useState("")

   // Criamos esse estado para guardar as notas
   const [notes, setNotes] = useState([])


   // Função para lidar com a mudança de estado da tag;
   function handleTagSelected(tagName) {

      if(tagName === "all"){
         return setTagsSelected([])
      }

      const alreadySelected = tagsSelected.includes(tagName);
      console.log(alreadySelected)

      if (alreadySelected) {
         const filteredTags = tagsSelected.filter(tag => tag !== tagName);
         setTagsSelected(filteredTags);

      } else {
         setTagsSelected(prevState => [...prevState, tagName])
      }
   }

   useEffect(() => {
      async function fetchTags() {
         const response = await api.get("/tags")
         setTags(response.data)
      }

      fetchTags();
   }, []);

   // A dependencia do useEffect serão as tagsSelected, e o Search, ou seja quando mudar o conteúdo do search ou o tagsSelected, ele vai executar o useEffect.
   // Quando criamos um useEffect sem dependência como no useEffect acima, Ele apenas executa na hora que renderiza a primeira vez do arquivo, ou seja, quando abrimos a página.
   useEffect(() => {

      async function fatchNotes() {
         const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
         setNotes(response.data);
      }

      fatchNotes();

   }, [tagsSelected, search])

   return (
      <Container>

         <Brand>

            <h1>Ariosi Notes</h1>

         </Brand>

         <Header />

         <Menu>

            <li>
               <ButtonText
                  title={"Todos"}
                  onClick={() => handleTagSelected("all")}
                  isActive={tagsSelected.length === 0}
               />
            </li>

            {
               tags && tags.map(tag => (
                  <li key={String(tag.id)}>
                     <ButtonText
                        title={tag.name}
                        onClick={() => handleTagSelected(tag.name)}
                        isActive={tagsSelected.includes(tag.name)}
                     />
                  </li>
               ))

            }

         </Menu>

         <Search>

            <Input
               placeholder="Pesquisar pelo título"
               onChange={() => setSearch(e.target.value)}
               icon={FiSearch}
            />

         </Search>

         <Content>

            <Section title="Minhas notas">
               {
                  notes.map(note => (
                     <Note 
                     key={String(note.id)}
                     data={note}/>
                  ))
               }
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