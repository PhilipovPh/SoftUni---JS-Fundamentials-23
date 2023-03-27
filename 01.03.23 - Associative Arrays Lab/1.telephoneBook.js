function telephoneBook(input) {
    let book = {};

    for (const lane of input) {
        let laneArr = lane.split(' ');
        let name = laneArr[0];
        let phone = laneArr[1];
        book[name] = phone;
    }

    for (const key in book) {
        console.log(`${key} -> ${book[key]}`);
    }

}

telephoneBook(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344'])