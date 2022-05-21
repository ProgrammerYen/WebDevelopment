function countVowels(word) {
    // your code here...
    let vowelCount = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            vowelCount ++;
        };
    };
    return vowelCount;
};
  
console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2