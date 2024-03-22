// Importando o Container de dentro da pasta styles
import { Container } from "./styles";

//O código selecionado é um componente funcional React que exporta um componente Button.
// Caso você queira fazer esse container ficar de uma maneira que você possa reaproveita-lo no futuro, você adiciona props dentro do parâmetro da função que você está ativando.
// Caso queiramos passar mais propriedades só precisamos por , com a nova propriedade necessária.
// Se o seu botão estiver com várias propriedades você pode usar o rest operator, que é o ...rest caso você não tenha informado as propriedades novas como o loading, ou o title logo de início, você irá inserir as novas propriedades que colocou lá no index do Details dentro desse ...rest.
// A estratégia do Rest é simplesmente ter o pensamento de que, se você não quer passar todas as propriedades porque um botão tem muitas propriedades, você apenas passa esse ...rest, e as adiciona direto dentro dele.
// Porque passar o loading = false, simplesmente porque caso você não tenha definido ele direto no botão, é bom deixá-lo padronizado como falso.
export function Button({title, loading = false, ...rest}) {

   // Tem que ter esse return para retornar de maneira automática depois de ser chamada essa função Button
   return(
   
   // Nós utilizamos esse title, para quando quisermos trocar oque tem dentro do botão nós apenas irmos para o botão em específico e colocarmos title="valor desejado" caso seja numero coloque title={10}
   // Porque é title, apenas pra ficar organizado, mas é ele quem muda o nome, apenas porque ele faz a mesma função de Botão e tudo que está dentro de uma variavel Botão se torna o texto do Botão, isso aqui passa pelo mesmo principio.
   <Container 
      type="button"
      disabled={loading}
      {...rest}
   >
      { loading ? "Carregando..." : title}
   </Container>
   // Explicação Loading: Caso o Loading seja verdadeiro, então irá desabilitar o botão, assim como passamos o loading como uma função Booleana lá no index.jsx do Details (./src/pages/Details/index.jsx)
   // Explicando if ternário: ele é separado dessa forma { "nessa parte vai oque você quer ver se é verdadeiro / falso, caso seja verdadeiro acontece esse próximo primeiro caso e caso falso acontece oque está descrito depois dos dois pontos ':' " ? "Verdadeiro tá certo" : "Falso tá errado" }
   // Continuando Explicação: Podemos passar também atributos dentro dessas 3 partes do if ternário, não precisa ser necessáriamente strings nem números.
   )
}