function cardPlay(input) {
    let playersMap = new Map();

    let powerCardEnum = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7, 
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }

    let powerTypeEnum = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }
    for (const line of input) {
        let [name, cards] = line.split(': ')

        if (!playersMap.has(name)) {
            playersMap.set(name, new Set());
        }
        let cardsArr = cards.split(', ');
        for (const card of cardsArr) {
            playersMap.get(name).add(card);
        }
    }
    for (const playerInfo of Array.from(playersMap)) {
        let count = 0;
        for (const card of Array.from(playerInfo[1])) {
            let cardInfo = card.split('');
            let powerAsString = cardInfo.splice(0, cardInfo.length - 1).join('');
            let typeAsString = cardInfo[cardInfo.length -1];
            let power = powerCardEnum[powerAsString];
            let type = powerTypeEnum[typeAsString];
            count +=  power * type;
        }

        console.log(`${playerInfo[0]}: ${count}`);
    }
}


cardPlay([

    'Peter: 2C, 4H, 9H, AS, QS',

    'Tomas: 3H, 10S, JC, KD, 5S, 10S',

    'Andrea: QH, QC, QS, QD',

    'Tomas: 6H, 7S, KC, KD, 5S, 10C',

    'Andrea: QH, QC, JS, JD, JC',

    'Peter: JD, JD, JD, JD, JD, JD'

])