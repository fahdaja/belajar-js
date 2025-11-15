function multiply(a, b) {
    return a * b;
}

function calculate(operation, x, y) {
    return operation(x, y);
}

const result = calculate(multiply, 5, 10);
console.log(result); // Output: 50