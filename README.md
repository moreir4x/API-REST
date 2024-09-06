# API-REST
Objetivo: Criar um sistema para disponibilização de uma API REST de gerenciamento de Pokémons e persistência de dados.

# Dupla
- Diego de Sousa Moreira
- Gislan Souza Silva

# Script de testes

| GET

http://localhost:3000/pokemons

|POST

body > raw

{
  "name": "Bulbasaur",
  "number": 1,
  "type": ["Grass", "Poison"],
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
}


{
  "name": "Ivysaur",
  "number": 2,
  "type": ["Grass", "Poison"],
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
}

{
  "name": "Venusaur",
  "number": 3,
  "type": ["Grass", "Poison"],
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
}


|PUT

http://localhost:3000/pokemons/<id>

body > raw

{
  "name": "Pokémon inexistente",
  "number": 1,
  "type": ["Grass", "Poison"],
  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
}

|DELETE

http://localhost:3000/pokemons/<id>
