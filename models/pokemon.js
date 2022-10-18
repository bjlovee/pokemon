const mongoose = require('mongoose')

// Make A Schema 
const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true},
    type: { type: String, required: true},
    image: { type: String, required: true},
    readyToFight: Boolean
})


// Make A model From The Schema
const Pokemon = mongoose.model('Pokemon', pokemonSchema)


// Export The Model For Use In The App

module.exports = Pokemon