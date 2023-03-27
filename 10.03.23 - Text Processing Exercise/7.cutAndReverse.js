function cutAndReverse(text) {
    let textArr = text.split('');
    let textA = [];
    let textB = [];
    let textAA = [];
    let textBB = [];

    for (let i = 0; i < textArr.length / 2; i++) {
        textA.push(text[i]);
    }
    for (let i = text.length / 2; i < textArr.length; i++) {
        textB.push(text[i]);
    }
    
    for (let i = textA.length -1; i >= 0; i--) {
        textAA.push(textA[i]);
        textBB.push(textB[i]);
    }
    console.log(`${textAA.join('')}
${textBB.join('')}`);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')