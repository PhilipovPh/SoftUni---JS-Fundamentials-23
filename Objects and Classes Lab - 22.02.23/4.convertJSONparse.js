function fromStringToObject(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };
    console.log(JSON.stringify(person));
}
fromStringToObject('George', 'Jones', 'Brown')