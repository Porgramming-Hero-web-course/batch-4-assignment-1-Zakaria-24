{
    //

    function countWordOccurrences(sentence: string, word: string): number {
        const words = sentence.toLowerCase().match(/\b\w+\b/g) || [];
        const targetWord = word.toLowerCase();
        return words.filter(w => w === targetWord).length; 
    }

    // const result= countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
    // console.log(result)


    // function countWordOccurrences(sentence: string, word: string): number {
    // const regex = new RegExp(`\\b${word}\\b`, "gi");
    // const matches = sentence.match(new RegExp(`\\b${word}\\b`, "gi"));
    // return matches ? matches.length : 0;
    // }
    
    // console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")); 
    //
}