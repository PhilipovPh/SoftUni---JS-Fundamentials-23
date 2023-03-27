function carWash(input) {
    let result = 0;
    for (i = 0; i < input.length; i++) {
        let currentManipulation = input[i];
        if (currentManipulation === 'soap') {
            result += 10;
        } else if (currentManipulation === 'water') {
            result *= 1.2;
        } else if (currentManipulation === 'vacuum cleaner') {
            result *= 1.25;
        } else if (currentManipulation === 'mud') {
            result *= 0.9;
        }
    }
    console.log(`The car is ${result.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud",

"vacuum cleaner"])