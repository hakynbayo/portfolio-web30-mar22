// function sortCardRanks(cards) {
//   const cardRanking = {
//     1: 1,
//     3: 3,
//     4: 4,
//     2: 2,
//     7: 7,
//     6: 6,
//     5: 5,
//     Queen: 12,
//     8: 8,
//     Jack: 11,
//     9: 9,
//     King: 13,
//     10: 10,
//     Ace: 14,
//   };
//   return cards.sort((a, b) => cardRanking[a] - cardRanking[b]);
// }

// Example usage
// const cards = ["Jack", 8, 2, 2, 6, "King", 5, 3, "Queen", "King", "Queen"];
// const sortedCardRanks = sortCardRanks;

// console.log(
//   sortCardRanks(["Jack", 8, 2, 2, 6, "King", 5, 3, "Queen", "King", "Queen"])
// );

// function isPalindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   console.log(reversed);
//   return str === reversed;
// }
// console.log(isPalindrome("racecar"));

function firstNonRepeatingChar(str) {
  const charCount = {};

  // First pass: count the occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Second pass: find the first character with a count of 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeating character found
}

// Example Usage
console.log(firstNonRepeatingChar("swiss")); // "w"
console.log(firstNonRepeatingChar("teeter")); // "r"
console.log(firstNonRepeatingChar("aabbcc")); // null
