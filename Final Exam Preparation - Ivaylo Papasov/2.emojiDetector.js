function emojiDetector(input) {
    let text = input.shift();
    let numberPattern = /[0-9]/g;
    let thresholdArr = text.match(numberPattern);
    let thresholdResult = 1;

    for (const number of thresholdArr) {
        thresholdResult *= Number(number);
    }
    console.log(`Cool threshold: ${thresholdResult}`);
    let emojiPattern = /(:{2}|\*{2})[A-Z][a-z]{2,}\1/g;
    let emojiArr = text.match(emojiPattern);
    console.log(`${emojiArr.length} emojis found in the text.`);
    console.log(`The cool ones are:`);
    
    for (const line of emojiArr) {
        let emoji = line.substring(2, (line.length - 2));
        let emojiThreshold = 0;
        for (let i = 0; i < emoji.length; i++) {
            let char = emoji[i].charCodeAt(0);
            emojiThreshold += char;
        }
        if (emojiThreshold >= thresholdResult) {
            console.log(line);
        }
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])