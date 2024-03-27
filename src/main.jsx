// Importando as bibliotecas do react necessárias para a utilização dele
import React from 'react'
import ReactDOM from 'react-dom/client'

// Importando o styled-components da extesão styled-components (unha sendo pintada) 
import { ThemeProvider } from 'styled-components'

// Se desestrutura o Details { Details } dessa maneira pois lá em Details.jsx ele não é um export default, portanto devesse DESESTRUTURAR a função Details(){}, E como uma função recebe seus valores em formato de OBJETO ("{}") é necessário desestruturar com {} aqui no inicio do programa
import { Details } from './pages/Details'

// Importando esse tema e colocando na linha +- 13 Onde iremos passar o tema padrão do estilo CSS.
import theme from './styles/theme'

// Estamos importando de maneira default os valores CSS que serão globais de dentro da do arquivo global
import GlobalStyles from './styles/global'

import { Routes } from './routes'

// Corpo em estilo HTML usando React no getElementByID nós escrevemos a classe que será colocada esse conteúdo no index.html, nesse caso, e padronizado, vem root. você pode observar essa classe indo até o index.html provavelmente na linha 9 do index.html e lá que será inserido o conteúdo listado aqui abaixo. 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
)

/* Colocamos o GlobalStyles aqui para que em todos os atributos que estiverem dentro do ThemeProvider fossem afetados por essa padronização */