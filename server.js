const express = require("express");
const pokemonController = require("./controllers/pokemonController")
const app = express();
const port = 3001;

//Tell express which template engine to use
app.set("view engine", "ejs");
// Tell express what static files to use
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/pokemon", pokemonController.listPokemon);

app.get("/pokemon/:id", pokemonController.showPokemon);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})