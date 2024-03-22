// Este documento servirá para colocar os estilos que serão utilizados de maneira padronizada por todas as páginas do arquivo/site.

//importar o estilo createGlobalStyle vindo da extensão styled-components. A extensão fornece para nós a possibilidade de criar essa criação de estilo global
import { createGlobalStyle } from "styled-components";

// Para exportar o estilo dessa variável padrão global, usamos essa estrutura abaixo
export default createGlobalStyle`
// Aqui Dentro Por Padrão você utiliza os comandos do css básicos que geralmente utilizamos.
   
// Adicionando o estilo para telas acessíveis, caso a pessoa precise aumentar a letra o site não ficar desestruturado.
   :root{
      // Padroniza os valores de rem para equivalerem 10 pixeis cada 1 rem
      font-size: 62.5%;
   }
  
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

// Aqui em específico usamos a ${({ theme }) => theme.COLORS.BACKGROUND_800}, para puxar um objeto que está dentro de um outro objeto isso tudo vindo do arquivo theme.js.
// Em resumo ele está setando no theme que estamos usando na main.jsx para que esse theme tenha a propriedade COLORS.BACKGROUND_800 entre outros que criamos lá dentro do theme.js. e está tudo ligando pois dentro das pastas exportamos aquelas variáveis para que todos os arquivos pudessem ve-las.
// Depois de setar esses atributos que queremos que o theme absorva, temos que importar esse estilo lá na main jsx
   body {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      
      // A cor dos textos ficarão com a Cor que 
      color: ${({ theme }) => theme.COLORS.WHITE};

      //UTILIZANDO uma variável nova, chamada -webkit, ela serve pra você alterar uma fonte que você estiver usando.
      -webkit-font-smoothing: antialiased;
   }

//Adicionando estilizações para o body, input, button, textarea
   body, input, button, textarea {

      //Fará todos os textos de todas as variáveis que adicionamos acima terem os textos na fonte Roboto Slab mas caso ela não consiga ser carregada, usamos o serif.
      font-family: 'Roboto Slab', serif;
   }

// Todo link ficará sem o underline
   a{
      text-decoration: none;
   }

// Vai padronizar todos os botões e os links para que aconteçam essas seguintes coisas:
   button, a{

      // O cursor quando passar por cima deles, vai virar aquela mãozinha
      cursor: pointer;

      // A transição terá um filtro de 0.2 ou 2 milésimos
      transition: filter 0.3s;
   }

// Vai padronizar todos os hover dos botões e dos links para que aconteçam essas seguintes coisas:
   button:hover, a:hover{

      // Filtro de brightness, dá uma clareada / escurecida dependendo da numeração que colocarmos.
      filter: brightness(0.8);
   }
`;