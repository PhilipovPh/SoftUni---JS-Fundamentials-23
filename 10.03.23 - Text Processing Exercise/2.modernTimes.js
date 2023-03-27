function modernTimes(input) {
    let inputArr = input.split(' ').filter(x => x.startsWith('#')).filter(x => x.length > 1);

    for (const words of inputArr) {
        let newWord = words.substring(1);
        let istrue = true;
        for (let char of newWord) {
            let newChar = char.toLowerCase();
            if (newChar.charCodeAt(0) < 97 || newChar.charCodeAt(0) > 122) {
                istrue = false;
                break
            }
        }
        if (istrue) {
            console.log(newWord);
        }
    }
}


modernTimes('Nowadays everyone uses # to tag a #spe7cial word in #socialMedia')