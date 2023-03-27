function words(input) {
    let counter = {};

    let words = input.shift().split(' ');

    for (const word of words) {
        counter[word] = 0;
    }

    for (const word of input) {
        if (counter.hasOwnProperty(word)) {
            counter[word]++;
        }
    }

    let wordsEntry = Object.entries(counter);
    let sortedWords = wordsEntry.sort((a, b) => b[1] - a[1])

    for (const lane of sortedWords) {
        console.log(`${lane[0]} - ${lane[1]}`);
    }
}

words([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])

console.log(`-----------------------`);
words([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])