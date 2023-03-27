function mine(input) {
    let mineObj = {}
    for (let i = 0; i < input.length; i += 2) {
        let type = input[i];
        let quantity = input[i + 1];
        
        if (!mineObj[type]) {
            mineObj[type] = Number(quantity);
        } else {
            mineObj[type] += Number(quantity);
        }
    }
    for (const key in mineObj) {
        console.log(`${key} -> ${mineObj[key]}`);
    }

}
mine(['Gold', '155', 'Silver', '10', 'Copper', '17'])
console.log(`--------------------------`);
mine([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])