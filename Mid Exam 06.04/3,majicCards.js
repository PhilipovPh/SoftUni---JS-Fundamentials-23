function cards(input) {
    let deck = input.shift().split(':');
    let newDeck = [];

    for (let command of input) {
        let [action, cardName, arg] = command.split(' ');

        switch (action) {
            case 'Add':
                if (deck.includes(cardName)) {
                    newDeck.push(cardName);
                } else {
                    console.log('Card not found.');
                }
                break;
            case 'Insert':
                if (deck.includes(cardName) && arg >= 0 && arg < newDeck.length) {
                    newDeck.splice(arg, 0, cardName);
                } else {
                    console.log('Error!');
                }
                break;
            case 'Remove':
                let index = newDeck.indexOf(cardName);
                if (index !== -1) {
                    newDeck.splice(index, 1);
                } else {
                    console.log('Card not found.');
                }
                break;
            case 'Swap':
                let index1 = newDeck.indexOf(cardName);
                let index2 = newDeck.indexOf(arg);
                [newDeck[index1], newDeck[index2]] = [newDeck[index2], newDeck[index1]];
                break;
            case 'Shuffle':
                newDeck.reverse();
                break;
        }
    }

    console.log(newDeck.join(' '));
}

cards(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
    "Add Moonfire",
    "Add Bite",
    "Insert Claw 0",
    "Swap Claw Moonfire",
    "Remove Bite",
    "Ready"]);
