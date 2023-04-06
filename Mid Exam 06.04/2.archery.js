function archery(input) {
    let targets = input.shift().split("|").map(Number);
    let points = 0;

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split("@");
        let direction = command[0];
        let startIndex = Number(command[1]);
        let length = Number(command[2]);

        if (direction === "Shoot Left" && startIndex >= 0 && startIndex < targets.length) {
            let currentIndex = startIndex;
            while (length > 0) {
                currentIndex = (currentIndex - 1 < 0) ? targets.length - 1 : currentIndex - 1;
                length--;
            }
            points += (targets[currentIndex] >= 5) ? 5 : targets[currentIndex];
            targets[currentIndex] = (targets[currentIndex] >= 5) ? targets[currentIndex] - 5 : 0;
        } else if (direction === "Shoot Right" && startIndex >= 0 && startIndex < targets.length) {
            let currentIndex = startIndex;
            while (length > 0) {
                currentIndex = (currentIndex + 1 >= targets.length) ? 0 : currentIndex + 1;
                length--;
            }
            points += (targets[currentIndex] >= 5) ? 5 : targets[currentIndex];
            targets[currentIndex] = (targets[currentIndex] >= 5) ? targets[currentIndex] - 5 : 0;
        } else if (direction === "Reverse") {
            targets.reverse();
        } else if (direction === "Game over") {
            console.log(targets.join(" - "));
            console.log(`John finished the archery tournament with ${points} points!`);
            break;
        }
    }
}

archery(["10|10|10|10|10",
    "Shoot Left@0@2",
    "Shoot Right@4@5",
    "Shoot Right@6@5",
    "Reverse",
    "Game over"]);

