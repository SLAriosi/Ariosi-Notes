import { Container } from './styles'
import { Tag } from '../Tag'

// A parte do data serve para mais pra frente criarmos as tags / buscarmos as tags direto no / do banco de dados da API.
export function Note({ data, ...rest }) {
   return (
      // Dentro do Container que deixaremos o html da Note, nós colocamos o ...rest para podermos adicionar quais atributos quisermos dentro desse componente.
      // data.title = título da nota que iremos adicionar, no caso é obrigatório ter esse título.
      // data.tags && = servirá para renderizar as tags caso elas existam.
      // dentro do data.tags utilizamos o .map para percorrermos cada tag, para assim conseguirmos colocar o id da tag correta em questão e do nome da tag também.
      <Container {...rest}>
         <h1>{data.title}</h1>

         {
            data.tags &&
            <footer>
               {
                  data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
            
               }
            </footer>
         }
      </Container>
   );
}