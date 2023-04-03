function translateStrings(input) {
    let numb = Number(input.shift());
    let pattern = /^!([A-Z][a-z]+)!:\[([a-zA-Z]+)\]$/;
    for (let i = 0; i < numb; i++) {
        const match = input[i].match(pattern);
        if (match) {
            const [_, command, string] = match;
            const translatedString = string
                .split('')
                .map(char => char.charCodeAt(0))
                .join(' ');
            console.log(`${command}: ${translatedString}`);
        } else {
            console.log('The message is invalid');
        }
    }
}

translateStrings((["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"])
)