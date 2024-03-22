//Importando os estilos para serem usados aqui no index. Você não precisa fazer nada dentro do arquivo style.
import { Container } from "./styles.js";
// Para Utilizar o estilo Container que foi Importado do CSS temos que colocar Container dentro dos Fragments aonde queremos modificar o estilo.

// Importamos o component Button da pasta componentes para que nosso index consiga enxergar dentro daquela pasta e utilizar aquela estilização de botão.
import { Header } from '../../components/Header'

//
import { Button } from '../../components/Button'

//Quando se exporta usando a linha 1 de exemplo, você deve desestruturar a variável dentro do main.jsx no import na linha 3, e você desestrutura no formato de objeto, já que função vira um objeto, (Você passa os valores da função dentro de {} oque significa objeto.)
export function Details() {

  // Um elemento pode ter apenas um return() (regra do REACT) mas a regra também diz que dentro do return() podemos ter quantos elementos a gente quiser.
  return (

    // <> </> = Fragment
    // O fragment serve para podermos colocar dentro de um return vários tipos de elementos
    // Se preferir você também pode usar <div> </div> no lugar do Fragment, a diferença é que com a div você consegue estilizar as coisas já o fragmento não.
    // Dentro dos Buttons utilizamos a tag title ou label ou name, você quem escolhe qual usar, mas ela é uma propriedade que depois iremos recuperar dentro do seu component que nesse caso fica na ./src/components/Button/index.jsx lá dentro eu explico mais no local correto. "linha 5"
    // Na propriedade title para você atribuir um novo valor caso seja texto precisa apenas escrever o title="texto" e caso seja numeros você escreve title={10} por exemplo.
    <Container>
      <Header />
      
      <Button title="Voltar" />
    </Container>
    // Para adicionar propriedades não precisa fazer nada além de dar um espaço, e caso queira adicionar uma propriedade booleana, você só precisa passar a propriedade sem chaves ou aspas.
    // Aqui utilizo o Container dentro do Fragment para puxarmos o estilo Container que puxamos do style.js
    // Agora caso queiramos usar o loading   
  )
}




// O vite que utilizamos para startar o react, e criar todo o programa, se ele virá em formato JavaScript ou TypeScript, também serve para melhorar o tempo de inicio do servidor de desenvolvimento, dividindo os módulos nas categorias: dependências e código-fonte, parecido com o próprio npm.