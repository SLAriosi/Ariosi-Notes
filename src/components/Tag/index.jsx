import { Container } from "./styles";

export function Tag({ title, ...rest }){
   return (
      // Se não tivesse esse ...rest não seria possível puxar os IDs das Tags, que só são necessários durante a criação das Notes. 
     <Container {...rest}>
         {title}
      </Container>
   );
}