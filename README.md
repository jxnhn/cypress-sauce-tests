# Sauce Demo Testes

Projeto de automação de testes **end-to-end** utilizando [Cypress](https://www.cypress.io/) que cobre fluxos de **login** e **compras** do site [Sauce Demo](https://www.saucedemo.com).
---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Executar os Testes](#como-executar-os-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Detalhes do Teste](#detalhes-do-teste)
- [Referências](#referências)

---

## Sobre o Projeto

Este projeto contém duas specs, uma que valida login com várias entradas e outra que considera diferentes jornadas do usuário para cobertura do fluxo de compras.

---

## Pré-requisitos

- [Node.js 22.15.0](https://nodejs.org/) (versão exata utilizada no projeto) 
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Cypress](https://www.cypress.io/) (instalado como dependência do projeto)

---

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/cypress-pacto-solucoes.git
   cd cypress-pacto-solucoes
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```
   ou
   ```sh
   yarn install
   ```

---

## Como Executar os Testes

### Modo Interativo (GUI)
```sh
cypress open
```
Escolha o arquivo `login.cy.js` para rodar o teste de logins e o `marketcar.cy.js`.

### Modo Headless (Terminal)
```sh
cypress run --spec "cypress/e2e/login.cy.js"
cypress run --spec "cypress/e2e/marketcar.cy.js"
```

---

## Estrutura do Projeto

```
cypress-sauce-tests/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js      # Testes de login
│   │   └── marketcar.cy.js  # Testes de compras
│   └── support/
├── cypress.config.js         # Configuração do Cypress (baseUrl, timeouts, etc)
├── package.json
└── README.md

```

---

## Detalhes do Teste

- **Arquivo:** `cypress/e2e/login.cy.js`
- **Fluxos testados:**  
  1. Acessa a página de login do Sauce Demo.
  2. Realiza uma série de logins com diversas entradas, com dados válidos e inválidos e usuários bloqueados".
  
- **Arquivo:** `cypress/e2e/marketcar.cy.js`
- **Fluxos testados:**  
  1. Acessa a página de inventário do Sauce Demo.
  2. Realiza os fluxos de compras, dando checkout com dados válidos e inválidos, além de considerar os filtros de ordenação".
---

## Referências

- [Documentação Cypress](https://docs.cypress.io/)
- [Node.js](https://nodejs.org/)