function factorial(a, b) {
    let factorialA = factorialCalc(a);
    let factorialB = factorialCalc(b);

    
    function factorialCalc(numb) {
        let currentNumb = 1;
        for (let i = numb; i > 1; i--) {
            currentNumb *= i;
        }
        return currentNumb;
    }
    console.log((factorialA / factorialB).toFixed(2));
}
factorial(5, 2);