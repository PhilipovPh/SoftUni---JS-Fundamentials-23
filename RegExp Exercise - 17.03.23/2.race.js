
    function processRaceInfo(input) {
        const racers = input[0].split(", ");
        const results = {};
      
        for (let i = 1; i < input.length; i++) {
          if (input[i] === "end of race") break;
      
          const match = input[i].match(/[A-Za-z]+/g);
          const name = match ? match.join("") : "";
      
          if (racers.includes(name)) {
            const distance = input[i].match(/\d/g).reduce((a, b) => +a + +b);
            results[name] = (results[name] || 0) + distance;
          }
        }
      
        const sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]);
      
        console.log(sortedResults.length > 0 ? `1st place: ${sortedResults[0][0]}` : "No valid racers found.");
        console.log(sortedResults.length > 1 ? `2nd place: ${sortedResults[1][0]}` : "");
        console.log(sortedResults.length > 2 ? `3rd place: ${sortedResults[2][0]}` : "");
      }
  processRaceInfo(['George, Peter, Bill, Tom',

  'G4e@55or%6g6!68e!!@ ',
  
  'R1@!3a$y4456@',
  
  'B5@i@#123ll',
  
  'G@e54o$r6ge#',
  
  '7P%et^#e5346r',
  
  'T$o553m&6',
  
  'end of race'])