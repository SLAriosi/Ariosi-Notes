import styled from "styled-components";

//Importando a imagem de background da caneca, da pasta assets, para esse arquivo styles aqui.
import backgroundImg from "../../assets/caneca_curso.jpg"

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
      font-size: 1.4rem;
      margin-top: 12.4rem;
      color: ${({ theme }) => theme.COLORS.ORANGE};
   }
`;

export const Background = styled.div`
   flex: 1;

   // Usamos o no-repeat para ter apenas uma dela dentro da div, e não ficar duplicando até prencher toda a div.
   background: url(${backgroundImg}) no-repeat center center;
   
   // Para ele preencher toda a div com a imagem desejada, até preencher emcima e os lados, mesmo tendo que passar do por fora da div para preencher tudo. 
   background-size: cover;
`;