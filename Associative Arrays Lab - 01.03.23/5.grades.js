function grades(input) {
    let personalGrades = {};

    for (const line of input) {
        let lineArr = line.split(' ');
        let name = lineArr.shift();
        let grades = lineArr.map((x) => Number(x))

        if (personalGrades.hasOwnProperty(name)) {
            personalGrades[name] = personalGrades[name].concat(grades);
        } else {
            personalGrades[name] = grades;
        }
    }

    let studetsEntry = Object.entries(personalGrades);
    let sortedStudents = studetsEntry.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (const [name, grades] of sortedStudents) {
        sum = 0;

        for (const grade of grades) {
            sum += grade;
        }

        let avarage = sum / grades.length;
        console.log(`${name}: ${avarage.toFixed(2)}`);
    }
}

grades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6'])