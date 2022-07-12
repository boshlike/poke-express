const pokemon = require("../models/pokemon");
// Make the first letter of each uppercase
pokemon.forEach(pokemon => {
    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
});
const controller = {
    listPokemon: (req, res) => {
        res.render("index.ejs", {
            pokemon //short form for pokemon: pokemon
        });
    }
}
module.exports = controller;