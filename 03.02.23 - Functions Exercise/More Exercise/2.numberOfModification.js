function rotation(n) {
    let sum = 0;
    let numberToString = String(n)
    let avarage = 0;
    while (avarage < 5) {
        for (let i = 0; i < numberToString.length; i++) {
            sum += Number(numberToString[i]);
        }
        avarage = sum / (numberToString.length);
        if (avarage >= 5) {
            console.log(numberToString);
        } else {
            numberToString += '9';
            sum = 0;

        }
    }
}

rotation(101);