function solve(text, word) {
    let rusult = text.split(' ' || ', ' || '. ').filter(x => x === word).length;
    console.log(rusult);
}

solve('This is a word and it also is a sentence',

'is')