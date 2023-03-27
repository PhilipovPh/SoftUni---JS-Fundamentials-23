function revealWords(words, text) {
    let wordsArr = words.split(', ');
    let textArr = text.split(' ');

    for (let el of wordsArr) {
        for (let i = 0; i <textArr.length; i++) {
            if (textArr[i].includes('*') && textArr[i].length === el.length) {
                textArr[i] = el;
            }
            
        }
        
    }
 console.log(textArr.join(' '));
}
revealWords('great, learning',

'softuni is ***** place for ******** new programming languages');

function solve(input) {
    let newInput = input.toLowerCase();
    console.log(newInput);
}
solve('PALLET RACKS, STORAGE EQUIPMET, STORAGE SYSTEMS, AUTOMATED WAREHOUSES, MATERIAL HANDLING EQUIPMENT, STORAGE AND CLEANING EQUIPEMENT')