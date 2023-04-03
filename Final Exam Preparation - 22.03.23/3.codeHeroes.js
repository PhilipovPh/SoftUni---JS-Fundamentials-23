function codeHeroes(input) {
    let countOfHeroes = Number(input.shift());
    let heroes = {};
    for (let i = 0; i < countOfHeroes; i++) {
        let info = input.shift();
        let [hero, hitPoints, manaPoints] = info.split(' ');

        heroes[hero] = {
            hP: Number(hitPoints),
            mP: Number(manaPoints)
        };
    }

    let command = input.shift();
    while (command !== 'End') {
        let [commandType, heroName, valueOne, valueTwo] = command.split(' - ');

        switch (commandType) {
            case 'CastSpell':
                let manaNeeded = Number(valueOne);
                let spellName = valueTwo;

                if (heroes[heroName].mP >= manaNeeded) {
                    heroes[heroName].mP -= manaNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mP} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case 'TakeDamage':
                let damage = Number(valueOne);
                let attacker = valueTwo;

                heroes[heroName].hP -= damage;
                if (heroes[heroName].hP > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hP} HP left!`);
                } else {
                    delete heroes[heroName];
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
                break;

            case 'Recharge':
                let amount = Number(valueOne);
                let initialMp = heroes[heroName].mP;

                heroes[heroName].mP = Math.min(heroes[heroName].mP + amount, 200);
                console.log(`${heroName} recharged for ${heroes[heroName].mP - initialMp} MP!`);
                break;

            case 'Heal':
                let healAmount = Number(valueOne);
                let initialHp = heroes[heroName].hP;

                heroes[heroName].hP = Math.min(heroes[heroName].hP + healAmount, 100);
                console.log(`${heroName} healed for ${heroes[heroName].hP - initialHp} HP!`);
                break;
        }

        command = input.shift();
    }

    Object.keys(heroes)
        .sort((a, b) => heroes[b].hP - heroes[a].hP || a.localeCompare(b))
        .forEach((heroName) => {
            console.log(`${heroName}\n  HP: ${heroes[heroName].hP}\n  MP: ${heroes[heroName].mP}`);
        });
}

codeHeroes(['2', 'Solmyr 85 120', 'Kyrre 99 50', 'Heal - Solmyr - 10', 'Recharge - Solmyr - 50', 'TakeDamage - Kyrre - 66 - Orc', 'CastSpell - Kyrre - 15 - ViewEarth', 'End'])