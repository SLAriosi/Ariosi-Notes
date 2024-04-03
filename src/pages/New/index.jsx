// Começamos importando o useState para que ele possa armazenar os estados da nossa aplicação.
import { useState } from 'react';
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Textarea } from '../../components/Textarea';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';
import { Container, Form } from './styles'

export function New() {

   // Esse estado usamos para guardarmos todos os Links.
   const [links, setLinks] = useState([]);

   // Criamos esse novo estado para adicionar o link que será adicionado no momento.
   const [newLink, setNewLink] = useState("");

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
   function handleRemoveLink(deleted) {

      // Aqui pegamos o setlinks para acessarmos o prevState e dentro dele nós temos todo o conteúdo desse estado antes dele ser atualizado.
      // Adicionamos o prevState e utilizamos o filter que irá retornar uma lista baseada no que eu colocar nele.
      // Como nós queremos que ele retorne todos os links, menos o que a gente deletar, então colocamos no filter para puxar o link onde o link é diferente do deleted (link => link !== deleted)
      // Adicionando essa validação, só será inserido dentro do setLinks os links que não são iguais ao deleted, consequentemente deletando o link que queremos deletar.
      setLinks(prevState => prevState.filter(link => link !== deleted))
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

               <Input placeholder="Título" />

               <Textarea placeholder="Observações" />

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
                     <NoteItem value="react" />
                     <NoteItem isNew placeholder="Nota tag" />
                  </div>
               </Section>

               <Button title={"Salvar"} />
            </Form>
         </main>
      </Container>
   );
}