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

let num1 = "" // answer
let operator = null // reset
let num2 = "" // reset

function calculate(opp, a, b) {
    
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
    if (operator == null) {
        num1 += number;
    } else {
        num2 += number;
    }
    showOnDisplay();
}

const operators = ["/", "*", "+", "-"]
for (const operator of operators) {
    const inputOperator = document.getElementById("operator" + operator);
    inputOperator.addEventListener("click", () => {
        addOperatorToCalculation(operator);

    });
}

function addOperatorToCalculation(op) {
    operator = op;
    showOnDisplay();
}

const calculation = document.getElementById("equals");
calculation.addEventListener("click", () => {
    num1 = calculate(operator, num1, num2);
    operator = null
    num2 = ""
    showOnDisplay();
});

function showOnDisplay() {
    if (operator == null) {
        display.textContent = `${num1}`;
    } else {
        display.textContent = `${num1} ${operator} ${num2}`;
    }
};
