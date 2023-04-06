function pirates(input) {
    let days = Number(input.shift());
    let plunderPerDay = Number(input.shift());
    let target = Number(input.shift());

    let sum = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 15 == 0) {
            let plunder = (plunderPerDay * 1.5);
            sum = (sum + plunder) * 0.7;
            break;
        } else if (i % 3 == 0) {
            let plunder = plunderPerDay * 1.5;
            sum += plunder;
        } else if (i % 5 == 0) {
            let plunder = plunderPerDay;
            sum = (sum + plunder) * 0.7;
        } else {
            sum += plunderPerDay;
        }
    }

    if (sum >= target) {
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (sum / target) * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }

}

pirates((["5",

"40",

"100"]))

console.log(`---------------`);
pirates((["10", "20", "380"]))