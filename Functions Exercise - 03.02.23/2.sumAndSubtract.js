function solve(a, b, c) {
let sum = add(a, b);
let finalSum = subtract(sum, c);

console.log(finalSum);


    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }
}

solve(1, 2, 3);