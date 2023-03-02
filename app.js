
const express = require("express");
const dotenv=require("dotenv")
const cors = require("cors");
const app = express();
dotenv.config({path: './config.env'});//type null > config.env ===> create config file
const PORT=process.env.PORT;
app.use(express.json())
require('./db/conn')//IMPIMP...
app.use(cors({origin: "*"}))
//const User = require('./model/userSchema');
app.use(require('./routes/auth'));


// app.get("/", (req, res) => {
//     res.send("Hello world home from server app.js");
// })
app.get("/about", (req, res) => {
    res.send("Hello world about from server");
})
app.get("/contact", (req, res) => {
    res.send("Hello world contact from server");
})
app.get("/register", (req, res) => {
    res.send("Hello register world contact from server");
})
// app.get("/login", (req, res) => {
//     res.send("Hello login world contact from serv11er");
// })


app.listen(PORT, () => {
    console.log(`server load on ${PORT} port`);
})

