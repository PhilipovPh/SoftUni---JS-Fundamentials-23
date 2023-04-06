function comuterStore(input) {
    let typeOfClient = input.pop();

    let priceWithoutTaxes= 0;

    for (const price of input) {
        if (price > 0) {
            priceWithoutTaxes += Number(price);
        } else {
            console.log(`Invalid price!`);
        }   
    }
    
    let taxes = priceWithoutTaxes * 0.2;

    let totalPrice = taxes + priceWithoutTaxes

    if(typeOfClient === 'special') {
        totalPrice = totalPrice * 0.9;
    }
    if(totalPrice > 0) {
        console.log(`"Congratulations you've just bought a new computer!\n Price without taxes: ${priceWithoutTaxes}$\n Taxes: ${taxes}$\n -----------\n Total price: ${totalPrice}$"`);
    } else {
        console.log(`Invalid order!`);
    }

}

comuterStore([

    '1050',
    
    '200',
    
    '450',
    
    '2',
    
    '18.50',
    
    '16.86',
    
    'special'
    
    ])
    console.log(`--------------`);
    comuterStore([

        'regular'
        
        ])

    console.log(`--------------`);
    comuterStore([

        '1023',
        
        '15',
        
        '-20',
        
        '-5.50',
        
        '450',
        
        '20',
        
        '17.66',
        
        '19.30',
        
        'regular'
        
        ])