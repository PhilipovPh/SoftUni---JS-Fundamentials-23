function activationPassword(input) {
    let startPassword = input.shift();
    //let comandChanges = input.slice();

    let comandChange = input.shift();

    while (comandChange != 'Generate') {
        let line = comandChange.split('>>>');
        let comand = line.shift();

        switch (comand) {
            case 'Contains': {
                let check = line[0];
                if (startPassword.includes(check)) {
                    console.log(`${startPassword} contains ${check}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
            }
            case 'Flip': {
                let casing = line[0];
                let startIndex = line[1];
                let endIndex = line[2]

                let part = startPassword.substring(startIndex, endIndex);
                let newPart = casing == 'Upper' ? part.toUpperCase() : part.toLowerCase();
                startPassword = startPassword.replace(part, newPart);
                console.log(startPassword);
                break;
            }
            case 'Slice': {
                let startIndex = line[0];
                let endIndex = line[1];

                let part = startIndex.substring(startIndex, endIndex);
                startIndex = startIndex.replace(part, '');
                console.log(startPassword);
                break;
            }
        }
        comandChange = input.shift();
    }
    console.log(`Your activation key is: ${startPassword}`);
}
activationPassword(["abcdefghijklmnopqrstuvwxyz",

    "Slice>>>2>>>6",

    "Flip>>>Upper>>>3>>>14",

    "Flip>>>Lower>>>5>>>7",

    "Contains>>>def",

    "Contains>>>deF",

    "Generate"])