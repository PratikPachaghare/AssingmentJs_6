function extractDate(pattern, text) {
    const regex = new RegExp(pattern);
    const match = regex.exec(text);
  
    if (match) {
      return {
        day: match[1], // Access captured groups by index (starting from 1)
        month: match[2],
        year: match[3],
      };
    } else {
      return null;
    }
  }console.log(extractDate(/(\d{2})[/-](\d{2})[/-](\d{4})/, "15-08-2023"));
  
  console.log(extractDate(/(\d{2})[/-](\d{2})[/-](\d{4})/, "15-08-2023"));