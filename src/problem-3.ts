{
    //

    function countWordOccurrences(sentence: string, word: string): number {
        const words = sentence.toLowerCase().match(/\b\w+\b/g) || [];
        const targetWord = word.toLowerCase();
        return words.filter(w => w === targetWord).length; 
    }

    // const result= countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
    // console.log(result)

    //
}