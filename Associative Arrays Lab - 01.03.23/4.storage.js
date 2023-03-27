function store(input) {
    let storageObj = {};

    for (const lane of input) {
        let [product, quantity] = lane.split(' ');

        if (storageObj.hasOwnProperty(product)) {
            storageObj[product] += Number(quantity);
        } else {
            storageObj[product] = Number(quantity);
        }
        
    }

    for (let product in storageObj) {
        console.log(`${product} -> ${storageObj[product]}`);
    }
}
store(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40']);

console.log('---------------');
store(['apple 50',

'apple 61',

'coffee 115',

'coffee 40']);