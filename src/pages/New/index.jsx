import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'

import { Textarea } from '../../components/Textarea';

import { Input } from '../../components/Input';

import { Section } from '../../components/Section';

import { Button } from '../../components/Button';

import { NoteItem } from '../../components/NoteItem';

import { Container, Form } from './styles'

export function New() {
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
                  <NoteItem value="https://github.com/SLAriosi/EhNoisQueCoda" />
                  <NoteItem isNew placeholder="Novo link" />
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