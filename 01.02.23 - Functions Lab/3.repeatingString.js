function solve(string, repeating) {
    let buff = '';

    for (let i = 0; i < repeating; i++) {
        buff += string;
    }
    console.log(buff);
}