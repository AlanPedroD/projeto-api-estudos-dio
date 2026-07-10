import fastify from "fastify";
import cors from "@fastify/cors";

// const server = fastify({ logger: true });
const server = fastify({ logger: false });

server.register(cors, {
  origin: "*"
});

const teams = [
  {
    id: 1,
    name: "McLaren",
    country: "Reino Unido",
    base: "Woking",
    championships: 9
  },
  {
    id: 2,
    name: "Ferrari",
    country: "Itália",
    base: "Maranello",
    championships: 16
  },
  {
    id: 3,
    name: "Mercedes",
    country: "Alemanha",
    base: "Brackley",
    championships: 8
  }
];

const drivers = [
  {
    id: 1,
    name: "Lando Norris",
    nationality: "Britânico",
    teamId: 1,
    championships: 0
  },
  {
    id: 2,
    name: "Charles Leclerc",
    nationality: "Monegasco",
    teamId: 2,
    championships: 0
  },
  {
    id: 3,
    name: "George Russell",
    nationality: "Britânico",
    teamId: 3,
    championships: 0
  }
];

// Listar equipes
server.get("/teams", async (request, response) => {
  const { country } = request.query as { country?: string };

  if (country) {
    const filteredTeams = teams.filter(team => team.country === country);

    response.type("application/json").code(200);
    return filteredTeams;
  }

  response.type("application/json").code(200);
  return teams;
});

// Buscar equipe por ID
interface TeamParams {
  id: string;
}

server.get<{ Params: TeamParams }>("/teams/:id", async (request, response) => {
  const id = parseInt(request.params.id);

  const team = teams.find(team => team.id === id);

  if (!team) {
    response.type("application/json").code(404);
    return { message: "Equipe não encontrada" };
  }

  response.type("application/json").code(200);
  return { team };
});

// Listar pilotos
server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return drivers;
});

// Buscar piloto por ID
interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>("/drivers/:id", async (request, response) => {
  const id = parseInt(request.params.id);

  const driver = drivers.find(driver => driver.id === id);

  if (!driver) {
    response.type("application/json").code(404);
    return { message: "Piloto não encontrado" };
  }

  response.type("application/json").code(200);
  return { driver };
});

server.listen({ port: 3333 }, () => {
  console.log("🚀 Servidor iniciado em http://localhost:3333");
});