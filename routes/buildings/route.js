const express = require("express");
const connection = require("../../db");
const router = express.Router();

router.get("/", (req, res) => {
    connection.query(
        'SELECT * FROM buildings',
        (err, result, fields) => {
            if(err){
                res.status(400).json(err)
            }else{
                res.json(result)
            }
        }
    )
})

router.post("/create", (req, res) => {
    const data = req.body;

    if(data){
        connection.query(
            "INSERT INTO buildings(height, name) VALUES(?, ?)",
            [data.height, data.name],
            (err, result, fields) => {
                if(err){
                    res.status(400).json(err)
                }else {
                    res.json(result)
                }
            }
        );
    }else{
        res.status(400).json("No data!")
    }
})



module.exports = router;