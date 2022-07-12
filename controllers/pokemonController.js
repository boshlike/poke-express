const pokemon = require("../models/pokemon")

const controller = {
    listPokemon: (req, res) => {
        res.json(pokemon);
    }
}
module.exports = controller;