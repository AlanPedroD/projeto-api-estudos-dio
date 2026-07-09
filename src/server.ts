import fastify from "fastify";
import cors from "@fastify/cors";

// const server = fastify({ logger: true });
const server = fastify({ logger: false });

server.register(cors, {
  origin: "*" // Essa linha significa que qualquer pessoa pode acessar a API
});

const movies = [
  {
    id: 1,
    title: "Interestelar",
    genre: "Ficção Científica",
    year: 2014,
    directorId: 1,
    duration: 169,
    rating: 8.7
  },
  {
    id: 2,
    title: "Batman Begins",
    genre: "Ação",
    year: 2005,
    directorId: 1,
    duration: 140,
    rating: 8.2
  },
  {
    id: 3,
    title: "O Poderoso Chefão",
    genre: "Drama",
    year: 1972,
    directorId: 2,
    duration: 175,
    rating: 9.2
  }
];

const directors = [
  {
    id: 1,
    name: "Christopher Nolan",
    nationality: "Britânico"
  },
  {
    id: 2,
    name: "Francis Ford Coppola",
    nationality: "Americano"
  }
];

server.get("/movies", async (request, response) => {
  const { genre } = request.query as { genre?: string };

  if (genre) {
    const filteredMovies = movies.filter(movie => movie.genre === genre);

    response.type("application/json").code(200);
    return filteredMovies;
  }

  response.type("application/json").code(200);
  return movies;
});

server.get("/directors", async (request, response) => {
  response.type("application/json").code(200);

  return [{ directors }];
});

interface MoviesParams {
  id: string;
}

server.get<{ Params: MoviesParams }>("/movies/:id", async (request, response) => {
  const id = parseInt(request.params.id);

  const movie = movies.find(m => m.id === id);

  if (!movie) {
    response.type("application/json").code(404);
    return { message: "Filme não encontrado" };
  }

  response.type("application/json").code(200);
  return { movie };
});

server.listen({ port: 3333 }, () => {
  console.log("🚀 Servidor iniciado em http://localhost:3333");
});