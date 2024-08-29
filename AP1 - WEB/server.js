const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost/pokemons')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

// Rotas

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log('Clica aí: http://localhost:3000/pokemons');
});

const Pokemon = require('./models/pokemon');

// GET /pokemons - Retorna todos os Pokémons
app.get('/pokemons', async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET /pokemons/:id - Retorna o Pokémon com ID informado
app.get('/pokemons/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon) return res.status(404).send('Pokémon não encontrado');
    res.json(pokemon);
  } catch (err) {
    res.status(500).send(err);
  }
});

// POST /pokemons - Adiciona um novo Pokémon
app.post('/pokemons', async (req, res) => {
  const { name, number, type, image } = req.body;
  const pokemon = new Pokemon({ name, number, type, image });

  try {
    await pokemon.save();
    res.status(201).send(pokemon);
  } catch (err) {
    res.status(400).send(err);
  }
});

// PUT /pokemons/:id - Substitui um Pokémon existente
app.put('/pokemons/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pokemon) return res.status(404).send('Pokémon não encontrado');
    res.json(pokemon);
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE /pokemons/:id - Remove um Pokémon
app.delete('/pokemons/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findByIdAndDelete(req.params.id);
    if (!pokemon) return res.status(404).send('Pokémon não encontrado');
    res.send('Pokémon removido com sucesso');
  } catch (err) {
    res.status(500).send(err);
  }
});
