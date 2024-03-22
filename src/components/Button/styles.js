// Importando para 
import styled from "styled-components";

// Exportando Container com a propriedade de styled que pegamos do framework de css styled-components, e adicionamos o atributo button, para que ele consiga passar para um botão de maneira padrão, pois colocamos type="button" no index.jsx aqui do Button
export const Container = styled.button`
   width: 100%;

   // A cor dos textos ficarão com a Cor que o theme tem de ORANGE dentro dele. no caso o ORANGE é "#FF9000" 
   background-color: ${({ theme }) => theme.COLORS.ORANGE};
   
   //A cor dos textos ficarão com a Cor que o theme tem de WHITE dentro dele. no caso o WHITE é "#F4EDE8"
   color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

   height: 5.6rem;
   border: 0;
   padding: 0 1.6rem;
   margin-top: 1.6rem;
   border-radius: 10px;
   font-weight: 500; // Tamanho médio Nem Bold nem Normal

   // Utilizando o & você faz a mesma coisa de como se fosse uma nova estilização para o button:hover ou button:disabled etc.
   &:disabled {
      opacity: 0.5;
   }
`