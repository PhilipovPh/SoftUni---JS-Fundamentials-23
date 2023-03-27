function replaceChars(text) {
    let charsArr = text.split('');
    let result = [];
    for (let i = 0; i < charsArr.length; i++) {
        let newChar = charsArr[i];
        if (newChar === charsArr[i - 1]) {
            continue;
        } else {
            result.push(newChar)
        }
    }
console.log(result.join(''));
}
replaceChars('aaaaabbbbbcdddeeeedssaa')