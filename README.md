# TrybeWallet Project

[![TrybeWallet Screen Shot][product-screenshot]](https://alvaresju.github.io/trybewallet/)

### Link da página do projeto: [https://alvaresju.github.io/trybewallet/](https://alvaresju.github.io/trybewallet/)


<!-- TABLE OF CONTENTS -->
<details>
  <summary><h2><strong>Sumário</strong></h2></summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#contexto">Contexto</a></li>
        <li><a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a></li>
        <li><a href="#funcionalidades-implementadas">Funcionalidades Implementadas</a></li>
      </ul>
    </li>
    <li>
      <a href="#para-iniciar-a-aplicação">Para Iniciar a Aplicação</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#clonando-o-repositório">Clonando o Repositório</a></li>
        <li><a href="#instalando-dependências">Instalando Dependências</a></li>
        <li><a href="#executando-a-aplicação">Executando a Aplicação</a></li>
        <li><a href="#executando-testes-e-análise-de-cobertura">Executando Testes e Análise de Cobertura</a></li>
      </ul>
    </li>
    <li><a href="#contribuições-e-autorias">Contribuições e Autorias</a></li>
  </ol>
</details>


# Sobre o Projeto
  O projeto TrybeWallet é uma aplicação web front-end para uma carteira digital de controle de gastos com conversor de moedas, consumindo dados da [API de Cotações do awesomeapi](https://docs.awesomeapi.com.br/api-de-moedas) para realizar a busca de câmbio de moedas.

## Contexto
  Esse projeto foi desenvolvido por _[Juliana Álvares](https://www.linkedin.com/in/juliana-%C3%A1lvares-246872112/)_, como parte do processo de aprendizado do Módulo de Front-end, do curso de Desenvolvimento Web da [Trybe](https://www.betrybe.com/) :rocket:
  
  _"A Trybe é uma escola do futuro para qualquer pessoa que queira mudar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa tem a possibilidadae de só pagar quando conseguir um bom trabalho."_

  O programa conta com mais de 1.500 horas de aulas presenciais e online, aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias Ágeis e habilidades comportamentais.

## Tecnologias Utilizadas

  #### Front-end:
  * [![React][React-img]][React-url]
  * [![React Router][React-router-img]][React-router-url]
  * [![Redux][Redux-img]][Redux-url]

  #### Testes:
  * [![Jest][Jest-img]][Jest-url]
  * [![Testing-Library][RTL-img]][RTL-url]

  #### Linguagens:
  * [![JavaScript - ES6][JavaScript-img]][JavaScript-url]
  * [![CSS3][CSS3-img]][CSS3-url]
  * [![HTML5][HTML5-img]][HTML5-url]

## Funcionalidades Implementadas

  [![TrybeWallet Gif][product-gif]](https://alvaresju.github.io/trybewallet/)

  - Login com identificação da pessoa usuária (e-mail e senha);
  - Adicionar e editar um gasto (com inserção do valor e descrição, seleção da moeda do gasto, do método de pagamento e da categoria da despesa);
  - Visualizar lista de gastos cadastrados (inclui a cotação da moeda no momento de cadastro do gasto e conversão para real - BRL);
  - Visualizar o total de despesas, convertido para real (BRL);
  - Remover gasto da lista.


# Para Iniciar a Aplicação
  Para rodar localmente é necessário garantir o cumprimento dos pré-requisitos, fazer uma cópia e rodar as instruções conforme a seguir:

## Pré-requisitos
  [Node.js](https://nodejs.org/en/) em versão 16 ou superior.

## Clonando o Repositório
  ```bash
    git clone git@github.com:AlvaresJu/trybewallet.git
  ```
## Instalando Dependências
  ```bash
    cd trybewallet/
    npm install
  ``` 
## Executando a Aplicação
  ```bash
    npm start
  ```
## Executando Testes e Análise de Cobertura
  ```bash
    npm test
    npm run test-coverage
  ```

# Contribuições e Autorias
  Como descrito, este projeto foi proposto pela [Trybe](https://www.betrybe.com/) e desenvolvido por _[Juliana Álvares](https://www.linkedin.com/in/juliana-%C3%A1lvares-246872112/)_ durante o curso de Desenvolvimento Web realizado. Por isso, foram disponibilizados pela Trybe alguns arquivos base de configurações e auxiliares ao desenvolvimento do projeto. Segue especificação de autoria dos principais documentos:
  
  Arquivos/diretórios desenvolvidos pela autora do projeto (Juliana Álvares):
  > /src/**
  
  Arquivos/diretórios desenvolvidos pela Trybe:
  > eslintrc.json , stylelintrc.json , package.json , package-lock.json, estrutura geral da pasta: /src

  
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screenshot.png
[product-gif]: images/features.gif
[React-img]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[React-router-img]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React-router-url]: https://reactrouter.com/en/main
[Redux-img]: https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[Jest-img]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/
[RTL-img]: https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white
[RTL-url]: https://testing-library.com/
[JavaScript-img]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[CSS3-img]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[HTML5-img]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
