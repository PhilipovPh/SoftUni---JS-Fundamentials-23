function matrix(n) {
    for (let rol = 1; rol <= n ; rol++) {
        let buff = "";
        for (let col = 1; col <= n; col++) {
            buff += n + " ";
        }
    console.log(buff.trim());    
    }
}
matrix(3)