import styled from "styled-components";

// Assim vamos exportar o Container como um styled.header, assim podemos pegar as estilizações padrão e passar coisas específicas para o header.
export const Container = styled.header`

// O grid-area serve para manter o header fixo lá emcima da página.
   grid-area: header;

   height: 10.5rem;
   width: 100%;

   border-bottom-width: 0.1rem;
   border-bottom-style: solid;

   // Passando a cor que eu quero que habilite na bora embaixo do elemento puxando o Background_700 dentro do Color que está dentro do theme. portanto precisamos desestruturar dessa forma para que seja possível ler o estilo css.
   border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

   display: flex;
   justify-content: space-between;

   padding: 0 8rem;

   background: red;
`;