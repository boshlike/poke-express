const express = require("express");
const pokemonController = require("./controllers/pokemonController")
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/pokemon", pokemonController.listPokemon);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})