//Para iniciar os estilos em formato JavaScript precisa puxar a informação
import styled from "styled-components";

//para puxar esse estilo do Container utilizasse a linha import { Container } from "./style.js"
export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;

   //Essa propriedade define automaticamente dependendo de quantos parâmetros eu passar dentro dela, se eu passar 2, teremos 2 linhas, caso tenhamos 4 parâmetros ele fará 4 linhas
   grid-template-rows: 10.5rem auto;

   // Aqui utilizamos esses parâmetros para definir a ordem que irá aparecer os itens da minha página, caso eu coloque o content antes do header (em cima do outro) quem irá aparecer primeiro é quem está no header.
   grid-template-areas:
   "header" 
   "content";

   > main {
      grid-area: content;
      overflow-y: scroll;
      padding: 6.4rem 0;
   }
`;

export const Links = styled.ul`
   list-style: none;

   > li {
      margin-top: 1.2rem;
   }

   a {
      color: ${({ theme }) => theme.COLORS.WHITE};
   }
`;

export const Content = styled.div`
   max-width: 50rem;
   margin: 0 auto;

   display: flex;
   flex-direction: column;

   // Aqui utiliza-se o ">" para demonstrar que é o button dentro dessa div, e essa button:first-child é para apenas aplicar no primeiro button que aparece dentro dessa div.
   > button:first-child {
      align-self: end;
   }

   > h1 {
      font-size: 3.6rem;
      font-weight: 500;
      padding-top: 6.4rem;
   }

   > p {
      font-size: 1.6rem;
      margin-top: 1.6rem;
      text-align: justify;
   }

`;