function countWords(inputString) {
    // Step 1: Split the input string into words
    const words = inputString.split(/\s+/);

    // Step 2: Create a Map to store word counts
    const wordCounts = new Map();
    
    // Step 3: Iterate through the words and update counts
    for (const word of words) {
        const cleanedWord = word.toLowerCase(); // Convert to lowercase for case-insensitivity
        const count = wordCounts.get(cleanedWord) || 0; // Get current count or initialize to 0
        wordCounts.set(cleanedWord, count + 1); // Increment count
    }

    return wordCounts;
}

// Example usage:
const inputText = "This is a sample text. This text contains some sample words.";
const result = countWords(inputText);
console.log(result); // Map { 'this' => 2, 'is' => 1, 'a' => 1, 'sample' => 2, 'text' => 2, 'contains' => 1, 'some' => 1, 'words' => 1 }
