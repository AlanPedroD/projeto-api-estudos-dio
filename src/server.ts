import fastify from "fastify";
import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import path from "node:path";

// const server = fastify({ logger: true });
const server = fastify({ logger: false });

server.register(cors, {
  origin: "*"
});

// Servir arquivos da pasta "public"
server.register(fastifyStatic, {
  root: path.join(process.cwd(), "public"),
  prefix: "/"
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
  },
  {
    id: 4,
    name: "Red Bull Racing",
    country: "Áustria",
    base: "Milton Keynes",
    championships: 6
  },
  {
    id: 5,
    name: "Williams",
    country: "Reino Unido",
    base: "Grove",
    championships: 9
  }
];

const drivers = [
  {
    id: 1,
    name: "Ayrton Senna",
    nationality: "Brasileiro",
    teamId: 1,
    championships: 3
  },
  {
    id: 2,
    name: "Fernando Alonso",
    nationality: "Espanhol",
    teamId: 2,
    championships: 2
  },
  {
    id: 3,
    name: "Sebastian Vettel",
    nationality: "Alemão",
    teamId: 3,
    championships: 4
  },
  {
    id: 4,
    name: "Max Verstappen",
    nationality: "Holandês",
    teamId: 4,
    championships: 4
  },
  {
    id: 5,
    name: "Lewis Hamilton",
    nationality: "Britânico",
    teamId: 5,
    championships: 7
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

const port = Number(process.env.PORT) || 3333;

server.listen(
  {
    port,
    host: "0.0.0.0"
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(`🚀 Servidor iniciado em http://localhost:${port}`);
  }
);