function party(arr) {
    let partylist = [];

    for (let el of arr) {
        let comands = el.split(' ');
        if (comands[2] === 'going!') {
            partylist.push(comands[0]);
        } else if (comands[2] === 'not') {
            if (partylist.includes(comands[0])) {
                partylist.splice(partylist.indexOf(comands[2]), 1);
            } else {
                console.log(`${comands[0]} is not on the list`)
            }
        }
    }
    console.log(partylist);
}

party(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])
