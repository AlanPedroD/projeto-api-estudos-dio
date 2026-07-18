const btnTeams = document.getElementById("btnTeams");
const btnDrivers = document.getElementById("btnDrivers");
const conteudo = document.getElementById("content");

btnTeams.addEventListener("click", async () => {
  const resposta = await fetch("/teams");
  const equipes = await resposta.json();

  conteudo.innerHTML = "";

  equipes.forEach((equipe) => {
    conteudo.innerHTML += `
      <div>
        <h3>${equipe.name}</h3>
        <p>País: ${equipe.country}</p>
        <p>Base: ${equipe.base}</p>
        <p>Títulos: ${equipe.championships}</p>
      </div>
      <hr>
    `;
  });
});

btnDrivers.addEventListener("click", async () => {
  const respostaPilotos = await fetch("/drivers");
  const pilotos = await respostaPilotos.json();

  const respostaEquipes = await fetch("/teams");
  const equipes = await respostaEquipes.json();

  conteudo.innerHTML = "";

  pilotos.forEach((piloto) => {
    const equipe = equipes.find(
      (team) => team.id === piloto.teamId
    );

    conteudo.innerHTML += `
      <div>
        <h3>${piloto.name}</h3>
        <p>Nacionalidade: ${piloto.nationality}</p>
        <p>Equipe: ${equipe ? equipe.name : "Sem equipe cadastrada"}</p>
        <p>Títulos: ${piloto.championships}</p>
      </div>
      <hr>
    `;
  });
});