import { Container } from "./styles";

// Do que se trata esse {children utilizado dentro do <Container> eu quero adicionar um ocmponente que tem uma base parecida, mas com conteúdos diferentes, como as linhas abaixo das escritar iguais, mas os oque está escrito dentro é diferente.
export function Section({ title, children }){
   return (
      <Container>
         <h2>{title}</h2>
         {children}
      </Container>
   )
}