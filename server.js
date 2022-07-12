const express = require("express");
const pokemon = require("./models/pokemon")
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/pokemon", (req, res) => {
    res.json(pokemon);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})