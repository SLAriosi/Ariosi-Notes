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

// Dando Espaçamento no meio das 4 divs do Perfil. Usando essa div:nth-child(esse número você decide qual a child que você quer que tenha o espaçamento). Vira meio que uma função.
   > div:nth-child(4){
      margin-top: 2.4rem;
   }
`;

export const Avatar = styled.div`
   position: relative;
   margin: -12.4rem auto 3.2rem;

   width: 18.6rem;
   height: 18.6rem;

   > img {
      border-radius: 50%;
      width: 18.6rem;
      height: 18.6rem;
   }

   > label {
      width: 4.8rem;
      height: 4.8rem;

      background-color: ${({ theme }) => theme.COLORS.ORANGE};
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      bottom: 0.7rem;
      right: 0.7rem;

      cursor: pointer;

      input {
         display: none;
      }

      svg {
         width: 2rem;
         height: 2rem;
      }
   }

`;