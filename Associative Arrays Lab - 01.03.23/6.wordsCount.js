function words(wordsInput) {
    let words = {};

    for (const word of wordsInput) {

        if (!words[word]) {
            words[word] = 0;
        }

        words[word]++;

    }

    let wordsEntry = Object.entries(words);

    let sortedCount = wordsEntry.sort((a, b) => b[1] - a[1])

    for (const [word, count] of sortedCount) {
        console.log(`${word} -> ${count} times`);

    }
}

words(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])