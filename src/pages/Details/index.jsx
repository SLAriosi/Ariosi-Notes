//Importando os estilos para serem usados aqui no index. Você não precisa fazer nada dentro do arquivo style.
import { Container } from "./styles.js";
// Para Utilizar o estilo Container que foi Importado do CSS temos que colocar Container dentro dos Fragments aonde queremos modificar o estilo.

//Quando se exporta usando a linha 1 de exemplo, você deve desestruturar a variável dentro do main.jsx no import na linha 3, e você desestrutura no formato de objeto, já que função vira um objeto, (Você passa os valores da função dentro de {} oque significa objeto.)
export function Details() {

  // Um elemento pode ter apenas um return() (regra do REACT) mas a regra também diz que dentro do return() podemos ter quantos elementos a gente quiser.
  return (

    // <> </> = Fragment
    // O fragment serve para podermos colocar dentro de um return vários tipos de elementos
    // Se preferir você também pode usar <div> </div> no lugar do Fragment, a diferença é que com a div você consegue estilizar as coisas já o fragmento não.
    <Container>
      <h1>Hello World!</h1>
      <span>Lucas Ariosi</span>
    </Container>
    // Aqui utilizo o Container dentro do Fragment para puxarmos o estilo Container que puxamos do style.js
  )
}




// O vite que utilizamos para startar o react, e criar todo o programa, se ele virá em formato JavaScript ou TypeScript, também serve para melhorar o tempo de inicio do servidor de desenvolvimento, dividindo os módulos nas categorias: dependências e código-fonte, parecido com o próprio npm.