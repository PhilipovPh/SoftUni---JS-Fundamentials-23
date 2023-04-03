function heroes(input) {
    let heroObj = {};

    for (let line of input) {
        if (line === "End") {
            break;
        }

        let [command, hero, spell] = line.split(" ");

        switch (command) {
            case "Enroll":
                if (!heroObj[hero]) {
                    heroObj[hero] = [];
                } else {
                    console.log(`${hero} is already enrolled.`);
                }
                break;
            case "Learn":
                if (!heroObj[hero]) {

                    console.log(`${hero} doesn't exist.`);
                } else if (heroObj[hero].includes(spell)) {

                    console.log(`${hero} has already learnt ${spell}.`);
                } else {
                    heroObj[hero].push(spell);
                }
                break;
            case "Unlearn":
                if (!heroObj[hero]) {
                    console.log(`${hero} doesn't exist.`);
                } else if (!heroObj[hero].includes(spell)) {
                    console.log(`${hero} doesn't know ${spell}.`);
                } else {
                    heroObj[hero] = heroObj[hero].filter((s) => s !== spell);
                }
                break;
        }
    }

    console.log("Heroes:");

    Object.keys(heroObj)
        .forEach((hero) => {
            console.log(`== ${hero}: ${heroObj[hero].join(", ")}`);
        });
}

heroes(["Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"])
