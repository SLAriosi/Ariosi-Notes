//Quando se exporta usando a linha 1 de exemplo, você deve desestruturar a variável dentro do main.jsx no import na linha 3, e você desestrutura no formato de objeto, já que função vira um objeto, (Você passa os valores da função dentro de {} oque significa objeto.)
export function Details() {

  // Um elemento pode ter apenas um return() (regra do REACT) mas a regra também diz que dentro do return() podemos ter quantos elementos a gente quiser.
  return (

    // <> </> = Fragment
    // O fragment serve para podermos colocar dentro de um return vários tipos de elementos
    // Se preferir você também pode usar <div> </div> no lugar do Fragment, a diferença é que com a div você consegue estilizar as coisas já o fragmento não.
    <>
      <h1>Hello World!</h1>
      <span>Lucas Ariosi</span>
    </>
  )
}
