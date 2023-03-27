function charInRange(charA, charB) {
    let NumbOfCharA = charToNumb(charA);
    let NumbOfCharB = charToNumb(charB);

    let startIndex = start(NumbOfCharA, NumbOfCharB);
    let endIndex = end(NumbOfCharA, NumbOfCharB);

    buff = '';

    for (let i = startIndex + 1; i < endIndex; i++) {
        buff += numbToChar (i) + ' ';
    }

    console.log(buff.trim());

    function charToNumb(char) {
        return char.charCodeAt(0);
    }

    function start(a, b) {
        return Math.min(a, b);
    }

    function end(a, b) {
        return Math.max(a, b);
    }

    function numbToChar(numb) {
        return String.fromCharCode(numb);
    }
}

charInRange('a', 'd');