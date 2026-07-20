# 🏎️ F1 Dashboard API

Projeto desenvolvido durante o **Bootcamp Sem Parar Corpay - Back-end do Zero à Prática!**, com o objetivo de praticar a criação de APIs REST utilizando **Node.js**, **TypeScript** e **Fastify**.

Como evolução do projeto proposto no bootcamp, desenvolvi uma interface web em **HTML**, **CSS** e **JavaScript** para consumir a API, permitindo visualizar as informações de forma mais intuitiva e tornando a aplicação acessível diretamente pelo navegador.

A aplicação disponibiliza uma API com informações sobre equipes e pilotos da Fórmula 1 e uma interface web para visualizar esses dados de forma simples e intuitiva.

---

## 🚀 Demonstração

🌐 **Acesse a aplicação:**

[Fórmula 1 Dashboard](https://projeto-api-estudos-dio.onrender.com/)


---

## 🛠️ Tecnologias utilizadas

- Node.js
- TypeScript
- Fastify
- HTML5
- CSS3
- JavaScript

---

## ✨ Funcionalidades

- Listagem de equipes da Fórmula 1
- Busca de equipe por ID
- Listagem de pilotos
- Busca de piloto por ID
- Interface web integrada à API
- Consumo da API utilizando `fetch()`

---

## 📡 Endpoints da API

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| GET | `/teams` | Lista todas as equipes |
| GET | `/teams/:id` | Busca uma equipe pelo ID |
| GET | `/drivers` | Lista todos os pilotos |
| GET | `/drivers/:id` | Busca um piloto pelo ID |

---

## ▶️ Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/AlanPedroD/projeto-api-estudos-dio.git
```

Acesse a pasta do projeto:

```bash
cd projeto-api-estudos-dio
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

Abra o navegador em:

```
http://localhost:3333
```

---

## 📁 Estrutura do projeto

```
.
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── src/
│   └── server.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📚 Objetivo

Este projeto foi desenvolvido com o objetivo de praticar conceitos fundamentais do desenvolvimento back-end utilizando Node.js e TypeScript, incluindo:

- criação de APIs REST com Fastify;
- definição de rotas;
- consumo de APIs com JavaScript;
- integração entre front-end e back-end;
- disponibilização da aplicação na web utilizando o Render.

---

## 👨‍💻 Autor

Desenvolvido por **Alan Dias**.

GitHub:
**https://github.com/AlanPedroD**