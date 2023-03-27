function solve(a, b, c) {
    let sign = 'Positive';
    let isANegative = a < 0;
    sign = checkAndChangeSign(sign, isANegative);
    let isBNegative = b < 0;
    sign = checkAndChangeSign(sign, isBNegative);
    let isCNegative = c < 0;
    sign = checkAndChangeSign(sign, isCNegative);

   

    function checkAndChangeSign(sign, shouldChange) {
        if (shouldChange === false) {
            return sign;
        }

        if (sign === 'Positive') {
            sign = 'Negative';
        } else {
            sign = 'Positive'
        }
        return sign;
    }
    console.log(sign);
}

solve(5, 5, -5);