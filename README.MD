# 🏎️ Formula 1 API

Uma API REST simples desenvolvida com **Node.js**, **Fastify** e **TypeScript** para fins de estudo.

## Tecnologias

- Node.js
- TypeScript
- Fastify
- @fastify/cors

## Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
```

Entre na pasta do projeto:

```bash
cd NOME-DO-REPOSITORIO
```

Instale as dependências:

```bash
npm install
```

## Executando o projeto

Modo de desenvolvimento:

```bash
npm run start:watch
```

O servidor será iniciado em:

```text
http://localhost:3333
```

## Endpoints

### Listar todas as equipes

```http
GET /teams
```

Exemplo:

```http
http://localhost:3333/teams
```

---

### Filtrar equipes por país

```http
GET /teams?country=Itália
```

Exemplo:

```http
http://localhost:3333/teams?country=Itália
```

---

### Buscar equipe pelo ID

```http
GET /teams/:id
```

Exemplo:

```http
http://localhost:3333/teams/1
```

---

### Listar todos os pilotos

```http
GET /drivers
```

Exemplo:

```http
http://localhost:3333/drivers
```

---

### Buscar piloto pelo ID

```http
GET /drivers/:id
```

Exemplo:

```http
http://localhost:3333/drivers/2
```

## Estrutura do projeto

```
src/
└── server.ts
```

## Autor

Projeto desenvolvido para fins de estudo com Node.js, Fastify e TypeScript.