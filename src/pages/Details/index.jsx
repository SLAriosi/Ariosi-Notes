//Importando os estilos para serem usados aqui no index. Você não precisa fazer nada dentro do arquivo style.
import { Container, Links, Content } from "./styles.js";
// Para Utilizar o estilo Container que foi Importado do CSS temos que colocar Container dentro dos Fragments aonde queremos modificar o estilo.

// Para conseguirmos buscar pelos parametros presentes na nota, nesse caso buscaremos o ID do usuário que estará presente na página Details.
import { useParams, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import { api } from "../../services/api"

// Importamos o component Button da pasta componentes para que nosso index consiga enxergar dentro daquela pasta e utilizar aquela estilização de botão.
import { Header } from '../../components/Header'

import { Button } from '../../components/Button'

import { ButtonText } from '../../components/ButtonText'

import { Section } from '../../components/Section'

import { Tag } from '../../components/Tag'

//Quando se exporta usando a linha 1 de exemplo, você deve desestruturar a variável dentro do main.jsx no import na linha 3, e você desestrutura no formato de objeto, já que função vira um objeto, (Você passa os valores da função dentro de {} oque significa objeto.)
export function Details() {

  const [data, setData] = useState(null)

  const params = useParams()

  const navigate = useNavigate()

  function handleBack() {
    navigate("/")
  }

  async function handleRemove() {
    const confirm = window.confirm("Are you sure you want to remove the note ?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      handleBack()
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  })

  // Um elemento pode ter apenas um return() (regra do REACT) mas a regra também diz que dentro do return() podemos ter quantos elementos a gente quiser.
  return (

    // <> </> = Fragment
    // O fragment serve para podermos colocar dentro de um return vários tipos de elementos
    // Se preferir você também pode usar <div> </div> no lugar do Fragment, a diferença é que com a div você consegue estilizar as coisas já o fragmento não.
    // Dentro dos Buttons utilizamos a tag title ou label ou name, você quem escolhe qual usar, mas ela é uma propriedade que depois iremos recuperar dentro do seu component que nesse caso fica na ./src/components/Button/index.jsx lá dentro eu explico mais no local correto. "linha 5"
    // Na propriedade title para você atribuir um novo valor caso seja texto precisa apenas escrever o title="texto" e caso seja numeros você escreve title={10} por exemplo.
    // Para utilizar o Children você passa ela dentro do Section, não uma propriedade comum como o title
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>


            <ButtonText
              title={"Excluir Nota"}
              onClick={handleRemove}
            />

            <h1>
              {data.title}
            </h1>

            <p>
              {data.description}
            </p>

            {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (

                      // Como a key sempre precisa ter um valor dentro dela em formato de String, usamos o String() para criar.
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag
                      title={tag.name}
                      key={String(tag.id)}
                    />
                  ))
                }
              </Section>
            }


            <Button
              title="Voltar"
              onClick={handleBack}
            />

          </Content>
        </main>
      }

    </Container>
    // Para adicionar propriedades não precisa fazer nada além de dar um espaço, e caso queira adicionar uma propriedade booleana, você só precisa passar a propriedade sem chaves ou aspas.
    // Aqui utilizo o Container dentro do Fragment para puxarmos o estilo Container que puxamos do style.js
    // O children vai capturar tudo que estiver dentro da Section / fragment que ele estiver, ou seja nesse caso ele vai capturar os ul li's, Itens 1, 2 e 3.
    // E após o Children capturar tudo isso, ele usando nosso style.js repassa esse conteúdo abaixo do H2 que é o título como passado ali no ./Section/styles.js
    // <Links>
    //<li><a href="#">https://github.com/SLAriosi/errosBurros/</a></li>
    //<li><a href="#">https://github.com/SLAriosi/svgTools</a></li>
    //</Links>
    //Código Acima é a Children  
  )
}




// O vite que utilizamos para startar o react, e criar todo o programa, se ele virá em formato JavaScript ou TypeScript, também serve para melhorar o tempo de inicio do servidor de desenvolvimento, dividindo os módulos nas categorias: dependências e código-fonte, parecido com o próprio npm.