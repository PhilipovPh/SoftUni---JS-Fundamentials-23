function extractFile(input) {
    let fileName = input.substring(input.lastIndexOf('\\') + 1);
    let name = fileName.substring(0, fileName.lastIndexOf('.'));
    let type =  fileName.substring(fileName.lastIndexOf('.'));
    console.log(`File name: ${name}`);
    console.log(`File extension: ${type}`);
}
extractFile('C:\\Internal\\training-internal\\Template.bac.pptx');