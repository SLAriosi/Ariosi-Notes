import styled from "styled-components";

// Exportando o Container (nome que atribuimos como padrão, pode ser outro), puxando o styled do styled-components, e definindo esse container como sendo uma div.
export const Container = styled.div`
   height: 100vh;

   display: flex;
   align-items: stretch;
`;

export const Form = styled.form`
   padding: 0 13.6rem;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   text-align: center;

   > h1 {
      font-size: 4.8rem;
      color: ${({ theme }) => theme.COLORS.ORANGE};
   }
   
   > h2 {
      font-size: 2.4rem;
      margin-top: 8.4rem;
      margin-bottom: 2.4rem;
   }
   
   > p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
   }

   > a {
      margin-top: 12.4rem;
      color: ${({ theme }) => theme.COLORS.ORANGE};
   }
`;