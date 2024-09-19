const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("employe get")
})

router.post("/create", (req, res) => {
    res.send("employe create")
})

router.put("/update/:id", (req, res) => {
    res.send(`employe update: ${req.params.id}`)
})

router.delete("/delete/:id", (req, res) => {
    res.send(`employe delete ${req.params.id}`)
})

module.exports = router;