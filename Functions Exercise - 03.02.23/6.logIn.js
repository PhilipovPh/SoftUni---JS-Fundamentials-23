function logIn(log) {
    let passwordLength = logInLength(log);
    if (passwordLength === false) {
        console.log("Password must be between 6 and 10 characters");
    }

    let onlyCharsAndNumbs = charsAndNumb(log);
    if (onlyCharsAndNumbs === false) {
        console.log("Password must consist only of letters and digits");
    }

    let numbsInPassword = twoNumbers(log);
    if (numbsInPassword === false) {
        console.log("Password must have at least 2 digits");
    }

    if (passwordLength === true && onlyCharsAndNumbs === true && numbsInPassword === true) {
        console.log("Password is valid");
    }

    function logInLength(log) {
        let isTrue = true;
        if (log.length < 6 || log.length > 10) {
            isTrue = false;
            return isTrue;
        } else {
            isTrue = true;
            return isTrue;
        }
    }

    function charsAndNumb(log) {
        let isTrue = true;
        for (let i = 0; i < log.length; i++) {
            let currentChar = log[i].charCodeAt(0);
            if ((currentChar >= 65 && currentChar <= 90) || (currentChar >= 97 && currentChar <= 122) || (currentChar >= 48 && currentChar <= 57)) {
                isTrue = true;
            } else {
                isTrue = false;
                return isTrue;
            }
        }
        return isTrue;
    }

    function twoNumbers(log) {
        let numbCount = 0;
        let isTrue = true;
        for (let i = 0; i < log.length; i++) {
            let currentChar = log[i].charCodeAt(0);
            if (currentChar >= 48 && currentChar <= 57) {
                numbCount++
            }
        }
        if (numbCount < 2) {
            isTrue = false;
            return isTrue;
        } else {
            isTrue = true;
            return isTrue;
        }
    }
}
logIn('logIn')
console.log('-------------');
logIn('MyPass123');
console.log('-------------');
logIn('Pa$s$s');