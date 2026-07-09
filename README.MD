# Movies API

Uma API REST simples desenvolvida com Node.js, Fastify e TypeScript para estudo de conceitos básicos de desenvolvimento de APIs.

## Tecnologias

- Node.js
- TypeScript
- Fastify
- @fastify/cors

## Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd movies-api
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

Versão compilada:

```bash
npm run start:dist
```

A API será iniciada em:

```
http://localhost:3333
```

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/movies` | Lista todos os filmes |
| GET | `/movies?genre=Drama` | Filtra filmes por gênero |
| GET | `/movies/:id` | Busca um filme pelo ID |
| GET | `/directors` | Lista todos os diretores |

## Autor

Projeto desenvolvido para fins de estudo utilizando Node.js, Fastify e TypeScript.