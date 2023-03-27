function oddOccurrences(input) {
    let obj = {};
    let lowerCaseWords = input.split(' ').map(x => x.toLowerCase());

    for (const symbol of lowerCaseWords) {
        if (!obj[symbol]) {
            obj[symbol] = 1;
        } else {
            obj[symbol]++;
        }
    }
    let wordsEntries = Object.entries(obj);
    let newArr = [];

    for (const entry of wordsEntries) {
        let key = entry[0];
        let value = Number(entry[1]);
        if (value % 2 == 1) {
            newArr.push(key);
        }
    }
    console.log(newArr.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')