"use strict";
exports.__esModule = true;
var sandro_calculator_2_1 = require("sandro-calculator-2");
var readline = require('readline-sync');
var exit = false;
var calculator = new sandro_calculator_2_1.Calculator();
var result;
var option = chooseOption();
while (!exit) {
    if (+option <= 0 || +option > 5) {
        console.log("Invalid option");
        option = chooseOption();
    }
    else if (+option == 5) {
        exit = true;
    }
    else {
        var firstNumber = readline.question('First number: ');
        var secondNumber = readline.question('Second number: ');
        switch (+option) {
            case 1:
                result = calculator.add(+firstNumber, +secondNumber);
                break;
            case 2:
                result = calculator.substract(+firstNumber, +secondNumber);
                break;
            case 3:
                result = calculator.multiply(+firstNumber, +secondNumber);
                break;
            case 4:
                result = calculator.substract(+firstNumber, +secondNumber);
                break;
        }
        console.log("Result: ".concat(result));
        option = chooseOption();
    }
}
function chooseOption() {
    return readline.question("Select an option: \n1.Add \n2.Substract \n3.Multiply \n4.Divide \n5.Exit \n");
}
