const welcome_message = require("./message")
//named exports
const calculator = require("./calculator")

console.log(welcome_message());
console.log(calculator.multiply(4,3))
console.log(calculator.division(40,10))