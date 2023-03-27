function pascalCase(inputText) {
    let result = [];
    let startIndex = 0;

    for (let i = 1; i < inputText.length; i++) {
        let char = inputText[i];
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            result.push(inputText.substring(startIndex, i));
            startIndex = i;
        }
    }
    result.push(inputText.substring(startIndex));
    console.log(result.join(', '));
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')