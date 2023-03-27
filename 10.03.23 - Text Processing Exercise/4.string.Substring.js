function stringSubstring(word, text) {
    let testWord = text.toLowerCase().includes(word);
    
    if (testWord) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
    
}
stringSubstring('javascript',

' is the best JavaScript programming language')
