import styled from "styled-components";

// Criar um container, e dizer que o container é um botão. Container por preferências, como se fosse um padrãozinho, se fiz 1 container, todos os componentes serão
export const Container = styled.button`
   width: 100%;
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

   border: none;
   border-radius: 1rem;

   padding: 2.2rem;
   margin-bottom: 1.6rem;

   > h1 {
      flex: 1;
      text-align: left;
      font-weight: 700;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
   }

   > footer {
      width: 100%;
      display: flex;
      margin-top: 2.4rem;
   }
`;