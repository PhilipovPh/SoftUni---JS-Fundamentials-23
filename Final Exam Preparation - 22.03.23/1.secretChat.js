function secretChat(input) {
    let startText = input.shift();

    let comands = input.shift();

    while (comands !== 'Reveal') {
        let line = comands.split(':|:');
        let comand = line.shift();
        

        switch (comand) {
            case 'InsertSpace':
                let index = Number(line[0]);
                let leftSide = startText.substring(0, index);
                let rightSide = startText.substring(index);
                startText = leftSide + ' ' + rightSide;
                console.log(startText);

                break;
            case 'Reverse': {
                let text = line[0];
                if (startText.includes(text)) {
                    startText = startText.replace(text, reverse(text))
                    console.log(startText);
                } else {
                    console.log('error');
                }
                break;
            }
            case 'ChangeAll': {
                let changeText = startText.split(line[0]);
                startText = changeText.join(line[1]);
                console.log(startText);
                break;
            }
        }


        comands = input.shift()
    }
    
    function reverse(data) {
        return data.split('').reverse().join('');
        
    }
    console.log(`You have a new text message: ${startText}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
    
    ])