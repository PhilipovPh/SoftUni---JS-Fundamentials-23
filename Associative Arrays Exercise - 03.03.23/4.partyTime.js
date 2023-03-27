function partyTime(input) {
    let partyList = input.splice(0, input.indexOf('PARTY'));
    input.shift();

    let listSet = new Set();

    for (const guests of partyList) {
        listSet.add(guests);
    }

    let listArr = Array.from(listSet);

    for (const guest of input) {
        if (listArr.includes(guest)) {
            listArr.splice(listArr.indexOf(guest), 1);
        }
    }
    let vip = [];
    let regular = [];

    for (const guest of listArr) {
        if (guest[0] >= 0 && guest[0] <= 9) {
            vip.push(guest);
        } else {
            regular.push(guest);
        }
    }

    console.log(listArr.length);
    vip.forEach(x => console.log(x));
    regular.forEach(x => console.log(x));

}



partyTime(['9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', '7IK9Yo0h',
    'PARTY',
    '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])