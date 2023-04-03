function decrypting(input) {
    let startText = input.shift();

    let comands = input.shift();

    while (comands !== 'Finish') {
        let line = comands.split(' ');
        let comand = line.shift();

        switch (comand) {
            case 'Replace': {
                let newChar = line[0];
                let oldChar = line[1];
                let changeText = startText.split(newChar);
                startText = changeText.join(oldChar);
                console.log(startText);
                break;
                }
            case 'Cut': {
                let startIndex = Number(line[0]);
                let endIndex = Number(line[1]);

                let leftWord = startText.substring(0, (startIndex + 1));
                let rightWOrd = startText.substring((endIndex + startIndex + 1));
                startText = leftWord + rightWOrd;
                console.log(startText);

                break;
            }
            case 'Check': {
                let check = line[0];
                if (startText.includes(check)) {
                    console.log(`Message contains ${check}`);
                } else {
                    console.log(`Message doesn't contain ${check}`);
                }
                break;
            }
            case 'Make': {
                let subComand = line[0];
                if (subComand === 'Upper') {
                    let changeText = startText.toUpperCase();
                    startText = changeText;
                    console.log(startText);
                } else {
                    let changeText = startText.toLowerCase();
                    startText = changeText;
                    console.log(startText);
                }
                break
            }
            case 'Sum': {
                let startIndex = line[0];
                let endIndex = line[1];
                let sum = 0;
                if (startIndex < 0 || endIndex > (startText.length - 1) || startIndex > endIndex) {
                    console.log(`Invalid indices!`);
                } else {
                    let sumCheck = startText.substring(startIndex, endIndex).split('');
                    for (let i = 0; i < sumCheck.length; i++) {
                        let char = sumCheck[i].charCodeAt(0);
                        sum += char;
                        
                    }
                    console.log(sum);
                }
            }
        }

        comands = input.shift()
    }
}
decrypting((["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"])
)