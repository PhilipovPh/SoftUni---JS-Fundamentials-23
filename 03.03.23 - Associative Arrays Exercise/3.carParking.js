function parking(input) {
    let parkingMap = new Map();
    
    for (const lane of input) {
        let [status, car] = lane.split(', ');
        if (status === 'IN') {
            parkingMap.set(car, '');
        } else {
            parkingMap.delete(car, '');
        }
    }
    
    let carArr = Array.from(parkingMap).sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    if (carArr.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        for (const car of carArr) {
            console.log(car[0]);
        }
    }
}

parking(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])

console.log(`-----------------------`);
parking(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])