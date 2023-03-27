function replaceWordByLength(wordString, templateString) {
    const words = wordString.split(",");
    const templates = templateString.split("*");
  
    if (templates.length !== 3) {
      throw new Error("Invalid template format. It should contain exactly two '*' characters.");
    }
  
    const templateLength = templates[1].length;
  
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];
      if (currentWord.length === templateLength) {
        const newString = templates[0] + currentWord + templates[2];
        console.log(newString);
        return;
      }
    }
  
    console.log(templateString);
  }
  
  replaceWordByLength("great,learning", "softuni is ***** place for ******** new programming languages");