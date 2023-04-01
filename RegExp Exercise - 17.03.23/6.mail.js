function mail(input) {
    let pattern = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@[a-z]+\-?[a-z]+(\.[a-z]+)+/g;
    let emails = input.match(pattern);
    for (let mail of emails) {
        console.log(mail);
    }
}