function treasureHunt(input) {
    let treasureChest = input.shift().split("|");

    let comands = input.shift();

    while (comands !== "Yohoho!") {
        let line = comands.split(' ');
        let comand = line.shift();

        switch (comand) {
            case 'Loot':
                for (let i = 0; i < line.length; i++) {
                    if (treasureChest.includes(line[i])) {
                        continue;   
                    } else {
                        treasureChest.unshift(line[i]);
                    }
                }
                break;
        }
        comands = input.shift();
    }
    console.log(treasureChest.join(', '));
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",

    "Loot Wood Gold Coins",

    "Loot Silver Pistol",

    "Drop 3",

    "Steal 3",

    "Yohoho!"])