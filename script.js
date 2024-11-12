function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function devide(a, b) {
    return a / b;
}

const num1 = ""
const operator = ""
const num2 = ""

function operate(opp, a, b) {
    switch (opp) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return devide(a, b);
        default:
            return null;
    }
}
