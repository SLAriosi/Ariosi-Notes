// Importando o Container de dentro da pasta styles
import { Container } from "./styles";

//O código selecionado é um componente funcional React que exporta um componente Button.
export function Button() {

   // Tem que ter esse return para retornar de maneira automática depois de ser chamada essa função Button
   return(
   <Container type="button">
      Botão Normal
   </Container>
   )
}