// Começamos importando o useState para que ele possa armazenar os estados da nossa aplicação.
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header'
import { Textarea } from '../../components/Textarea';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';
import { Container, Form } from './styles';

import { api } from '../../services/api';

export function New() {

   // Esse estado usamos para guardarmos todos os Links.
   const [links, setLinks] = useState([]);

   // Criamos esse novo estado para adicionar o link que será adicionado no momento.
   const [newLink, setNewLink] = useState("");

   // Mesma coisa do de cima só pras tags;
   const [tags, setTags] = useState([]);
   const [newTag, setNewTag] = useState("");

   // Mesma coisa do de cima mas para a Descrição e para o titulo
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");

   const navigate = useNavigate();

   // Criamos a função para acessarmos a função para atualizarmos o estado do componente
   // Depois de criada a função nós adicionamos ela lá aonde clicamos para adicionarmos um novo link.
   function handleAddLink() {

      // Aqui no setLinks vamos acessar qual o conteúdo anterior que estava sendo armazenado dentro do estado. Vamos usar prevState que para mim faz mais sentido, pode ser qualquer nome
      // Usamos a arrow function => para pegarmos esse estado antigo, e criamos um novo vetor a partir dele, então usamos o spread operator para despejar tudo que tinha nesse estado antes. ("..."prevState)
      // E depois da vírgula colocamos o novo Link que queremos adicionar, podemos escolher o nome.
      // Porque fazemos isso, para que quando formos adicionar o novo Link nós não perdermos o restante dos links, por esse motivo "derramamos" todos os outros links usando os ... tres pontinhos, e aí sim adicionamos o link novo.
      setLinks(prevState => [...prevState, newLink])

      // E por fim usamos essa linha para limparmos o setNewLink com o valor ("") para resetar novamente o estado do novo link
      setNewLink("")
   }

   // Lembrando, funções que começam com handle é uma função que acontece depois de o úsuário realizar alguma ação, nesse caso o usuário clicará no botão de deletar o link, e ele será deletado.
   // Adicionamos essa função para deletarmos algum link Útil que o usuário criou e agora quer deletá-lo
   // O parâmetro deleted recebe o link que queremos deletar da lista de links úteis.
   // E por final adicionamos essa função no onClick do NoteItem.
   function handleRemoveLink(linkDeleted) {

      // Aqui pegamos o setlinks para acessarmos o prevState e dentro dele nós temos todo o conteúdo desse estado antes dele ser atualizado.
      // Adicionamos o prevState e utilizamos o filter que irá retornar uma lista baseada no que eu colocar nele.
      // Como nós queremos que ele retorne todos os links, menos o que a gente deletar, então colocamos no filter para puxar o link onde o link é diferente do linkDeleted (link => link !== linkDeleted)
      // Adicionando essa validação, só será inserido dentro do setLinks os links que não são iguais ao linkDeleted, consequentemente deletando o link que queremos deletar.
      setLinks(prevState => prevState.filter(link => link !== linkDeleted))
   }

   // Essa função de adicionar e remover Tags aqui embaixo é muuuito parecida com a de adicionar e remover Links, seguem a mesma lógica então não vou documentar essa parte.

   function handleAddTag() {
      setTags(prevState => [...prevState, newTag]);
      setNewTag("")
   }

   function handleRemoveTag(tagDeleted) {
      setTags(prevState => prevState.filter(tag => tag !== tagDeleted));
   }

   async function handleNewNote() {

      if (!title) {
         return alert("Você NÃO adicionou um título para a sua nova Nota, adicione um Título para prosseguir");
      }

      // Aqui criamos uma validação para caso haja algo dentro do newTag que é o placeholder, mostrar um alerta para a pessoa
      if (newTag) {
         return alert("Você deixou uma tag no campo para adicionar, mas não clicou no '+' para adicionar. Clique para adicionar, ou deixe o campo em branco");
      }

      // Mesma coisa da validação de cima mas para o NewLink.
      if (newLink) {
         return alert("Você deixou um Link no campo para adicionar, mas não clicou no '+' para adicionar. Clique para adicionar, ou deixe o campo em branco");
      }

      // Aqui iremos enviar em método Post para /notes, e dentro mandamos o objeto que queremos enviar, no caso o title a description as tags e os links.
      await api.post("/notes", {
         title,
         description,
         tags,
         links
      });

      // E dando tudo certo nós podemos colocar um Alert para mostrar que a nota foi criada com sucesso!!
      alert("Nota criada com Sucesso!!")
      navigate("/")

   }

   return (
      <Container>
         <Header />

         <main>
            <Form>
               <header>
                  <h1>Criar nota</h1>
                  <Link to="/">Voltar</Link>
               </header>

               <Input
                  placeholder="Título"
                  onChange={e => setTitle(e.target.value)}
               />

               <Textarea
                  placeholder="Observações"
                  onChange={e => setDescription(e.target.value)}
               />

               <Section title="Links úteis">
                  {links.map((link, index) => (
                     <NoteItem
                        key={String(index)}
                        value={link}
                        onClick={() => handleRemoveLink(link)}
                     />
                  ))}
                  <NoteItem
                     isNew
                     placeholder="Novo link"
                     value={newLink}
                     onChange={e => setNewLink(e.target.value)}
                     onClick={handleAddLink}
                  />
               </Section>

               <Section title="Marcadores">

                  {/* Usamos esse className na div porque ela é uma propriedade React, então o react vai entender quando puxarmos .tags lá no styles.js */}
                  <div className="tags">
                     {
                        tags.map((tag, index) => (
                           <NoteItem
                              key={String(index)}
                              value={tag}
                              onClick={() => handleRemoveTag(tag)}
                           />
                        ))
                     }

                     <NoteItem
                        isNew
                        placeholder="Nota tag"
                        onChange={e => setNewTag(e.target.value)}
                        value={newTag}
                        onClick={handleAddTag}
                     />
                  </div>
               </Section>

               <Button
                  title={"Salvar"}
                  onClick={handleNewNote}
               />
            </Form>
         </main>
      </Container>
   );
}