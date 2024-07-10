function findCharacters(pattern, text) {
    const regex = new RegExp(pattern, "g"); 
    const matches = [];
    let match;
  
    while ((match = regex.exec(text)) !== null) {
      matches.push(match[0]); 
    }
  
    return matches;
  }
  
  console.log(findCharacters("\d", "This string has 123 numbers"))