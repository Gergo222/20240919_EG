const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`Hívott végpont: ${req.path}`)

    next()
})

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(port, () =>{
    console.log("Fut a szerver");


})