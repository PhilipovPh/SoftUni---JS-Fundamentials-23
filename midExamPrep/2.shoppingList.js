function shoppingList(input) {
    let shoppingListArr = input.shift().split('!');

    let comands = input.shift();

    while (comands != 'Go Shopping!') {
        let [comand, product, newProduct] = comands.split(' ')

        switch (comand) {
            case 'Urgent':
                if (shoppingListArr.includes(product)) {
                    break
                } else {
                    shoppingListArr.unshift(product);
                }
                break;
            case 'Unnecessary':
                if (shoppingListArr.includes(product)) {
                    let index = shoppingListArr.indexOf(product);
                    shoppingListArr.splice(index, 1);
                } else {
                    break;
                }
                break;
            case 'Correct':
                if (shoppingListArr.includes(product)) {
                    let index = shoppingListArr.indexOf(product);
                    shoppingListArr.splice(index, 1, newProduct);
                } else {
                    break;
                }
                break;
            case 'Rearrange':
                if (shoppingListArr.includes(product)) {
                    let index = shoppingListArr.indexOf(product);
                    shoppingListArr.splice(index, 1);
                    shoppingListArr.push(product)

                } else {
                    break;
                }
                break;
        }
        comands = input.shift();
    }
    console.log(shoppingListArr.join(', '));
}
shoppingList(["Tomatoes!Potatoes!Bread",

    "Unnecessary Potatoes",

    "Urgent Tomatoes",

    "Correct Bread Shrimp",

    "Urgent Peper",

    "Rearrange Peper",

    "Go Shopping!"])