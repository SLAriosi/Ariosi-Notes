import styled from "styled-components";

import { Link } from 'react-router-dom'

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
`;

export const Profile = styled(Link)`
   display: flex;
   align-items: center;

   // esse sinal de > é pra garantir que irá alterar apenas a imagem que está dentro do Profile
   > img {
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 50%;
   }

   > div {
      display: flex;
      flex-direction: column;
      margin-left: 1.6rem;
      line-height: 2.4rem;

      span {
         font-size: 1.4rem;
         color: ${({ theme }) => theme.COLORS.GRAY_100};
      }

      strong {
         font-size: 1.8rem;
         color: ${({ theme }) => theme.COLORS.WHITE};
      }
   }
`;

export const Logout = styled.button`
   border: none;
   background: none;

   > svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 3.6rem;
   }
`;