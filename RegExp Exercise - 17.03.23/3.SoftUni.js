function softUni(input) {
    //let pattern = /%(?<customer>[A-Z][a-z]+)%\<(?<product>[A-Za-z]+)\>\|(?<quantity>[0-9]+)\|(?<price>[0-9.]+)\$/g;
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>[0-9]+.?\d*)\$/g;
    let totalSum = 0;

    for (const line of input) {
        if (line === 'end of shift') {
            break;
        }
        let matches = line.matchAll(pattern);
        for (const match of matches) {
            let customer = match.groups.customer;
            let product = match.groups.product;
            let quantity = Number(match.groups.quantity);
            let price = Number(match.groups.price);
            let totalPrice = quantity * price;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
            totalSum += totalPrice;
        }
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softUni(['%George%<Croissant>|2|10.3$',

    '%Peter%<Gum>|1|1.3$',

    '%Maria%<Cola>|1|2.4$',

    'end of shift'])
console.log(`------------------`);
softUni(['%InvalidName%<Croissant>|2|10.3$',

'%Peter%<Gum>1.3$',

'%Maria%<Cola>|1|2.4',

'%Valid%<Valid>valid|10|valid20$',

'end of shift'])