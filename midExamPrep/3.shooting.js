function shooting(input) {
    let targetsArr = input.shift().split(' ').map(a => Number(a));
    console.log(targetsArr);

    let comands = input.shift();

    while (comands != "End") {
        let line = comands.split(' ');
        let comand = line.shift();
        let index = Number(line.shift());
        let value = Number(line.shift());

        if (comand == 'Shoot') {
            targetsArr[index] -= value;
            if (targetsArr[index] <= 0) {
                targetsArr.splice(index, 1);
            }
        } else if (comand == 'Add') {
            if (index < targetsArr && index >= 0) {
                targetsArr[index] += value;
            } else {
                console.log(`Invalid placement!`);
            }
        } else if (comand == 'Strike') {
            let startIndex = index - value;
            let endIndex = index + value;
            if(startIndex < 0 || endIndex >= targetsArr.lenght) {
                console.log(`Magare`);
            } else {
                targetsArr.splice(startIndex, (endIndex - startIndex + 1));
            }
        }

        comands = input.shift();
    }
    console.log(targetsArr);
}
shooting(["52 74 23 44 96 110",

"Shoot 5 10",

"Shoot 1 80",

"Strike 2 1",

"Add 22 3",

"End"])