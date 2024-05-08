function sortingNumbers(arr) {
    let middleArr = arr.sort((a, b) => b - a);
    let resultArr = [];

    for (let i = 0; i < middleArr.length / 2; i++) {

        resultArr.push(middleArr[i]);
        resultArr.push(middleArr[middleArr.length - 1 - i]);

    }

    if (middleArr.length % 2 === 1) {
        resultArr.pop();
    }

    console.log(resultArr);
    console.log(middleArr);
}

sortingNumbers([1, 21, 3, 52, 69, 63, 31, 2, 18])
