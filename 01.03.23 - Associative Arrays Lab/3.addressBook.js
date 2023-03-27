function addressBook(input) {
    let addresBookObj = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        addresBookObj[name] = address;
    }

    let addressEntry = Object.entries(addresBookObj);
    addressEntry.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (const lane of addressEntry) {
        console.log(`${lane[0]} -> ${lane[1]}`);
        
    }
}
addressBook(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd'])