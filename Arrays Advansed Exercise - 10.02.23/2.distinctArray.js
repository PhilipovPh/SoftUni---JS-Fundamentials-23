function solve(index) {
    let uniqueIndex = [];

    for (let el of index) {
        if (uniqueIndex.indexOf(el) === -1) {
            uniqueIndex.push(el);
        }
    }
    console.log(uniqueIndex.join(' '));
}