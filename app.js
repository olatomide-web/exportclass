const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("app is functioning")
})

app.listen(port, () => {
    console.log(`server don dey run on ${port}`)
})

const welcome_message = require("./message")
//named exports
const calculator = require("./calculator")

console.log(welcome_message());
console.log(calculator.multiply(4,3))
console.log(calculator.division(40,10))