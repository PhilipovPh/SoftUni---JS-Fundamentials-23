function store(input) {
    let map = new Map();

    for (let string of input) {
        let [product, quantity] = string.split(' ');

        if (!map.has(product)) {
            map.set(product, Number(quantity));
        } else {
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity += Number(quantity);
            map.set(product, newQuantity);
        }
        
    }

    for (const kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
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