function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let num1 = ""
let operator = ""
let num2 = ""

function operate(opp, a, b) {
    switch (opp) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}
const display = document.getElementById("display")

for (let i = 0; i < 10; i++) {
   const inputNumber = document.getElementById("numPad" + i);
    inputNumber.addEventListener("click", () => {
        addNumberToCalculation(i);
        
    });
}

function addNumberToCalculation(number) {
    num1 += number.toString();
    showOnDisplay();
}

for (let i = 0; i < 4; i++) {
    const inputOperator = document.getElementById("operator" + i);
     inputOperator.addEventListener("click", () => {
         addOperatorToCalculation(i);
         
     });
 }

function addOperatorToCalculation(op) {
    alert(`Operator is ${op}`)
}

function showOnDisplay() {
    if (operator == null) {
        display.textContent = `${num1}`;
    } else {
        display.textContent = `${num1} ${operator} ${num2}`;
    }
};
