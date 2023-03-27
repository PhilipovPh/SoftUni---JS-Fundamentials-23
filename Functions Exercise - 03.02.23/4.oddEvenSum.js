function oddEvenSum(numb) {
    let stringSum = numb.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < stringSum.length; i++) {
        let currentNumb = Number(stringSum[i]);
        if(currentNumb % 2 == 0) {
            evenSum += currentNumb;
        } else {
            oddSum += currentNumb;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even Sum = ${evenSum}`);

}
oddEvenSum(1000435);