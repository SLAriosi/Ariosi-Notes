import styled from "styled-components";

// Fazendo a exportação do Container em formato de div.
export const Container = styled.div`
   display: flex;
   align-items: center;

   // Para acessar uma propriedade que passamos no tema para validar é simplesmente colocar uma virgula e passar a propriedade nesse caso é isNew. Assim conseguimos acessar a propriedade passada no styled components.
   // Na validação ele vê se o isNew é verdadeiro, se sim deixa transparent, se não deixa o thema com a cor laranja.
   background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
   color: ${({ theme }) => theme.COLORS.GRAY_300};

   // Essa condicional serve pra fazer uma borda, se estiver isNew como verdadeiro, vai ter uma borda de 1px com dashed (aqueles pontilhadinhos) caso contrário, fica sem borda.
   border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

   margin-bottom: 0.8rem;
   border-radius: 1rem;
   padding-right: 1.6rem;

   > button {
      border: none;
      background: none;
   }

   .button-delete {
      color: ${({ theme }) => theme.COLORS.RED};
   }

   .button-add {
      color: ${({ theme }) => theme.COLORS.ORANGE};
   }

   > input {
      height: 5.6rem;
      width: 100%;
      
      padding: 1.2rem;

      color: ${({ theme }) => theme.COLORS.WHITE};
      background: transparent;

      border: none;

      // O placeholder (aquelas letrinhas dos textareas, são estilizadas usando esse ::placeholder)
      &::placeholder {
         color: ${({ theme }) => theme.COLORS.GRAY_300};
      }

      &:focus {
         outline: none;
      }
   }
`;