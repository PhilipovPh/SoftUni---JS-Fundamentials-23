function palindrome(input) {
    for (let i = 0; i < input.length; i++) {
        let numbToString = String(input[i]);
        let buff = '';

        for (let j = numbToString.length - 1; j >= 0; j--) {
            buff += numbToString[j];
        }
        console.log(buff === numbToString);
    }
}
palindrome([123, 323, 421, 121])