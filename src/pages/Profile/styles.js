import styled from "styled-components";

// Exportando esse container que criamos apartir de um nome que nós escolhemos chamar de Container, e dizendo que esse container vai ser um estilo de div.
export const Container = styled.div`
   width: 100%;

   > header {
      width: 100%;
      height: 14.4rem;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      display: flex;
      align-items: center;
      padding: 0 12.4rem;

      svg {
         color: ${({ theme }) => theme.COLORS.GRAY_100};
         font-size: 2.4rem;
      }
   }
`;

export const Form = styled.form`
   max-width: 34rem;
   margin: 3rem auto 0;
`;