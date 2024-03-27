import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   display: grid;
   grid-template-columns: 250px auto;
   grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
   grid-template-areas: 
      // Serve para definir as posições que vão ficar esses atributos;
      "brand header"
      "menu search"
      "menu content"
      "newnote content";

   // essa parte estranha do theme pra frente, é puxado no main.jsx  lá naquele arquivo, ele importa o style tema, que permite a gente utilizar o thema global e suas propriedades.
   background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
   grid-area: brand;

   display: flex;
   justify-content: center;
   align-items: center;

   border-bottom-width: 1px;
   border-bottom-style: solid;
   border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
   
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
   
   > h1 {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.ORANGE};
   }
   
   `;

export const Menu = styled.ul`
   grid-area: menu;
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

   padding-top: 6.4rem;
   text-align: center;

   >li {
      margin-bottom: 2.4rem;
   }   
`;

export const Search = styled.div`
   grid-area: search;
   padding: 6.4rem 6.4rem 0;
`;

export const Content = styled.div`
   grid-area: content;
   padding: 0 6.4rem;
   overflow-y: auto;
`;

export const NewNote = styled(Link)`
   grid-area: newnote;

   background-color: ${({ theme }) => theme.COLORS.ORANGE};
   
   color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

   display: flex;
   align-items: center;
   justify-content: center;

   font-size: 1.5rem;
   font-weight: 500;

svg{
   margin-right: 0.3rem;
}

`;

