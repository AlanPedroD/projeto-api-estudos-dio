# 🏎️ F1 Dashboard API

Projeto desenvolvido durante os estudos de **Node.js** e **TypeScript**, acompanhando um curso sobre criação de APIs com **Fastify**.

A aplicação disponibiliza uma API simples com informações sobre equipes e pilotos da Fórmula 1 e também possui uma interface web para consumir esses dados.

## 🚀 Tecnologias utilizadas

* Node.js
* TypeScript
* Fastify
* HTML5
* CSS3
* JavaScript

## 📂 Funcionalidades

* Listar equipes de Fórmula 1
* Buscar uma equipe pelo ID
* Listar pilotos
* Buscar um piloto pelo ID
* Interface web para visualizar os dados da API

## 📡 Endpoints

| Método | Endpoint       | Descrição                |
| ------ | -------------- | ------------------------ |
| GET    | `/teams`       | Lista todas as equipes   |
| GET    | `/teams/:id`   | Busca uma equipe pelo ID |
| GET    | `/drivers`     | Lista todos os pilotos   |
| GET    | `/drivers/:id` | Busca um piloto pelo ID  |

## ▶️ Como executar o projeto

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

Abra o navegador em:

```
http://localhost:3333
```

## 📸 Interface

A página inicial permite visualizar as equipes e os pilotos através dos botões disponíveis na interface.

> Após iniciar a aplicação, basta acessar `http://localhost:3333` no navegador.

## 📚 Objetivo

Este projeto foi desenvolvido com fins de aprendizado, colocando em prática conceitos como:

* criação de APIs REST;
* rotas com Fastify;
* integração entre front-end e back-end;
* consumo de APIs utilizando `fetch`;
* organização de um projeto com Node.js e TypeScript.
