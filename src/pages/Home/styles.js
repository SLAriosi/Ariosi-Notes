import styled from "styled-components";

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
   background-color: red;
`;

export const Menu = styled.ul`
   grid-area: menu;
   background-color: green;
`;

export const Search = styled.div`
   grid-area: search;
   background-color: blue;
`;

export const Content = styled.div`
   grid-area: content;
   background-color: orange;
`;

export const NewNote = styled.button`
   grid-area: newnote;
   background-color: yellow;
`;
