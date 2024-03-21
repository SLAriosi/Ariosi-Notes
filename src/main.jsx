import React from 'react'
import ReactDOM from 'react-dom/client'

//Se desestrutura o Details { Details } dessa maneira pois lá em Details.jsx ele não é um export default, portanto devesse DESESTRUTURAR a função Details(){}, E como uma função recebe seus valores em formato de OBJETO ("{}") é necessário desestruturar com {} aqui no inicio do programa
import { Details } from './pages/Details'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Details />
  </React.StrictMode>,
)
