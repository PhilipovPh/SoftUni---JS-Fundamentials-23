function extractFile(fileLocation) {
    let extraction = fileLocation.split('\\');
    let neededInfo = extraction.pop();
    let nameAndType = neededInfo.split('.');
    let type = nameAndType.pop();
    let name = nameAndType.join('.')
    console.log(`File name: ${name}`);
    console.log(`File extension: ${type}`);

}
extractFile('C:\\Internal\\training-internal\\Template.bac.pptx')