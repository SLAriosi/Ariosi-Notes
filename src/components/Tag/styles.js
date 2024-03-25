import styled from "styled-components";

// Porque colocar o styled.span, para que quando formos utilizar o Container e enviar os estilos que queremos, utilizarmos já uma tag parecida ou que já faça parte do conteúdo
export const Container = styled.span`
   font-size: 1.2rem;
   padding: 0.5rem 1.4rem;
   border-radius: 0.5rem;
   margin-right: 0.6rem;
   color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
   background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;