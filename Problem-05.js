function analyzeText(text) {
    if (typeof text !== "string" || text === "") {
        return "Invalid";
    }
    
    let word = text.split(" ");
    let longest = word[0];

    for (let i = 0; i < word.length; i++) {
        if (word[i].length > longest.length) {
            longest = word[i];
        }
    }

    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== " ") count++;
    }

    return {
        longwords: longest,
        token: count
    };
}

console.log(analyzeText("I am a little honest person"));
console.log(analyzeText("Hello world"));        
console.log(analyzeText("Keep coding keep shining"));  
console.log(analyzeText(12345));                       
console.log(analyzeText("Programming is fun"));     
console.log(analyzeText("A quick brown fox"));          
console.log(analyzeText(""));
