const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("buildings get")
})

router.post("/create", (req, res) => {
    res.send("buildings create")
})

router.put("/update/:id", (req, res) => {
    res.send(`buildings update: ${req.params.id}`)
})

router.delete("/delete/:id", (req, res) => {
    res.send(`buildings delete ${req.params.id}`)
})

module.exports = router;