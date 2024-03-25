import styled from "styled-components";

// Porque colocar o styled.span, para dizermos ao programa, que o tipo de atributo que estamos utilizando é um span.
export const Container = styled.span`
   font-size: 1.2rem;
   padding: 0.5rem 1.4rem;
   border-radius: 0.5rem;
   margin-right: 0.6rem;
   color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
   background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;