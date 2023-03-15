import {Calculator} from 'sandro-calculator-2';

let readline = require('readline-sync');


let exit:boolean = false;
let calculator = new Calculator();
let result:any;

let option:any = chooseOption();

while(!exit){
    if(+option <= 0 || +option > 5){
        console.log("Invalid option");
        option = chooseOption();
    }
    else if(+option == 5){
        exit = true;
    }
    else{

        let firstNumber:any = readline.question('First number: ');
        let secondNumber:any = readline.question('Second number: ');

        switch(+option){
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

        console.log(`Result: ${ result }`);
        option = chooseOption();
    }
}

function chooseOption():any{
    return readline.question("Select an option: \n1.Add \n2.Substract \n3.Multiply \n4.Divide \n5.Exit \n");
}