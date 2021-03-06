const pokemon = require("../models/pokemon");
// Make the first letter of each uppercase
pokemon.forEach(pokemon => {
    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
});
// Details the controller
const controller = {
    listPokemon: (req, res) => {
        res.render("index.ejs", {
            pokemon //short form for pokemon: pokemon
        });
    },
    showPokemon: (req, res) => {
        const index = req.params.id;
        res.render("show.ejs", {pokemon: pokemon[index]});
    }
}
module.exports = controller;