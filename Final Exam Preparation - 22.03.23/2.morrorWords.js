function mirrorWords(input) {
    let pattern = /([@|#])(?<first>[A-Za-z]{3,})\1{2}(?<second>[A-Za-z]{3,})\1/g;
    let text = input.shift();
    let counter = 0;
    let result = [];

    let midResult = text.matchAll(pattern)

    for (const line of midResult) {
        counter++;
        let first = line.groups['first'];
        let second = line.groups['second'];
        let secondTest = second.split('').reverse().join('');
        if (first === secondTest) {
            result.push(first, second);
        }
    }
    console.log(`${counter} word pairs found!`);
    console.log(`The mirror words are:`);
    
    let finalArr = [];

    for (let i = 0; i < result.length; i += 2) {
        let lastResult = result[i] + ' <=> ' + result[i + 1];
        finalArr.push(lastResult);
    }
    console.log(finalArr.join(' '));
}

mirrorWords([

    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    
    ]);