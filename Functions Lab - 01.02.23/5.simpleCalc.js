// function calculator(a, b, operator) {
//     let multiply = (a, b) => a * b;
//     let add = (a, b) => a + b;
//     let subtract = (a, b) => a - b;
//     let devide = (a, b) => a / b;
// }


// function calc(a, b, operator) {
    
// }

function simpleCalc(a, b, oper) {
    let result = simpleCalculator(a, b, oper);
    console.log(result);

    function simpleCalculator(a, b, oper) {
        let params = {
            multiply: a * b,
            divide: a / b,
            add: a + b,
            subtract: a - b
        };
        return params[oper]
    }
}

simpleCalc(40, 8, 'divide')