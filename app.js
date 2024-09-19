const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

const buildingsRoutes = require("./routes/buildings/route");
const employeesRoutes = require("./routes/employees/route");

app.use("/buildings", buildingsRoutes)
app.use("/employees", employeesRoutes)

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