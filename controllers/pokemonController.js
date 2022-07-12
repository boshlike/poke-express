const pokemon = require("../models/pokemon")

const controller = {
    listPokemon: (req, res) => {
        res.render("index.ejs");
    }
}
module.exports = controller;