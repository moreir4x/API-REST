const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  type: {
    type: [String],
    required: true,
    enum: ['Grass', 'Poison', 'Fire', 'Water', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark', 'Fairy', 'Normal', 'Fighting', 'Flying', 'Bug', 'Rock', 'Ghost', 'Steel', 'Ground']
  },
  image: {
    type: String,
    required: true
  }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
