<h1>ApiRest com Express e MongoDB</h1>

<h2>🔖 Sobre</h2>
<p>Api sobre uma loja de jogos criada durante o curso de APIs com Node.js e Express 🎮</p>

<h2> 🚀 Tecnologias </h2>
<div>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
  <img src= "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
  <img src= "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
</div>

<h2> 🧭Rotas </h2>

<h3> Publicadora 🎬</h3>

- Buscar Publicadoras: `/publicadoras` (GET)
- Buscar Publicadora por Id: `/publicadoras/:id` (GET)
- Cadastrar Publicadora: `/publicadoras` (POST)
- Atualizar Publicadora: `/publicadoras/:id` (PUT)
- Excluir Publicadora: `/publicadoras/:id` (DELETE)

<h4>Essa é a estrutura JSON para fazer o POST e o PUT de Publicadora:</h4>

```json
{
    "nome": "Sony",
    "presidente": "Jim Ryan"
}
```

<h3> Jogo 🕹️</h3>

- Buscar Jogos: `/jogos` (GET)
- Buscar Jogos por Desenvolvedora: `/jogos/busca` (GET)
- Buscar Jogo por Id: `/jogos/:id` (GET)
- Cadastrar Jogo: `/jogos` (POST)
- Atualizar Jogo: `/jogos/:id` (PUT)
- Excluir Jogo: `/jogos/:id` (DELETE)

<h4>Essa é a estrutura JSON para fazer o POST e o PUT de Jogo:</h4>

```json
{
    "nome": "Marvel’s Spider-Man: Miles Morales",
    "desenvolvedor": "Insomniac Games",
    "preco": "200",
    "quantidade": "100",
    "publicadora": "66df38397ab61e39a53eb222"
}
```
