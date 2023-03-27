function meetings(input) {
    let meetingsObj = {};

    for (let entries of input) {
        let [day, name] = entries.split(' ')

        if (meetingsObj[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingsObj[day] = name;
            console.log(`Scheduled for ${day}`);  
        }
    }

    for (let day in meetingsObj) {
        console.log(`${day} -> ${meetingsObj[day]}`);
    }
}

meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])